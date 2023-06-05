import * as React from "react";
import { useState } from 'react';
import {
  ChakraProvider,
  ColorModeProvider,
  CSSReset,
  Flex,
  Box,
  useColorMode,
  IconButton,
  Heading,
  Link,
  Text,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button

} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
// import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom";
const Login = () => {
  return (
    <ChakraProvider>
      <ColorModeProvider>
        <CSSReset />
        <LoginArea />
      </ColorModeProvider>
    </ChakraProvider>
  );
}
const LoginArea = () => {
  return (
    <Flex minHeight={"100vh"} width={"full"} align={"center"} justifyContent={'center'}>
      <Box
        borderWidth={1}
        px={4}
        width={"full"}
        maxWidth={"500px"}
        borderRadius={4}
        textAlign={"center"}
        boxShadow={'lg'}
      >
        <ThemeSelector />
        <Box p={4}>
          <LoginHeader />
          <LoginForm />
        </Box>

      </Box>
    </Flex>
  );

}
const ThemeSelector = () => {
  const { colorModel, toggleColorMode } = useColorMode();
  return (
    <Box textAlign={'right'} py={4}>
      {/* <IconButton
        icon={colorMode === "light" ? SunIcon : MoonIcon }
        variant={'outline'}
        colorScheme="cyan"
        aria-label="Color mode switcher"
        onClick={toggleColorMode}
      /> */}
      <IconButton
        colorScheme="cyan"
        variant={'outline'}
        aria-label="Color mode switcher"
        onClick={toggleColorMode}
      >
        <Text>
          C
        </Text>
      </IconButton>
    </Box>
  );
}

const LoginHeader = () => {
  return (
    <Box textAlign={"center"}>
      <Heading> Sig In</Heading>
    </Box>
  );
}

const LoginForm = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const handleSigin = () => {
    console.log("password:" + password + "Email:" + email);
  }
  return (
    <Box my={8} textAlign={'left'}>
      <form>
        <FormControl isRequired>
          <FormLabel>Email sddress </FormLabel>
          <Input onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Enter your email address" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password </FormLabel>
          <Input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Enter your Password" />
        </FormControl>
        <Stack isInline justifyContent={"space-between"} mt={4}>
          <Box>
            <Checkbox> Remenber Me</Checkbox>
          </Box>
          <Box>
            <Link>Forgot password</Link> <br />
            <Link color={'green'}>Sig up</Link>
          </Box>
        </Stack>
        <Button onClick={handleSigin} colorScheme="green" width={"full"} mt={4}>Sin In</Button>
      </form>
    </Box>
  );
}
export default Login;


