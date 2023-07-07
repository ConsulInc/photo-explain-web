import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Spinner,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../features/user";
import { Navigate } from "react-router-dom";
import { LandingWithoutHeader } from "../Landing/LandingWithoutHeader";

export const RegisterPage = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const dispatch = useDispatch();
  const submitRegister = (e) => {
    console.log("hi");
    e.preventDefault();
    console.log(first_name, last_name, email, company, password);
    dispatch(register({ first_name, last_name, email, company, password }));
  };

  const { registered, loading } = useSelector((state) => state.user);
  const boxColor = useColorModeValue(useColorModeValue("gray.50", "gray.800"));
  const boxColor2 = useColorModeValue(useColorModeValue("white", "gray.700"));
  if (registered) return <Navigate to="/login" />;

  return (
    <div>
      <LandingWithoutHeader history={props.history} />
      <Flex minH={"100vh"} align={"center"} justify={"center"} bg={boxColor}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
          </Stack>
          <Box rounded={"lg"} bg={boxColor2} boxShadow={"lg"} p={8}>
            <form onSubmit={submitRegister}>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="first_name" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="last_name" isRequired>
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                  />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Company</FormLabel>
                  <Input
                    onChange={(e) => setCompany(e.target.value)}
                    type="company"
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {/* {showPassword ? <ViewIcon /> : <ViewOffIcon />} */}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <Stack spacing={10} pt={2}>
                  <Button
                    type="submit"
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    {loading ? <Spinner /> : <div>Sign up</div>}
                  </Button>
                </Stack>

                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user?{" "}
                    <Link
                      onClick={() => props.history.push("/login")}
                      color={"blue.400"}
                    >
                      Login
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};
