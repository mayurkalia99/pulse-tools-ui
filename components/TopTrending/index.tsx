import React, { useCallback, useEffect, useState } from "react";
import { Box, HStack, Icon, Text, useColorMode } from "@chakra-ui/react";
import litIcon from "../../assets/icons/lit.svg";
import FilterSortButtons from "../FilterSortButtons";
import ListElement from "./ListElement";
import { useTrendingTokens } from "../../hooks/queries/useTopTrending";

type SortType = {
  field?: string;
  sort?: "asc" | "desc";
};
const TopTrending = () => {
  const { colorMode } = useColorMode();
  const [sort, setSort] = useState<SortType>({
    field: "liquidity",
    sort: "desc",
  });
  const [timeframe, setTimeframe] = useState("");
  const [radioItem, setRadioItem] = useState("");
  const { data, isLoading } = useTrendingTokens({
    page: 1,
    size: 10,
    field: sort.field,
    sort: sort.sort,
  });

  useEffect(() => {
    function FilterSort() {
      if (radioItem === "All Pairs") {
        setSort({ field: "liquidity", sort: "desc" });
      } else if (radioItem === "Top Gainers") {
        setSort({ field: "priceChange", sort: "desc" });
      } else if (radioItem === "Top Loosers") {
        setSort({ field: "priceChange", sort: "asc" });
      }
    }
    FilterSort();
  }, [radioItem]);

  return (
    <Box
      p="24px 35px"
      bg={colorMode === "dark" ? "#1A1A2D" : "transparent"}
      border={colorMode === "dark" ? "" : "1px solid #E4E4E4"}
      borderRadius={"12px"}
      flexGrow="1"
    >
      {/* Header */}

      <HStack className="trending_header">
        <Box
          className="trending_header_title"
          display={"inline-flex"}
          flexGrow="1"
        >
          <Icon as={litIcon} mr="11px" w="1.5rem" h="1.5rem" />
          <Text
            fontWeight="300"
            fontSize="17px"
            color={colorMode === "light" ? "black" : "white"}
          >
            Top Trending on PulseChain
          </Text>
        </Box>
        <FilterSortButtons
          setRadioItem={setRadioItem}
          setTimeframe={setTimeframe}
        />
      </HStack>
      {/* lists */}
      <Box
        display="flex"
        maxH="270px"
        mt="27px"
        flexWrap={"wrap"}
        flexDirection="column"
        justifyContent="center"
      >
        {data?.tokens.map((token, i) => (
          <ListElement
            key={i}
            position={i}
            priceChange={token.priceChange}
            icon={token.icon}
            name={token.name}
            price={token.price}
            symbol={token.symbol}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TopTrending;
