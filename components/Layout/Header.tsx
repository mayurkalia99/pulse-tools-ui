import React, { memo, FC } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import searchIcon from "../../assets/icons/search.svg";
import lightModeIcon from "../../assets/icons/lightmode.svg";
import darkModeIcon from "../../assets/icons/darkmode.svg";
import logo from "../../assets/icons/logo.svg";
import bell from "../../assets/icons/bell.svg";

// *Searchbar start
const SearchBar: React.FC = memo(() => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      w="650px"
      h="55px"
      bg="linear-gradient(90.06deg, rgba(240, 244, 249, 0.11) 0.06%, rgba(250, 251, 253, 0.11) 97.63%)"
      p="22px 23px"
      mr="40px"
      borderRadius="10px"
      alignItems="center"
      border={colorMode === "light" ? "0.25px solid #8000FF" : "none"}
      className="search-bar"
    >
      <Icon
        as={searchIcon}
        alt="searchIcon"
        fill={colorMode === "light" ? "black" : "white"}
      />
      <Input
        bg="transparent"
        border="none"
        color={colorMode === "light" ? "#505050" : "#BFBFBF"}
        mr="40px"
        placeholder="Search by token name, ticker or address"
        _placeholder={{
          color: "#BFBFBF",
        }}
        _focusVisible={{
          border: "none",
        }}
      />
    </Flex>
  );
});

SearchBar.displayName = "SearchBar";
// *Searchbar end

// *Theme button toggle start
const LightModeIcon = () => <Icon as={lightModeIcon} />;
const DarkModeIcon = () => <Icon as={darkModeIcon} />;

const ThemeButton: FC = memo(() => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      p="10px"
      borderRadius="10px"
      bg="rgba(147, 147, 147, 0.14)"
      color={colorMode === "light" ? "#B97BF8" : "#FDE097"}
      fontSize="14px"
      fontWeight="400"
      leftIcon={colorMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      alignItems="center"
      _hover={{
        bg: "#262626",
      }}
      _active={{
        bg: "#262626",
      }}
      boxShadow={colorMode === "dark" ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : ""}
      onClick={() => toggleColorMode()}
    >
      {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  );
});

ThemeButton.displayName = "ThemeButton";
// *Theme button toggle end

// *Stats start
const Stats: FC = memo(() => {
  const value = 5.251;
  return (
    <HStack as={Link} ml="10px">
      <Icon as={logo} alt="logo" w="14px" h="13px" />
      <Text fontSize="16px" fontWeight="600">
        PLS ${value}
      </Text>
    </HStack>
  );
});

Stats.displayName = "Stats";
// *Stats end

// *Notification Start
const BellIcon = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Icon
        as={bell}
        w="11px"
        h="13px"
        pos="relative"
        fill={colorMode === "light" ? "black" : "white"}
      />
      <Box
        as={"span"}
        color={"white"}
        position={"absolute"}
        top={{ md: "10px", lg: "9px", xlg: "9px" }}
        right={{ md: "13px", lg: "97px", xlg: "97px" }}
        fontSize={"0.8rem"}
        bgColor={"#5B0EFF"}
        borderRadius={"50px"}
        zIndex={9}
        p={{ sm: "2.5px", md: "3.5px", lg: "3.5px" }}
        marginLeft={{ sm: "12.5px" }}
        marginBottom={{ sm: "8.5px" }}
      ></Box>
    </>
  );
};

const NotificationButton = () => {
  return (
    <Button
      leftIcon={<BellIcon />}
      bg="whiteAlpha.300"
      fontSize="14px"
      fontWeight="400"
      letterSpacing="0.44px"
      borderRadius="10px"
      h="35px"
      ml="18px"
    >
      Notification
    </Button>
  );
};
// *Notification end

const Header: React.FC = memo(() => {
  return (
    <Box display="inline-flex" alignItems={"center"} w="100%" mb="30px">
      <Box flexGrow="1">
        <Heading as="h1" size="lg">
          PulseTools
        </Heading>
        <Text fontSize={"14px"} fontWeight="500">
          Find the best DEXs on PulseChain
        </Text>
      </Box>
      <SearchBar />
      <ThemeButton />
      <Stats />
      <NotificationButton />
    </Box>
  );
});

// Display name
Header.displayName = "Header";
export default Header;
