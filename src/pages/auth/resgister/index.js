import * as React from "react";
import { useForm } from "react-hook-form";
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
const Register = () => {
  return (
    <ChakraProvider>
      <ColorModeProvider>
        <CSSReset />
        <RegisterArea />
      </ColorModeProvider>
    </ChakraProvider>
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
  let data = [
    {
      "id": 1,
      "role_name": "Busenisman"
    },
    {
      "id": 2,
      "role_name": "Nomal User"
    },
    {
      "id": 3,
      "role_name": "Manager"
    },
    {
      "id": 4,
      "role_name": "Employee"
    }
  ]
  const schema = yup.object().shape({
    username: yup.string().required().min(4).max(59),
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

  const handleSigUp = (data) => {
    console.log(data);
  }
  return (
    <Box my={8} textAlign={'left'}>
      <form onSubmit={handleSubmit((data) => handleSigUp(data))}>
        <FormControl>
          <FormLabel>UserName </FormLabel>
          <Input
            {...register("username")}
            type="text"
            placeholder="Enter your username" />
          {errors.username?.message && <p className="text-danger">{errors.username.message}</p>}
        </FormControl>

        <FormControl>
          <FormLabel>Email address </FormLabel>
          <Input
            {...register('email')}
            type="email"
            placeholder="Enter your email address" />
          {errors.email?.message && <p className="text-danger">{errors.email.message}</p>}
        </FormControl>

        <FormControl>
          <FormLabel>Password </FormLabel>
          <Input
            {...register('password')}
            type="password"
            placeholder="Enter your Password" />
          {errors.password?.message && <p className="text-danger">{errors.password.message}</p>}
        </FormControl>

        <FormControl>
          <FormLabel>Age </FormLabel>
          <Input
            {...register('age')}
            placeholder="Enter your Age" />
          {errors.age?.message && <p className="text-danger">{errors.age.message}</p>}
        </FormControl>

        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input
            {...register('address')}
            type="text" placeholder="Enter your Address" />
          {errors.address?.message && <p className="text-danger">{errors.address.message}</p>}
        </FormControl>

        <FormControl>
          <FormLabel>Image</FormLabel>
          <Input
            {...register("image")}
            type="text" />
          {errors.image?.message && <p className="text-danger">{errors.image.message}</p>}
        </FormControl>

        <FormControl>
          <FormLabel> Role</FormLabel>
          <Select
            {...register("role_id")}
          >
            {data.map(e =>(
               <option key={e.id} value={e.id}>{e.role_name}</option>
            ))}
            {errors.role_id?.message && <p className="text-danger">{errors.role_id.message}</p>}
          </Select>
        </FormControl>
        <br/>
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


