import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useEffect } from "react";
import { ApiService } from "../../../services/api.service";
const Register = () => {
  return (
    <RegisterForm />
  );
}
const RegisterForm = () => {
  const schema = yup.object().shape({
    username: yup.string().required().min(4).max(59),
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
  useEffect(
    () => {
      // ApiService.get('http://localhost:8000/api/hotels').then(res => console.log("api service response:", res));
    }, []
  );
  const handleSigUp = (data) => {
    console.log("data input:", data);
    if(data){
      ApiService.post()
    }
  }


  return (
    <form onSubmit={handleSubmit(handleSigUp)}>
      <FormControl>
        <FormLabel>UserName </FormLabel>
        <Input
          {...register("username")}
          type="text"
          placeholder="Enter your username" />
        {errors.user_name?.message && <li className="text-danger">{errors.user_name.message}</li>}
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


