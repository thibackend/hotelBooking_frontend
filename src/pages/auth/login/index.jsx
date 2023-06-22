import * as React from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import tokenService from "../../../services/token.service";
import {
  Box,
  Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
const Login = () => {
  return (
    <>
      {/* <LoginArea /> */}
    </>
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
  // execute function......
  const handleSigin = (data) => {
    console.log(data);
    const api = "http://localhost:8000/api/login";
    const login = async () => {
      await axios.post(api, data)
        .then((res) => {
          if (res.data.status) {
            tokenService.setToken(res.data);
            navigate("/");
          } else {
            alert("account didn't exist");
          }
        })
        ;
    }
    login();
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
          {errors.email?.message && <li className="text-danger">{errors.email.message}</li>}
        </FormControl>
        <FormControl>
          <FormLabel>Password </FormLabel>
          <Input
            type="text"
            placeholder="Enter your Password"
            {...register('password')}
          />
          {errors.password?.message && <li className="text-danger">{errors.password.message}</li>}
        </FormControl>
        <Stack isInline justifyContent={"space-between"} mt={4}>
          <Box>
            <Checkbox>Remenber Me</Checkbox>
          </Box>
          <Box>
            <Link>Forgot password</Link> <br />
          </Box>
        </Stack>
        <Button type="submit" colorScheme="green" width={"full"} mt={4}>Sigin</Button>
      </form>
    </Box>
  );
}
export default Login;


