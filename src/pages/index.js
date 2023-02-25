import { VStack, Container, Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import { auth } from "../../firebase";

export default function Home() {
  const userAuth = auth;
  // onAuthStateChanged(userAuth, async (user) => {
  //   if (!user) {
  //     signInAnonymously(userAuth);
  //   }
  // });

  return (
    <>
      <Container>
        <Box>
          <VStack spacing={4}>
            <Link href="signup">
              <Button colorScheme="red">新規登録</Button>
            </Link>
            <Link href="login">
              <Button>ログイン</Button>
            </Link>
            <Link href="">
              <Button>登録せず始める</Button>
            </Link>
          </VStack>
        </Box>
      </Container>
    </>
  );
}
