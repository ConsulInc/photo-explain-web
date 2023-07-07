import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  propNames,
  Stack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { LandingHeader } from "../Landing/LandingHeader";

import { useDispatch, useSelector } from "react-redux";
import { resetPassFunction } from "../../features/user";

export const ResetPassword = (props) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [email, setEmail] = useState(null);

  const submitEmail = (e) => {
    e.preventDefault();
    dispatch(resetPassFunction({ email }));
    toast({
      title: "Email Sent",
      description: `If an account exists with the email ${email}, you will receive an email with a link to reset your password.`,
      status: "success",
      duration: 10000,
      isClosable: true,
    });
  };

  return (
    <div>
      <LandingHeader history={props.history} />
      <form onSubmit={submitEmail}>
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
              Enter email
            </Heading>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="your-email@example.com"
                _placeholder={{ color: "gray.500" }}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </FormControl>

            <Stack spacing={6}>
              <Button
                onClick={submitEmail}
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
      </form>
    </div>
  );
};
