import * as React from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  CircularProgress,
} from '@chakra-ui/react';
import { useEffect } from "react";
import { ApiService } from "../../../services/api.service";
const Register = () => {
  return (
    <RegisterForm />
  );
}
const RegisterForm = () => {
  const [role, setRole] = useState([]);
  const [isManager, setIsmanager] = useState('');


  const schema = yup.object().shape({
    user_name: yup.string().required().min(4).max(59),
    email: yup.string().email().max(50).min(3),
    password: yup.string().required().min(5).max(30),
    address: yup.string().required().min(5).max(30),
    role_id: yup.number().required(),
    phonenumber: yup.string()
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const fetchRole = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/roles');
      setRole(response.data);
    } catch (error) {
      // Handle error, e.g., display an error message
      console.error('Error fetching role:', error);
    }
  }
  useEffect(
    () => {
      fetchRole();
       ApiService.get('http://localhost:8000/api/hotels').then(res=>console.log("api service response:",res));
    }, []
  );
  const handleSigUp = async (data) => {
    console.log(data);
    console.log(role);
  }


  return (
    <Box my={8} textAlign={'left'}>
      <form onSubmit={handleSubmit(handleSigUp)}>
        <FormControl>
          <FormLabel>UserName </FormLabel>
          <Input
            {...register("user_name")}
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
          <FormLabel> Role</FormLabel>
          <Select
            {...register("role_id")}
            onChange={(e) => setIsmanager(e.target.value ? "Manager" : null)}
          >
            {role ? role.map(e => (
              <option key={e.id} value={e.id}>{e.name}</option>
            )) : <CircularProgress size={'10px'} isIndeterminate color='green.300' />}
            {errors.role_id?.message && <li className="text-danger">{errors.role_id.message}</li>}
          </Select>
        </FormControl>
        {isManager ?
          <FormControl>
            <FormLabel>Choose company you are manager  </FormLabel>
            <Input
              {...register("company")}
              type="text"
              placeholder="Enter your phoneNumber" />
          </FormControl>
          : ''}


        <FormControl>
          <FormLabel>Phone Number </FormLabel>
          <Input
            {...register("phone")}
            type="text"
            placeholder="Enter your phoneNumber" />
        </FormControl>
        <br />

        <Button type="submit" colorScheme="green" width={"full"} mt={4}>Register</Button>
      </form>
    </Box >
  );
}
export default Register;


