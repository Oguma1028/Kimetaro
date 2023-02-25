import { VStack, Container, Box, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Container>
        <Box>
          <VStack spacing={4}>
            <Link href="signin">
              <Button colorScheme="red">新規登録</Button>
            </Link>
            <Link href="signup">
              <Button>ログイン</Button>
            </Link>
            <Link href="/">
              <Button>登録せず始める</Button>
            </Link>
          </VStack>
        </Box>
      </Container>
    </>
  );
}
