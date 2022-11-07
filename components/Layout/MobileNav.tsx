import {
  Box,
  Flex,
  Icon,
  Link,
  LinkProps,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import logo from "../../assets/icons/logo.svg";
import flash from "../../assets/icons/flash.svg";
import sidenavHome from "../../assets/icons/sidenav-home.svg";
import cup from "../../assets/icons/cup.svg";
import settings from "../../assets/icons/settings.svg";

interface NavItemProps extends LinkProps {
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  name?: string;
  link: string;
  customName?: string;
}

const MobileNavItem: React.FC<NavItemProps> = ({
  icon,
  name,
  link,
  customName,
  ...rest
}) => {
  const [active, setActive] = useState(false);
  const router = useRouter();
  const { colorMode } = useColorMode();

  useEffect(() => {
    router.asPath === link && setActive(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <NextLink href={link} passHref>
      <Link
        display="flex"
        flexDir="column"
        alignItems="center"
        {...rest}
        _hover={{ color: "#8A52FF", fill: "#8A52FF" }}
        color={
          colorMode === "light"
            ? { color: "black", fill: "black" }
            : { color: "white", fill: "white" }
        }
        className={active ? "sidenav-element active" : "sidenav-element"}
      >
        <Icon
          as={icon}
          w="24px"
          h="22px"
          className={`sidenav-icon ${customName}`}
          mb="7px"
          color={
            active
              ? "#6969FF"
              : colorMode === "light"
              ? { stroke: "black !important", fill: "black !important" }
              : { stroke: "white !important", fill: "white !important" }
          }
        />
        {name && (
          <Text
            fontSize="11px"
            className="sidenav-text"
            color={
              active ? "#6969FF" : colorMode === "dark" ? "white" : "black"
            }
          >
            {name}
          </Text>
        )}
      </Link>
    </NextLink>
  );
};

const MobileNav = () => {
  return (
    <Flex
      bottom="0"
      position="sticky"
      w="100%"
      h="75px"
      alignItems="center"
      justifyContent="space-around"
      bg="rgba(0, 0, 0, 0.54)"
      borderRadius="5px 5px 0px 0px"
    >
      <MobileNavItem icon={sidenavHome} name="Home" link="/" />
      <MobileNavItem icon={flash} name="Trending" link="/trending" />
      <Flex as={Link} href="/pulse" flexDir="column" alignItems="center">
        <Icon as={logo} w="40px" h="37px" mb="6px" />
        <Text fontSize="11px" className="mobile-nav-pulse-text">
          Pulse
        </Text>
      </Flex>
      <MobileNavItem icon={cup} name="Community" link="/community" />
      <MobileNavItem icon={settings} name="Settings" link="/settings" />
    </Flex>
  );
};

export default MobileNav;
