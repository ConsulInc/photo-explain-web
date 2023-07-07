import {
  Box,
  Heading,
  Text,
  Link,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

import React, { Component } from "react";

class PrivacyPolicy extends Component {
  render() {
    return (
      <div style={{ padding: 75 }}>
        <Breadcrumb fontWeight="medium" fontSize="sm">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/terms-of-service">
              Terms of Service
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Box p="4">
          <Heading as="h1" size="xl" mb="4">
            Privacy Policy
          </Heading>
          <Text>
            Protecting the privacy and security of your information is a
            priority for everyone at Photo Answer. We work hard to collect only
            the data we need to make your experience better. When we do collect
            data we believe it’s important for you to know what we’re collecting
            and why we need it, so you can make informed choices. Photo Answer
            is designed with these principles in mind.
            <br />
            <br />
            Photo Answer may use information about your account to send you
            communications about other products and services.
            <br />
            <br />
            We may collect, use, transfer, and disclose non-personal information
            for any purpose. For example, we may aggregate your non-personal
            information with that of other Photo Answer users in order to
            improve the service.
            <br />
            <br />
            At all times, information collected by Photo Answer will be treated
            in accordance with Photo Answer's Privacy Policy.
            <br />
            <br />
            <Text fontWeight="bold">Disclosure to Third Parties</Text>
            <br />
            We do not share any of your individual data with third parties.
            Photo Answer may also share information with strategic partners who
            provide services such as information processing, providing customer
            service, assessing your interest in our products and services, and
            conducting customer research or satisfaction surveys on our behalf.
            These companies are obligated to protect your information and may be
            located wherever Photo Answer operates.
            <br />
            <br />
            Photo Answer also allows you to share Photo Answer content with
            other websites or social networks. When you share Photo Answer
            content to other places like websites or social networks, that
            information is governed by those websites’ or social networks’
            privacy policies. If you do not want this information to be shared
            with third parties, do not share Photo Answer content to third-party
            websites or social networks.
            <br />
            <br />
            Information about products not manufactured by Photo Answer, or
            independent websites not controlled or tested by Photo Answer, is
            provided without recommendation or endorsement. Photo Answer assumes
            no responsibility with regard to the selection, performance, or use
            of third-party websites or products. Photo Answer makes no
            representations regarding third-party website accuracy or
            reliability. Risks are inherent in the use of the internet. Contact
            the vendor for additional information. Other company and product
            names may be trademarks of their respective owners.
            <br />
            <br />
            Published Date: February 24, 2023
          </Text>
        </Box>
      </div>
    );
  }
}

export default PrivacyPolicy;
