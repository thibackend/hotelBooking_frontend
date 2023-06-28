import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import tokenService from "../../../services/token.service";
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
  Button,
  resolveStyleConfig
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../../services/auth";
const Login = () => {
  return (
    <ColorModeProvider>
      <CSSReset />
      <LoginArea />
    </ColorModeProvider>
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
export const LoginForm = () => {
  const schema = yup.object().shape({
    email: yup.string().email().min(4).max(100).required(),
    password: yup.string().min(4).max(40).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();
  console.log(errors.email);
  const handleSigin = (data) => {
    loginApi(data).then(
      res => {
        tokenService.setToken(res);
        navigate('/');
      }
    )

  }
  return (
    <Box my={8} textAlign={'left'}>
      <form onSubmit={handleSubmit(handleSigin)}>
        <FormControl>
          <FormLabel>Email sddress </FormLabel>
          <Input
            type="text"
            placeholder="Enter your email address"
            {...register('email')}
          />
          {errors.email?.message && <p className="text-danger">{errors.email.message}</p>}
        </FormControl>
        <FormControl>
          <FormLabel>Password </FormLabel>
          <Input
            type="password"
            placeholder="Enter your Password"
            {...register('password')}
          />
          {errors.password?.message && <p className="text-danger">{errors.password.message}</p>}
        </FormControl>
        <Stack isInline justifyContent={"space-between"} mt={4}>
          <Box>
            <Checkbox>Remenber Me</Checkbox>
          </Box>
          <Box>
            <Link>Forgot password</Link> <br />
            <Link color={'green'}>Sig up</Link>
          </Box>
        </Stack>
        <Button type="submit" colorScheme="green" width={"full"} mt={4}>Sin In</Button>
      </form>
    </Box>
  );
}
export default Login;


