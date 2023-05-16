import React, { useState, useEffect } from "react";
import {
  Button,
  Divider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import axios from "axios";
import { API_ENDPOINT } from "../../config";
import Logo from "../logo.png";
import "./Header.css";

export const Header = (props) => {
  const [totalNumber, setTotalNumber] = useState(0);
  const navHome = (eventId) => {
    props.history.push("/");
  };

  const navLogin = (eventId) => {
    console.log("hi");
    props.history.push("/login");
  };

  const navAboutUs = (eventId) => {
    props.history.push("/aboutus");
  };

  const navOrders = (eventId) => {
    props.history.push("/orders");
  };

  useEffect(() => {
    console.log(localStorage.getItem("id"));
  }, []);

  useEffect(() => {
    axios
      .get(API_ENDPOINT + "/web-question/getNumberOfItems")
      .then((response) => {
        console.log(response.data);
        setTotalNumber(response.data.count);
      });
  }, []);

  return (
    <div>
      <div className="headerContainer">
        <div className="mobileAboutUs">
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
        </div>
        <div
          onClick={navHome}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img alt="logo" src={Logo} width={40} />
        </div>

        <div
          style={{
            display: "flex",
            direction: "row",
          }}
        >
          <div
            onClick={() => {
              props.history.push("/");
            }}
            className=""
            style={{
              textAlign: "center",
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  {" "}
                  <div className="recentQuestionsFont">Home</div>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};
