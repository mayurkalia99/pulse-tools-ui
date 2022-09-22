import React from "react";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import moment from "moment";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";

interface ICardProps {
  colorMode: string;
}

const Card: React.FC<ICardProps> = ({ colorMode }) => (
  <Flex
    flexDir="column"
    borderRadius={"12px"}
    bg={colorMode === "light" ? "#F0F0F0" : "rgba(158, 158, 158, 0.11)"}
    h="300px"
    minW="255px"
    mr="15px"
  >
    <Image
      borderRadius={"12px"}
      objectFit="cover"
      maxH="45%"
      w="100%"
      src="https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Yml0Y29pbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      alt="bitcoin"
    />
    <Flex flexDir="column" p="10px 14px 6px 10px">
      {/* title */}
      <Flex w="100%" mb="15px">
        <HStack flexGrow="1" alignItems="center">
          <Avatar
            boxSize="18px"
            src="https://pulsehotlist.com/img/apps/BankX.png"
          />
          <Text fontSize="13px" fontWeight="400" lineHeight="12px">
            AXSUSD
          </Text>
        </HStack>
        <Text
          color={
            colorMode === "dark"
              ? "rgba(255, 255, 255, 0.5)"
              : "rgba(103, 103, 103, 0.5)"
          }
          letterSpacing="0.44px"
          fontSize="12px"
          lineHeight="12px"
          fontWeight="400"
        >
          {moment("20111031").format("MMM D")}
        </Text>
      </Flex>

      {/* Header */}
      <Text mb="9px" fontSize="15px" fontWeight="600" lineHeight="14px">
        GameFi makes a comeback
      </Text>

      {/* content */}
      <Text h="57px" color="#7F8284" fontSize="12px" lineHeight="15px" mb="8px">
        As crypto games exit the lobby, Axie Infinity is coming up with new
        ideas to draw peeps back in.
      </Text>
      {/* footer */}
      <Link
        href="#"
        alignSelf="flex-end"
        color="#9898DE"
        fontSize="11px"
        lineHeight="15px"
      >
        Read More <ArrowForwardIcon />
      </Link>
    </Flex>
  </Flex>
);

const LatestNews = () => {
  const { colorMode } = useColorMode();
  const scrollRef = useHorizontalScroll();
  return (
    <Flex
      ref={scrollRef}
      overflow="scroll"
      css={{
        "&::-webkit-scrollbar": {
          width: "0px",
        },
        "&::-webkit-scrollbar-track": {
          width: "0px",
        },
      }}
    >
      <Card colorMode={colorMode} />
    </Flex>
  );
};

export default LatestNews;
