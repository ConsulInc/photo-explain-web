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
import { Header } from "../Header/Header";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

export const LoginPage = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { counter } = props;

  // Dispatch actions
  const handleChangeEmail = (e) => {
    console.log("user: " + e.target.value);
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    console.log("pass: " + e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );

  console.log("auth: ", isAuthenticated);

  useEffect(() => {
    // if (registered) {
    // dispatch(resetRegistered());
    // }
    if (isAuthenticated) {
      props.history.push("/home");
    }
  }, [isAuthenticated]);
  // }, [isAuthenticated, registered, dispatch, props.history]);

  return (
    <div>
      <Header history={props.history} />

      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            {/* {loading ? (
              <div>
                <Spinner />
              </div>
            ) : (
              ""
            )} */}
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          </Stack>
          <form onSubmit={handleSubmit}>
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
                    onChange={(e) => handleChangeEmail(e)}
                    type="email"
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    value={password}
                    onChange={(e) => handleChangePassword(e)}
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

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    user: state.user,
    error: state.error,
  };
};

export default connect(mapStateToProps)(LoginPage);
