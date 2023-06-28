import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertTitle,
  AlertIcon,
  AlertDescription,
} from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { ApiService } from "../../../services/api.service";
import { RegisterUser } from "../../../services/auth";
import { useNavigate } from "react-router-dom";
const Register = () => {
  return (
    <RegisterForm />
  );
}
const RegisterForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required().min(4).max(59),
    email: yup.string().email().max(50).min(3),
    password: yup.string().required().min(5).max(30),
    address: yup.string().required().min(5).max(30),
    phone: yup.string()
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });
  const [errorrs, setErrorrs] = useState('' || undefined);
  const [loginSucces, setSucces] = useState(false);

  const navigate = useNavigate();
  const handleSigUp = (data) => {
    RegisterUser(data)
      .then(
        (res) => {
          if (res) {
            setErrorrs(undefined);
            setSucces(true);
            setTimeout(function() {
              navigate('/');
            }, 3000);
          }
        }
      )
      .catch((errors) => {
        if (errors?.message) {
          console.log("errors", errors?.message);
          setErrorrs(errors.message);
          setSucces(false);
        }
      })
  }
  return (
    <form onSubmit={handleSubmit(handleSigUp)}>
      {errorrs ?
        <Alert status='error'>
          <AlertIcon />
          <AlertDescription>{errorrs}</AlertDescription>
        </Alert>
        : ''
      }

      {loginSucces ?
        <Alert
          status='success'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px'
        >
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            Successful
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            Thank you for joined our Web!
          </AlertDescription>
        </Alert>
        : ''
      }
      <FormControl>
        <FormLabel>UserName </FormLabel>
        <Input
          {...register("name")}
          type="text"
          placeholder="Enter your username" />
        {errors.name?.message && <li className="text-danger">{errors.name.message}</li>}
      </FormControl>

      <FormControl>
        <FormLabel>Email address </FormLabel>
        <Input
          {...register('email')}
          type="email"
          placeholder="Enter your email address" />
        {errors.email?.message && <li className="text-danger">{errors.email.message}</li>}
      </FormControl>

      <FormControl>
        <FormLabel>Password </FormLabel>
        <Input
          {...register('password')}
          type="password"
          placeholder="Enter your Password" />
        {errors.password?.message && <li className="text-danger">{errors.password.message}</li>}
      </FormControl>
      <FormControl>
        <FormLabel>Address</FormLabel>
        <Input
          {...register('address')}
          type="text" placeholder="Enter your Address" />
        {errors.address?.message && <li className="text-danger">{errors.address.message}</li>}
      </FormControl>
      <FormControl>
        <FormLabel>Phone Number </FormLabel>
        <Input
          {...register("phone")}
          type="text"
          placeholder="Enter your phoneNumber" />
      </FormControl>
      <br />

      <FormControl>
        <Input
          type="submit"
          colorScheme="green"
          width={"full"}
          mt={4} />
      </FormControl>
    </form>
  );
}
export default Register;


