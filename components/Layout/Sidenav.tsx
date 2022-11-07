import {
  Box,
  DrawerProps,
  Icon,
  Link,
  LinkProps,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React, { memo, useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import logo from "../../assets/icons/logo.svg";
import flash from "../../assets/icons/flash.svg";
import sidenavHome from "../../assets/icons/sidenav-home.svg";

interface NavItemProps extends LinkProps {
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  name?: string;
  link: string;
  customName?: string;
}

const NavItem: React.FC<NavItemProps> = memo(
  ({ icon, name, link, customName, ...rest }) => {
    const [active, setActive] = useState(false);
    const router = useRouter();
    const { colorMode } = useColorMode();

    useEffect(() => {
      router.asPath === link && setActive(!active);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <NextLink href={link} passHref>
        <Link
          display="flex"
          alignItems="center"
          mb="48px"
          {...rest}
          _hover={{ color: "#8A52FF", fill: "#8A52FF" }}
          className={active ? "sidenav-element active" : "sidenav-element"}
        >
          <Icon as={icon} className={`sidenav-icon ${customName}`} />
          {name && (
            <Text
              ml="20px"
              fontSize={{ md: "15px", lg: "16px" }}
              className="sidenav-text"
              // {...(active && { color: '#00FFC2' })}
            >
              {name}
            </Text>
          )}
        </Link>
      </NextLink>
    );
  }
);

// Display name
NavItem.displayName = "NavItem";

interface SidenavProps {
  className?: string;
  placement?: DrawerProps["placement"];
}

const SideNav: React.FC<SidenavProps> = memo(() => {
  return (
    <Box
      h="100vh"
      w="95px"
      borderRadius="0px 20px 20px 0px"
      bg="primary"
      p="30px 32px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        position: "-webkit-sticky",
        top: "0",
        left: "0",
      }}
      position="static"
      pos="relative"
    >
      <Icon
        as={logo}
        // mb={{ md: "30px", lg: "60px", xlg: "105px" }}
        w="35"
        h="30"
        mb="60px"
      />
      <NavItem icon={sidenavHome} link="/" />
      <NavItem icon={flash} link="/trending" />
      {/* <NavItem icon={usersIcon} name="Users" link="/users" /> */}
      {/* <NavItem icon={depositsIcon} name="Deposits" link="/deposits" /> */}
      {/* <NavItem icon={withdrawalsIcon} name="Withdrawals" link="/withdrawals" /> */}
      {/* <Box position="absolute" bottom={{ md: "10px", lg: "0" }}> */}
      {/* <NavItem icon={needHelpIcon} name="Need Help?" link="/support" /> */}
      {/* <NextLink href="/" passHref>
          <Link
            display="flex"
            alignItems="center"
            ml="0.4rem"
            py="3"
            mt="2"
            mb={{ lg: "25px", xlg: "60px" }}
            color="#ffbdbd"
          >
            <Icon as={logoutIcon} fontSize={{ md: "0.75rem", lg: "1rem" }} />
            <Text ml="20px" fontSize={{ md: "15px", lg: "16px" }}>
              Logout
            </Text>
          </Link>
        </NextLink> */}
      {/* </Box> */}
    </Box>
  );
});
SideNav.displayName = "SideNav";

export default SideNav;
