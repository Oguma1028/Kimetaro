import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Spacer,
  chakra,
} from "@chakra-ui/react";

const Signup = () => {
  return (
    <Container py={14}>
      <Heading>サインアップ</Heading>
      <chakra.form>
        <Spacer height={8} aria-hidden />
        <Grid gap={4}>
          <Box>
            <FormControl>
              <FormLabel>メールアドレス</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>パスワード</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>パスワード(確認用)</FormLabel>
              <Input />
            </FormControl>
          </Box>
        </Grid>
        <Spacer height={4} aria-hidden />
        <Center>
          <Button colorScheme="red">アカウントを作成</Button>
        </Center>
      </chakra.form>
    </Container>
  );
};

export default Signup;
