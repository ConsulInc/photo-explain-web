import React, { Component } from "react";
import "./Landing.css";
import logo from "./logo.png";

import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";

class Landing extends Component {
  render() {
    return (
      <div className="download-links-container">
        <header className="app-header">
          <div className="app-header-inner">
            <img src={logo} className="app-logo" alt="logo" />
            <h1 className="app-title">Photo Explain</h1>
            <Text className="appDescription">
              Take a picture of any question and get it answered.
            </Text>
          </div>
        </header>

        <button className="download-button-ios">Download on iOS</button>
        <button className="download-button-android">Download on Android</button>
        <Box
        // bg={useColorModeValue("gray.50", "gray.900")}
        // color={useColorModeValue("gray.700", "gray.200")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            spacing={4}
            justify={"center"}
            align={"center"}
            style={{ marginTop: 50 }}
          >
            <Stack direction={"row"} spacing={6}>
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
              <Link href={"/terms-of-service"}>Terms and Conditions</Link>
            </Stack>
          </Container>

          <Box
            borderTopWidth={1}
            borderStyle={"solid"}
            // borderColor={useColorModeValue("gray.200", "gray.700")}
          >
            <Container
              as={Stack}
              maxW={"6xl"}
              py={4}
              direction={{ base: "column", md: "row" }}
              spacing={4}
              justify={{ base: "center", md: "space-between" }}
              align={{ base: "center", md: "center" }}
            >
              <Text>© 2023 Consul, Inc. All rights reserved</Text>
              <Stack direction={"row"} spacing={6}></Stack>
            </Container>
          </Box>
        </Box>
      </div>
    );
  }
}

export default Landing;
