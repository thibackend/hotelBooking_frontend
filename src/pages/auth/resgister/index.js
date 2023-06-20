import * as React from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  ChakraProvider,
  ColorModeProvider,
  CSSReset,
  Flex,
  Box,
  useColorMode,
  IconButton,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
  Select,
  Image

} from '@chakra-ui/react';
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
const Register = () => {
  return (
    <ColorModeProvider>
      <CSSReset />
      <RegisterArea />
    </ColorModeProvider>
  );
}
const RegisterArea = () => {
  return (
    <Flex minHeight={"100vh"} width={"full"} align={"center"} justifyContent={'center'}>
      <Box
        borderWidth={1}
        px={4}
        width={"full"}
        maxWidth={"600px"}
        borderRadius={10}
        textAlign={"center"}
        boxShadow={'lg'}
      >
        <ThemeSelector />
        <Box p={4}>
          <RegisterHeader />
          <RegisterForm />
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

const RegisterHeader = () => {
  return (
    <Box textAlign={"center"}>
      <Heading> Register</Heading>
    </Box>
  );
}

const RegisterForm = () => {
  const [role, setRole] = useState([]);
  const schema = yup.object().shape({
    user_name: yup.string().required().min(4).max(59),
    email: yup.string().email().max(50).min(3),
    password: yup.string().required().min(5).max(30),
    address: yup.string().required().min(5).max(30),
    age: yup.number().min(18).max(200),
    image: yup.string().url(),
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
    }, []
  );
  const handleSigUp = async (data) => {
    console.log(data);
    // await axios.post('http://localhost:8000/api/users', data).then(() =>
    //   <Navigate to={'login'} />
    // );
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
          <FormLabel>Age </FormLabel>
          <Input
            {...register('age')}
            placeholder="Enter your Age" />
          {errors.age?.message && <li className="text-danger">{errors.age.message}</li>}
        </FormControl>

        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input
            {...register('address')}
            type="text" placeholder="Enter your Address" />
          {errors.address?.message && <li className="text-danger">{errors.address.message}</li>}
        </FormControl>

        <FormControl>
          <FormLabel>Image</FormLabel>
          <Input
            {...register("image")}
            type="text" />
          {errors.image?.message && <li className="text-danger">{errors.image.message}</li>}
        </FormControl>

        <FormControl>
          <FormLabel> Role</FormLabel>
          <Select
            {...register("role_id")}
          >
            {role.map(e => (
              <option key={e.id} value={e.id}>{e.name}</option>
            ))}
            {errors.role_id?.message && <li className="text-danger">{errors.role_id.message}</li>}
          </Select>
        </FormControl>
        <br />
        <FormControl>
          <FormLabel>Phone Number </FormLabel>
          <Input
            {...register("phone")}
            type="text"
            placeholder="Enter your phoneNumber" />
        </FormControl>
        <Button type="submit" colorScheme="green" width={"full"} mt={4}>Register</Button>
      </form>
    </Box >

  );
}
export default Register;


