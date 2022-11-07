import React, { memo, FC } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  Link,
  Show,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import searchIcon from "../../assets/icons/search.svg";
import lightModeIcon from "../../assets/icons/lightmode.svg";
import darkModeIcon from "../../assets/icons/darkmode.svg";
import logo from "../../assets/icons/logo.svg";
import bell from "../../assets/icons/bell.svg";

// *Searchbar start
export const SearchBar: React.FC = memo(() => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      w={{ xsm: "100%", md: "650px" }}
      h={{ xsm: "42px", md: "55px" }}
      bg="linear-gradient(90.06deg, rgba(240, 244, 249, 0.11) 0.06%, rgba(250, 251, 253, 0.11) 97.63%)"
      p="22px 23px"
      mr="40px"
      mb={{ xsm: "15px", md: "0px" }}
      borderRadius="10px"
      alignItems="center"
      border={colorMode === "light" ? "0.25px solid #8000FF" : "none"}
      className="search-bar"
    >
      <Icon as={searchIcon} fill={colorMode === "light" ? "black" : "white"} />
      <Input
        bg="transparent"
        border="none"
        color={colorMode === "light" ? "#505050" : "#BFBFBF"}
        mr="40px"
        fontSize={{ xsm: "12px", md: "16px" }}
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
    <>
      <Show above="md">
        <Button
          ml="12px"
          p="10px"
          borderRadius="10px"
          bg="rgba(147, 147, 147, 0.14)"
          fontSize="14px"
          fontWeight="400"
          leftIcon={
            colorMode === "light" ? <DarkModeIcon /> : <LightModeIcon />
          }
          color={colorMode === "light" ? "#B97BF8" : "#FDE097"}
          alignItems="center"
          _hover={{
            bg: "#262626",
          }}
          _active={{
            bg: "#262626",
          }}
          boxShadow={
            colorMode === "dark" ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : ""
          }
          onClick={() => toggleColorMode()}
        >
          {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Show>
      <Show below="md">
        <IconButton
          color={colorMode === "light" ? "#B97BF8" : "#FDE097"}
          alignItems="center"
          _hover={{
            bg: "#262626",
          }}
          _active={{
            bg: "#262626",
          }}
          boxShadow={
            colorMode === "dark" ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : ""
          }
          onClick={() => toggleColorMode()}
          icon={colorMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          aria-label={"theme-toggle"}
        />
      </Show>
    </>
  );
});

ThemeButton.displayName = "ThemeButton";
// *Theme button toggle end

// *Stats start
const Stats: FC = memo(() => {
  const value = 5.251;
  return (
    <>
      <Show above="md">
        <HStack as={Link} ml="10px">
          <Icon as={logo} w="14px" h="13px" />
          <Text fontSize={{ xsm: "12px", md: "16px" }} fontWeight="600">
            <Text as="span"></Text> PLS ${value}
          </Text>
        </HStack>
      </Show>
      <Show below="md">
        <Text as={Link} fontSize={{ xsm: "12px", md: "16px" }} fontWeight="600">
          <Text as="span" color="#B97BF8">
            PLS
          </Text>{" "}
          ${value}
        </Text>
      </Show>
    </>
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
        w={{ xsm: "14px", md: "11px" }}
        h={{ xsm: "14px", md: "13px" }}
        pos="relative"
        fill={colorMode === "light" ? "black" : "white"}
      />
      <Box
        as={"span"}
        color={"white"}
        position={"absolute"}
        top={{ xsm: "10px", md: "10px", lg: "9px", xlg: "9px" }}
        right={{ xsm: "13px", md: "13px", lg: "97px", xlg: "97px" }}
        fontSize={"0.8rem"}
        bgColor={"#FF6BFF"}
        borderRadius={"50px"}
        zIndex={9}
        p={{ xsm: "2.8px", md: "3.5px", lg: "3.5px" }}
        marginLeft={{ xsm: "12.5px" }}
        marginBottom={{ xsm: "8.5px" }}
      ></Box>
    </>
  );
};

const NotificationButton = () => {
  return (
    <>
      <Show above="md">
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
      </Show>
      <Show below="md">
        <IconButton
          ml="9px"
          mr="6px"
          icon={<BellIcon />}
          aria-label={"notification"}
        />
      </Show>
    </>
  );
};
// *Notification end

const Header: React.FC = memo(() => {
  return (
    <Box display="inline-flex" alignItems={"center"} w="100%" mb="30px">
      <Box flexGrow="1">
        <Heading as="h1" size="lg" display="flex" lineHeight="20px">
          <Show below="md">
            <Icon as={logo} mr="7px" />
          </Show>
          PulseTools
        </Heading>
        <Show above="md">
          <Text fontSize={"14px"} fontWeight="500">
            Find the best DEXs on PulseChain
          </Text>
        </Show>
      </Box>
      <Show above="md">
        <SearchBar />
      </Show>
      <Stats />
      <NotificationButton />
      <ThemeButton />
    </Box>
  );
});

// Display name
Header.displayName = "Header";
export default Header;
