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
import emailjs from "emailjs-com";
import { toast } from 'react-toastify';
import axios from "axios";

const Register = () => {
  return (
    <RegisterForm />
  );
}
const RegisterForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required().min(4).max(59),
    email:yup.string().email('Invalid email').required('Email is required').max(50).min(3),
    password: yup.string().required().min(5).max(30),
    address: yup.string().required().min(5).max(30),
    phone: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const [errorrs, setErrorrs] = useState('' || undefined);
  const [loginSucces, setSucces] = useState(false);

  const navigate = useNavigate();
  
  const handleSigUp = () => {
      axios.post('http://127.0.0.1:8000/api/register',values).then((res)=>{console.log(res);}).catch((e)=>{console.log(e);})
  }
    // RegisterUser(data)
    //   .then(
    //     (res) => {
    //       if (res) {
    //         setErrorrs(undefined);
    //         setSucces(true);
    //         setTimeout(function() {
    //           navigate('/Login');
    //         }, 3000);
    //       }
    //     }
    //   )
    //   .catch((errors) => {
    //     if (errors?.message) {
    //       console.log("errors", errors?.message);
    //       setErrorrs(errors.message);
    //       setSucces(false);
    //     }
    //   })

  const [values, setValues] = useState ({
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
  });
  
  const handleValue = (e) => {
    setValues ((values) => ({
      ...values, [e.target.name] : e.target.value,
    }));
  };

  const handleMultipleSubmit = (event) => {
    event.preventDefault();
    console.log(values)
    handleSigUp(event);
    sendEmail(event.target);
    reset();
  }

  const sendEmail = (form) => {
    emailjs.sendForm('service_78dzoqy', 'template_ccmsx4w', form, '1W0aSPIkDcO0BSO8k')
      .then((result) => {
        toast.success ('Gửi email xác thực thành công')
      })
      .catch((error) => {
        toast.success ('Gửi email thất bại! Vui lòng kiểm tra lại')
      });
  };

  return (
    <form onSubmit={handleMultipleSubmit}>
      {errorrs && (
        <Alert status="error">
          <AlertIcon />
          <AlertDescription>{errorrs}</AlertDescription>
        </Alert>
      )}

      {loginSucces && (
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Successful
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Thank you for joining our Web!
          </AlertDescription>
        </Alert>
      )}

      <div>
        <FormControl>
          <FormLabel>UserName </FormLabel>
          <Input
            {...register("name")}
            name="name"
            type="text"
            placeholder="Enter your username"
            onChange={handleValue}
          />
          {errors.name?.message && (
            <li className="text-danger">{errors.name.message}</li>
          )}
        </FormControl>

        <FormControl isInvalid = {!!errors.email}>
          <FormLabel>Email address </FormLabel>
          <Input
            {...register("email")}
            type="email"
            name="email"
            onChange={handleValue}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <Alert status="error">
              <AlertIcon />
              <AlertDescription>{errors.email.message}</AlertDescription>
            </Alert>
          )}
        </FormControl>

        <FormControl>
          <FormLabel>Password </FormLabel>
          <Input
            {...register("password")}
            type="password"
            placeholder="Enter your Password"
            onChange={handleValue}
          />
          {errors.password ?.message && (
            <li className="text-danger">{errors.password.message}</li>
          )}
        </FormControl>

        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input
            {...register("address")}
            type="text"
            placeholder="Enter your Address"
            onChange={handleValue}
          />
          {errors.address?.message && (
            <li className="text-danger">{errors.address.message}</li>
          )}
        </FormControl>

        <FormControl>
          <FormLabel>Phone Number </FormLabel>
          <Input
            {...register("phone")}
            type="text"
            placeholder="Enter your phoneNumber"
            onChange={handleValue}
          />
        </FormControl>
        <br />

        <FormControl>
          <Input type="submit" colorScheme="green" width={"full"} mt={4} />
        </FormControl>
      </div>
    </form>
  );
};
export default Register;