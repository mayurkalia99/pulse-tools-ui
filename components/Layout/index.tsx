import React, { memo } from "react";
import { Box, BoxProps, HStack } from "@chakra-ui/react";
import SideNav from "./Sidenav";
import Header from "./Header";

interface LayoutPropType extends BoxProps {
  children: JSX.Element;
}

const Layout = ({ children, ...rest }: LayoutPropType) => {
  return (
    <>
      <HStack alignItems="flex-start">
        <SideNav />
        <Box
          className="layout-right-side"
          p={{ md: "22px 45px 0px 25px", xlg: "22px 80px 0px 50px" }}
          marginInlineStart="0px !important"
          w={{ sm: "100vw", md: "100vw", lg: "100vw" }}
          maxH="100vh"
          overflowX="hidden"
          overflowY="auto"
          {...rest}
        >
          <Header />
          <Box>{children}</Box>
        </Box>
      </HStack>
    </>
  );
};
Layout.displayName = "Layout";

export default Layout;
