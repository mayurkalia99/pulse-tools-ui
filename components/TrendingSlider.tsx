import React from "react";
import { Divider, Flex, Icon, Text, useColorMode } from "@chakra-ui/react";
import featuredStar from "@/assets/icons/featuredStar.svg";
import { Image } from "./Image";
import { ZeroToNumber } from "@/utils/zeroToNumber";
import { cond } from "@/utils/cond";
import upArrow from "assets/icons/upArrow";
import downArrow from "assets/icons/downArrow";
import { roundOff } from "@/utils/roundOff";
import { useTrendingTokens } from "@/hooks/queries/useTopTrending";

type TrendingSliderItemProps = {
  name: string;
  icon: string;
  price: number;
  priceChange: number;
  colorMode: string;
};

const TrendingSliderItem: React.FC<TrendingSliderItemProps> = ({
  name,
  icon,
  price,
  priceChange,
  colorMode,
}) => {
  return (
    <Flex alignItems={"center"} mr="15px">
      <Image w="13px" h="13px" src={icon} alt={name} mr="3px" />
      <Text fontSize="12px" color="#E67BF8" mr="3px">
        {name}
      </Text>
      <ZeroToNumber
        value={price}
        mr="3px"
        fontSize="12px"
        fontWeight="600"
        letterSpacing="0.44px"
      />

      <Icon
        fontSize="10px"
        mx="5px"
        as={cond(priceChange < 0, downArrow, upArrow)}
      />
      <Text
        fontSize="12px"
        lineHeight="0.44px"
        mr="3px"
        {...cond(
          priceChange < 0,
          { color: colorMode === "light" ? "#FF4646" : "#FF6666" },
          { color: colorMode === "light" ? "#0C9A33" : "#4EFF7F" }
        )}
      >
        {roundOff(priceChange, 3)}%{" "}
      </Text>
    </Flex>
  );
};

const TrendingSlider = () => {
  const { colorMode } = useColorMode();
  const { data } = useTrendingTokens({
    page: 1,
    size: 10,
    field: "liquidity",
    sort: "desc",
  });
  return (
    <Flex
      h="45px"
      bg="linear-gradient(90.06deg, rgba(240, 244, 249, 0.0594) 0.06%, rgba(250, 251, 253, 0.0429) 97.63%)"
      border={colorMode === "light" ? "0.25px solid #8000FF" : ""}
      alignItems="center"
      pl="11px"
      borderRadius="10px"
      w="100%"
    >
      <Icon as={featuredStar} mr="7px" />
      <Text fontSize="14px" mr="9px" fontWeight="300" lineHeight="20px">
        Featured
      </Text>
      <Divider orientation="vertical" h="20px" borderColor="#7F8284" />
      <Flex flex="auto" pos="relative" overflow="hidden" h="1.5rem">
        <Flex className="__trending_tokens_compo__con" pos="absolute">
          {data?.tokens.map(
            (token: {
              id: React.Key | null | undefined;
              price: number;
              priceChange: number;
              symbol: string;
              icon: string;
            }) => (
              <TrendingSliderItem
                key={token.id}
                colorMode={colorMode}
                price={token.price}
                priceChange={token.priceChange}
                name={token.symbol}
                icon={token.icon}
              />
            )
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TrendingSlider;
