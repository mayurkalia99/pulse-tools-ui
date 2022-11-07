import { Box, Flex, Icon, Text, useColorMode } from "@chakra-ui/react";
import React, { FC } from "react";
import { Image } from "../Image";
import { ellipseNum, roundOff } from "../../utils/roundOff";
import dexIcon from "../../assets/icons/dexIcon.svg";
import pulseIcon from "../../assets/icons/pulseIcon.svg";
import upArrow from "../../assets/icons/upArrow";
import downArrow from "../../assets/icons/downArrow";
import { cond } from "../../utils/cond";
import { IconProps } from "@chakra-ui/icons";
import { ZeroToNumber } from "@/utils/zeroToNumber";

export const PulseIcon: FC<IconProps> = (props) => (
  <Icon as={pulseIcon} {...props} minW="16px" minH="16px" mr="2px" />
);

interface ListElementProps {
  position: number;
  icon: string;
  name: string;
  price: number;
  priceChange: number; //percentage change
  symbol: string;
}

const ListElement: FC<ListElementProps> = ({
  position,
  icon,
  name,
  price,
  priceChange,
  symbol,
}) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      bg={
        colorMode === "dark"
          ? "linear-gradient(90.06deg, rgba(240, 244, 249, 0.0594) 0.06%, rgba(250, 251, 253, 0.0429) 97.63%)"
          : "#F0F0F0"
      }
      borderRadius="10px"
      py="12px"
      px="20px"
      m="0px 5px 5px 0px"
      display="flex"
      flexWrap={"wrap"}
      alignItems="center"
      w={{ xsm: "100%", md: "auto" }}
    >
      <Text
        key={position}
        fontStyle="italic"
        lineHeight={"20px"}
        fontSize="12px"
        color="#7F8284"
      >
        {" "}
        #{position + 1}{" "}
      </Text>
      <Flex alignItems={"center"} ml="12.8px" flexGrow={"1"}>
        <Image
          src={icon}
          fallback={<PulseIcon />}
          w="16px"
          h="16px"
          mr="2px"
          alt=""
        />
        <Icon as={dexIcon} w="17px" h="17px" mr="4px" />
        <Text
          fontSize={"14px"}
          fontWeight="500"
          lineHeight="20px"
          letterSpacing="0.44px"
          mr={"10px"}
          maxW={{ xsm: "95px", sm: "110px", md: "max-content" }}
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          {name} ({symbol})
        </Text>
        <Text
          fontSize="12px"
          lineHeight="0.44px"
          {...cond(
            priceChange < 0,
            { color: colorMode === "light" ? "#FF4646" : "#FF6666" },
            { color: colorMode === "light" ? "#0C9A33" : "#4EFF7F" }
          )}
        >
          {roundOff(priceChange, 3)}%{" "}
        </Text>
        <Icon
          fontSize="10px"
          ml="5px"
          as={cond(priceChange < 0, downArrow, upArrow)}
        />
      </Flex>
      <ZeroToNumber
        fontWeight="700"
        lineHeight="20px"
        fontSize="14px"
        value={price}
      />
    </Box>
  );
};

export default ListElement;
