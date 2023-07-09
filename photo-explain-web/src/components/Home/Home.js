import React, { useEffect } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { Header } from "../Header/Header";
import "./Home.css";
import { useSelector } from "react-redux";
import { logoutRequest } from "../../actions/authActions";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { refreshUser } from "../../actions/authActions";

export const Home = (props) => {
  // const { user, loading } = useSelector((state) => state.user);
  //   const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log("lgout trigggered");
    dispatch(logoutRequest());
    props.history.push("/login");
    // Additional logout logic if needed
  };

  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  console.log("auth");
  console.log(isAuthenticated);

  const user = useSelector((state) => state.authReducer.user);
  console.log(user);

  console.log(localStorage.getItem("token"));

  console.log("email");
  console.log(localStorage.getItem("email"));

  useEffect(() => {
    console.log("test");
    fetchSubscriptionStatus();
    // dispatch(refreshUser());
  }, []);

  const fetchSubscriptionStatus = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8888/web-question/subscription`
      );
      const data = await response.json();

      const { subscribed, subscriptions, error } = data;

      if (subscribed) {
        console.log("User is subscribed");
        console.log("Subscriptions:", subscriptions);
      } else {
        console.log("User is not subscribed");
      }

      // Handle the response data in your React component
    } catch (error) {
      console.error(error);
    }
  };
  const handleStripeMonthly = (e) => {
    props.history.push("https://buy.stripe.com/test_eVa8xT8fC8mg2OY3cc");
  };

  function PriceWrapper({ children }: { children: ReactNode }) {
    return (
      <Box
        mb={4}
        shadow="base"
        borderWidth="1px"
        alignSelf={{ base: "center", lg: "flex-start" }}
        borderColor={useColorModeValue("gray.200", "gray.500")}
        borderRadius={"xl"}
      >
        {children}
      </Box>
    );
  }
  return (
    <div>
      <Header history={props.history} />
      <div>
        <div className="collectionList">
          <div className="collectionTopContainer">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexGrow: 1,
                width: "100%", // Set width to fill the parent container
                // background: "blue", // Optional background color for visualization
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                rounded={"lg"}
                boxShadow={"lg"}
                p={8}
                style={{ width: 2000 }}
              >
                <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                  {/* https://buy.stripe.com/test_eVa8xT8fC8mg2OY3cc
                   */}
                  <Box py={12}>
                    <VStack spacing={2} textAlign="center">
                      <Heading as="h1" fontSize="4xl">
                        Built by students. For students
                      </Heading>
                      <Text fontSize="lg" color={"gray.500"}>
                        5 free usages per day. <br /> No credit card needed.
                        Cancel at anytime.
                      </Text>
                    </VStack>
                    <Stack
                      direction={{ base: "column", md: "row" }}
                      textAlign="center"
                      justify="center"
                      spacing={{ base: 4, lg: 10 }}
                      py={10}
                    >
                      <PriceWrapper>
                        <Box py={4} px={12}>
                          <Text fontWeight="500" fontSize="2xl">
                            Monthly
                          </Text>
                          <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                              $
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                              4.99
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                              /month
                            </Text>
                          </HStack>
                        </Box>
                        <VStack
                          bg={useColorModeValue("gray.50", "gray.700")}
                          py={4}
                          borderBottomRadius={"xl"}
                        >
                          <List spacing={3} textAlign="start" px={12}>
                            <ListItem>
                              <ListIcon as={FaCheckCircle} color="green.500" />
                              unlimited build minutes
                            </ListItem>
                            <ListItem>
                              <ListIcon as={FaCheckCircle} color="green.500" />
                              Lorem, ipsum dolor.
                            </ListItem>
                            <ListItem>
                              <ListIcon as={FaCheckCircle} color="green.500" />
                              5TB Lorem, ipsum dolor.
                            </ListItem>
                          </List>
                          <Box w="80%" pt={7}>
                            <Button
                              w="full"
                              colorScheme="red"
                              variant="outline"
                            >
                              Purchase now
                            </Button>
                          </Box>
                        </VStack>
                      </PriceWrapper>

                      <PriceWrapper>
                        <Box position="relative">
                          <Box
                            position="absolute"
                            top="-16px"
                            left="50%"
                            style={{ transform: "translate(-50%)" }}
                          >
                            <Text
                              textTransform="uppercase"
                              bg={useColorModeValue("red.300", "red.700")}
                              px={3}
                              py={1}
                              color={useColorModeValue("gray.900", "gray.300")}
                              fontSize="sm"
                              fontWeight="600"
                              rounded="xl"
                            >
                              Most Popular
                            </Text>
                          </Box>
                          <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                              Growth
                            </Text>
                            <HStack justifyContent="center">
                              <Text fontSize="3xl" fontWeight="600">
                                $
                              </Text>
                              <Text fontSize="5xl" fontWeight="900">
                                49.99
                              </Text>
                              <Text fontSize="3xl" color="gray.500">
                                /year
                              </Text>
                            </HStack>
                          </Box>
                          <VStack
                            bg={useColorModeValue("gray.50", "gray.700")}
                            py={4}
                            borderBottomRadius={"xl"}
                          >
                            <List spacing={3} textAlign="start" px={12}>
                              <ListItem>
                                <ListIcon
                                  as={FaCheckCircle}
                                  color="green.500"
                                />
                                unlimited build minutes
                              </ListItem>
                              <ListItem>
                                <ListIcon
                                  as={FaCheckCircle}
                                  color="green.500"
                                />
                                Lorem, ipsum dolor.
                              </ListItem>
                              <ListItem>
                                <ListIcon
                                  as={FaCheckCircle}
                                  color="green.500"
                                />
                                5TB Lorem, ipsum dolor.
                              </ListItem>
                              <ListItem>
                                <ListIcon
                                  as={FaCheckCircle}
                                  color="green.500"
                                />
                                5TB Lorem, ipsum dolor.
                              </ListItem>
                              <ListItem>
                                <ListIcon
                                  as={FaCheckCircle}
                                  color="green.500"
                                />
                                5TB Lorem, ipsum dolor.
                              </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                              <Button w="full" colorScheme="red">
                                Purchase now
                              </Button>
                            </Box>
                          </VStack>
                        </Box>
                      </PriceWrapper>
                      <PriceWrapper>
                        <Box py={4} px={12}>
                          <Text fontWeight="500" fontSize="2xl">
                            Free
                          </Text>
                          <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                              $
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                              0
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                              /month
                            </Text>
                          </HStack>
                        </Box>
                        <VStack
                          bg={useColorModeValue("gray.50", "gray.700")}
                          py={4}
                          borderBottomRadius={"xl"}
                        >
                          <List spacing={3} textAlign="start" px={12}>
                            <ListItem>
                              <ListIcon as={FaCheckCircle} color="green.500" />5
                              usages per day
                            </ListItem>
                          </List>
                          <Box w="80%" pt={7}>
                            <Button
                              w="full"
                              colorScheme="red"
                              s
                              variant="outline"
                            >
                              Purchase now
                            </Button>
                          </Box>
                        </VStack>
                      </PriceWrapper>
                    </Stack>
                  </Box>

                  <Button
                    type="submit"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </Stack>
              </Box>
            </div>
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps)(Home);
