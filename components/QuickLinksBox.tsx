import React, { FC } from "react";
import {
  Box,
  Center,
  HStack,
  Icon,
  Text,
  useColorMode,
  VStack,
  Link,
  Button,
} from "@chakra-ui/react";
import paperplane from "../assets/icons/paperplane.svg";
import bluePaperplane from "../assets/icons/bluePaperplane.svg";
import pairExplorer from "../assets/icons/pairExplorer.svg";
import rightArrow from "../assets/icons/rightArrow.svg";
import newPairs from "../assets/icons/newPairs.svg";
import trending from "../assets/icons/trending.svg";
import heart from "../assets/icons/heart.svg";
import { useRouter } from "next/router";

type QuickLinksItemProps = {
  icon: any;
  colorMode: "light" | "dark";
  iconBoxBG: string;
  title: string;
  link: string;
  footer: string;
};

const QuickLinksItem: FC<QuickLinksItemProps> = ({
  icon,
  title,
  footer,
  iconBoxBG,
  link,
  colorMode,
}) => {
  const router = useRouter();
  return (
    <HStack
      as={Button}
      onClick={() => router.push(link)}
      borderRadius="10px"
      bg={
        colorMode === "light"
          ? "white"
          : "linear-gradient(90.06deg, rgba(255, 255, 255, 0.0638) 0.06%, rgba(255, 255, 255, 0.0583) 97.63%)"
      }
      w="100%"
      h="auto"
      p="11px 12px"
      mb="9px"
    >
      <Center h="33px" w="33px" borderRadius="7px" bg={iconBoxBG}>
        <Icon as={icon} boxSize="16px" />
      </Center>
      <VStack alignItems={"flex-start"} flexGrow="1">
        <Text
          fontSize="16px"
          fontWeight="600"
          lineHeight="20px"
          letterSpacing="0.44px"
        >
          {title}
        </Text>
        <Text
          as="span"
          color="#9898DE"
          fontSize="10px"
          fontWeight="400"
          lineHeight="17px"
          mt="0px !important"
          letterSpacing="0.44px"
        >
          {footer}
        </Text>
      </VStack>
      <Icon as={rightArrow} boxSize="3" />
    </HStack>
  );
};

const QuickLinksBox: React.FC = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      borderRadius="12px"
      bg={
        colorMode === "dark"
          ? "linear-gradient(179.73deg, #542950 0.23%, rgba(42, 42, 72, 0.27) 37.33%)"
          : "linear-gradient(179.9deg, #FFFFFF 0.1%, #A8ABFF 99.91%)"
      }
      p={{ xsm: "23px 15px 20px 15px", md: "34px 20px 14px 20px" }}
      ml={{ md: "10px" }}
      minW={{ xsm: "0", md: "350px" }}
    >
      <HStack alignItems={"center"} mb="25px">
        <Icon
          as={colorMode === "dark" ? paperplane : bluePaperplane}
          w="18px"
          h="18px"
        />
        <Text fontWeight="300" fontSize="20px" letterSpacing="0.44px">
          Quick Links
        </Text>
      </HStack>
      <QuickLinksItem
        colorMode={colorMode}
        link="/pair-explorer"
        icon={pairExplorer}
        iconBoxBG={
          colorMode === "light"
            ? "linear-gradient(129.14deg, #E253E4 5.91%, #2D7085 95.82%)"
            : "linear-gradient(129.41deg, #5320E3 0%, #F85DFB 151.07%)"
        }
        title="Pair Explorer"
        footer="Trade history of pairs on PulseChain"
      />
      <QuickLinksItem
        link="/new-pair"
        colorMode={colorMode}
        icon={newPairs}
        iconBoxBG="linear-gradient(124.81deg, #FFC700 -14.1%, #F87B7B 92.15%)"
        title="New Pairs"
        footer="Find newly listed pairs on PulseChain"
      />
      <QuickLinksItem
        link="/trending"
        colorMode={colorMode}
        icon={trending}
        iconBoxBG="linear-gradient(131.22deg, #22F08D -26.55%, #449AFF 98.93%)"
        title="Trending Now"
        footer="List of all the top trending tokens on PulseChain"
      />
      <QuickLinksItem
        link="/favourites"
        colorMode={colorMode}
        icon={heart}
        iconBoxBG="linear-gradient(125.75deg, #EC22F0 3.81%, #FF6442 93.69%)"
        title="Favourites"
        footer="Get access to all your favourites on PulseChain"
      />
    </Box>
  );
};

export default QuickLinksBox;
