import React, { useState, useEffect } from "react";
import { Button, Divider } from "@chakra-ui/react";

import Logo from "../logo.png";
import "./Header.css";

export const Header = (props) => {
  const [showSignUpIn, setShowSignUpIn] = useState(false);

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

  return (
    <div>
      <div className="headerContainer">
        <div className="mobileAboutUs" onClick={navAboutUs}>
          About Us
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
            style={{ flex: 1, textAlign: "center" }}
            className="webAboutUs hoverHeaderTab"
            onClick={navAboutUs}
          >
            About Us
          </div>
          <div
            className=""
            style={{
              textAlign: "center",
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            {localStorage.getItem("id") != null ? (
              <div
                className="mobileMyOrders hoverHeaderTab"
                onClick={(e) => {
                  props.history.push("/orders");
                }}
              >
                My Orders
              </div>
            ) : (
              <div>
                <div className="mobileMyOrders hoverHeaderTab">
                  Sign Up/ Log In
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
