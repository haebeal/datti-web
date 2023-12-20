import { Center, HStack, Heading, Link, VStack } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import NextLink from "next/link";
import { useEffect } from "react";

export const getStaticProps = async () => {
  return {
    props: {
      layout: "error",
    },
  };
};

const NotAuthenticated = () => {
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      signOut();
    }
  }, [status]);

  return (
    <Center minH="80vh">
      <VStack gap={4}>
        <Heading size="xl">401 Not Authenticated</Heading>
        <Heading size="lg">認証情報の取得に失敗しました</Heading>
        <HStack gap={10}>
          <Link color="teal.500" as={NextLink} href="/">
            <Heading size="md">ホームへ</Heading>
          </Link>
          <Link color="teal.500" as={NextLink} href="/dashboard">
            <Heading size="md">ログイン</Heading>
          </Link>
        </HStack>
      </VStack>
    </Center>
  );
};

export default NotAuthenticated;