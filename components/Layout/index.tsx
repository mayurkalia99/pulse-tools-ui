import React, { memo } from "react";
import { Box, BoxProps, HStack, Show } from "@chakra-ui/react";
import SideNav from "./Sidenav";
import Header, { SearchBar } from "./Header";
import MobileNav from "./MobileNav";

interface LayoutPropType extends BoxProps {
  children: JSX.Element;
}

const Layout = ({ children, ...rest }: LayoutPropType) => {
  return (
    <>
      <HStack alignItems="flex-start">
        <Show above="md">
          <SideNav />
        </Show>
        <Box
          className="layout-right-side"
          p={{
            xsm: "38px 17px 40px 17px",
            md: "22px 45px 0px 25px",
            xlg: "22px 80px 0px 50px",
          }}
          marginInlineStart="0px !important"
          w="100vw"
          h="100vh"
          overflowX="hidden"
          overflowY="auto"
          {...rest}
        >
          <Header />
          <Show below="md">
            <SearchBar />
          </Show>
          {children}
        </Box>
      </HStack>
      <Show below="md">
        <MobileNav />
      </Show>
    </>
  );
};
Layout.displayName = "Layout";

export default Layout;
