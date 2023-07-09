import React, { useEffect, useState } from "react";
import "./Landing.css";
import logo from "./logo.png";
import axios from "axios";
import { API_ENDPOINT } from "../config";
import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

const Landing = (props) => {
  const [totalNumber, setTotalNumber] = useState(0);

  useEffect(() => {
    axios
      .get(API_ENDPOINT + "/web-question/getNumberOfItems")
      .then((response) => {
        setTotalNumber(response.data.count);
      });
  }, []);

  return (
    <div>
      <div class="landingHeaderContainer">
        <div class="landingHeader1"></div>
        <div class="landingHeader2">
          <div class="centerRecent">
            <Breadcrumb style={{ marginRight: 50 }}>
              <BreadcrumbItem>
                <BreadcrumbLink href="/recentQuestions">
                  {" "}
                  <div className="recentQuestionsFont">Recent Questions</div>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>

            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="/login">
                  {" "}
                  <div className="recentQuestionsFont">Login</div>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <div className="download-links-container">
        <div class="statsCount">
          {totalNumber > 0 && (
            <div style={{ display: "flex", flexDirection: "row" }}>
              {" "}
              <p style={{ fontWeight: "bold", fontSize: 25 }}>
                {totalNumber}{" "}
              </p>{" "}
              &nbsp; questions answered
            </div>
          )}
        </div>

        <header className="app-header">
          <div className="app-header-inner">
            <img src={logo} className="app-logo" alt="logo" />
            <h1 className="app-title">Photo Explain</h1>
            <Text className="appDescription">
              Take a picture of any question and get it answered.
            </Text>
          </div>
        </header>
        <button
          style={{ marginTop: 10 }}
          onClick={() => {
            window.location.href =
              "https://apps.apple.com/us/app/photo-answer-1-photo-solver/id6445838759";
          }}
          className="download-button-ios"
        >
          Get the Chrome Extension
        </button>
        <button
          onClick={() => {
            window.location.href =
              "https://apps.apple.com/us/app/photo-answer-1-photo-solver/id6445838759";
          }}
          className="download-button-ios"
        >
          Download on iOS
        </button>
        <button
          onClick={() => {
            window.location.href =
              "https://play.google.com/store/apps/details?id=com.photo_answer_fe";
          }}
          className="download-button-android"
        >
          Download on Android
        </button>
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
    </div>
  );
};

export default Landing;
