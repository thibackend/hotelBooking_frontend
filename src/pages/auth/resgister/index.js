import * as React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
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
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

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

const RegisterHeader = () => {
  return (
    <Box textAlign={"center"}>
      <Heading> Register</Heading>
    </Box>
  );
}

const RegisterForm = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();
  const [image, setImage] = useState("https://opensource.com/sites/default/files/lead-images/tux_linux_penguin_code_binary.jpg");
  const [role, setRole] = useState();
  const [phonenumber, setPhoneNumber] = useState(0);



  const handleSigin = () => {
    console.log("password:" + password + "Email:" + email);
  }
  return (
    <Box my={8} textAlign={'left'}>
      <form>
        <FormControl isRequired>
          <FormLabel>UserName </FormLabel>
          <Input onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder="Enter your username" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email address </FormLabel>
          <Input onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Enter your email address" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Password </FormLabel>
          <Input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Enter your Password" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Age </FormLabel>
          <Input onChange={(e) => { setAge(e.target.value) }} type="number" placeholder="Enter your Age" />
        </FormControl>

        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input onChange={(e) => { setAddress(e.target.value) }} type="text" placeholder="Enter your Address" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Image</FormLabel>
          <Input onChange={(e) => { setImage(e.target.value) }} type="file" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel> Role</FormLabel>
          <Select onChange={(e) => { setRole(e.target.value) }}>
            <option value='A'>Admin</option>
            <option value='1'>Businessman</option>
            <option value='2'>Employee</option>
            <option value='3'>user</option>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Phone Number </FormLabel>
          <Input onChange={(e) => { setPassword(e.target.value) }} type="number" placeholder="Enter your phoneNumber" />
        </FormControl>
        <Button onClick={handleSigin} colorScheme="green" width={"full"} mt={4}>Register</Button>
      </form>
      <Box boxSize='sm'>
        <Image src={image} alt="linux"/>
      </Box>
    </Box >

  );
}
export default Register;


