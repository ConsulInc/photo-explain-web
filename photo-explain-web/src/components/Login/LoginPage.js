import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Spinner,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetRegistered, login } from "../../features/user";
import { LandingWithoutHeader } from "../Landing/LandingWithoutHeader";

export const LoginPage = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUser = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };
  const handlePass = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };
  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  const { isAuthenticated, loading, registered } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (registered) {
      dispatch(resetRegistered());
    }
    if (isAuthenticated) {
      props.history.push("/home");
    }
  }, [isAuthenticated, registered, dispatch, props.history]);

  return (
    <div>
      <LandingWithoutHeader history={props.history} />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            {loading ? (
              <div>
                <Spinner />
              </div>
            ) : (
              ""
            )}
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          </Stack>
          <form onSubmit={submitLogin}>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    value={email}
                    onChange={(e) => handleUser(e)}
                    type="email"
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    value={password}
                    onChange={(e) => handlePass(e)}
                    type="password"
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link
                      onClick={() => props.history.push("/reset")}
                      color={"blue.400"}
                    >
                      Forgot password?
                    </Link>
                  </Stack>
                  <Button
                    type="submit"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </form>
        </Stack>
      </Flex>
    </div>
  );
};
