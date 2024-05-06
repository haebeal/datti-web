import { FaceIcon, GearIcon } from "@radix-ui/react-icons";
import { Form, Link, NavLink } from "@remix-run/react";
import { User } from "~/api/datti/@types";
import { Avatar, AvatarImage } from "~/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

type Props = {
  /**
   * ログインユーザーのプロフィール情報
   */
  profile: User;
} & JSX.IntrinsicElements["div"];

export const Header = ({ profile, ...divProps }: Props) => (
  <div {...divProps}>
    <div className="container h-full flex items-center">
      <Link to="/" className="font-bold text-2xl">
        Datti
      </Link>
      <div className="flex items-center gap-12 m-auto font-bold">
        <NavLink
          className={({ isActive }) =>
            !isActive ? "text-gray-400" : undefined
          }
          to="/"
        >
          ホーム
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            !isActive ? "text-gray-400" : undefined
          }
          to="/groups"
        >
          グループ
        </NavLink>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="border border-gray-200 hover:cursor-pointer">
            <AvatarImage src={profile.photoUrl} />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{profile.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link to="/setting">
            <DropdownMenuItem className="hover:cursor-pointer flex gap-2">
              <GearIcon />
              設定
            </DropdownMenuItem>
          </Link>
          <Link to="/friends">
            <DropdownMenuItem className="hover:cursor-pointer flex gap-2">
              <FaceIcon />
              フレンド
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <Form action="/api/auth/signout" method="post">
            <DropdownMenuItem asChild>
              <input
                className="hover:cursor-pointer w-full h-full"
                type="submit"
                value="ログアウト"
              />
            </DropdownMenuItem>
          </Form>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
);
