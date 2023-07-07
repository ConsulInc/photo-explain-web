import React, { useState, useEffect } from "react";
import {
  Flex,
  Stack,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export const ResetPasswordConfirm = (props) => {
  const submitPassReset = (e) => {
    e.preventDefault();
    console.log("hi");
    fetch("http://127.0.0.1:8000/api/auth/password-reset/confirm/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
        new_password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.detail) {
          console.log("error");
          alert(data.detail);
        } else {
          alert("Password reset successful");
          props.history.push("/login");
        }
      });
  };

  const navLogin = (eventId) => {
    console.log("hi");
    props.history.push("/login");
  };
  const location = useLocation();
  console.log(location);
  const token = location.pathname.split("=")[1];
  console.log(token);

  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);

  return (
    <div>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Enter new password
          </Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              placeholder=""
              _placeholder={{ color: "gray.500" }}
              type="email"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Button
              onClick={submitPassReset}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </div>
  );
};
