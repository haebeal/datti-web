import { Await, useLoaderData, useLocation } from "@remix-run/react";
import { Suspense } from "react";
import { FriendsLoader } from "~/.server/loaders";
import { FriendCard } from "~/components/FriendCard";

function LoadingSpinner() {
  return (
    <div className="w-full min-h-[60vh] grid place-content-center">
      <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent" />
    </div>
  );
}

export function FriendList() {
  const { friends, applyings, pendings } = useLoaderData<FriendsLoader>();

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);

  const status = searchParams.get("status");

  return (
    <div className="w-full min-h-[60vh]">
      <Suspense fallback={<LoadingSpinner />}>
        <Await
          resolve={
            status === "applying"
              ? applyings
              : status === "pending"
                ? pendings
                : friends
          }
        >
          {({ users }) =>
            Array.isArray(users) && users.length > 0 ? (
              <div className="w-full min-h-[60vh] flex flex-col items-center p-4 gap-3">
                {users.map((user) => (
                  <FriendCard key={user.uid} friend={user} />
                ))}
              </div>
            ) : (
              <div className="w-full min-h-[60vh] grid place-content-center">
                <h2 className="font-semibold text-2xl text-center">
                  {status === "pending"
                    ? "申請中のユーザーはいません😿"
                    : status === "applying"
                      ? "受理中のユーザーはいません😿"
                      : "フレンドがいません😿"}
                </h2>
              </div>
            )
          }
        </Await>
      </Suspense>
    </div>
  );
}
