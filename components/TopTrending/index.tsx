import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Hide,
  HStack,
  Icon,
  Show,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import litIcon from "../../assets/icons/lit.svg";
import FilterSortButtons, { TimeframeSelect } from "../FilterSortButtons";
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
    <Flex direction="column" mt={{ xsm: "36px", md: "0" }} w="100%">
      <Show below="md">
        <HStack className="trending_header_mobile" mb="16px">
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
          <Box w="22%">
            <TimeframeSelect
              colorMode={colorMode}
              setTimeframe={setTimeframe}
              // w={{ xsm: "67%", md: "100%" }}
              // right={{ xsm: "-35px", md: "auto" }}
            />
          </Box>
        </HStack>
      </Show>
      <Box
        p={{ xsm: "19px 4px", md: "24px 35px" }}
        bg={colorMode === "dark" ? "#1A1A2D" : "transparent"}
        border={colorMode === "dark" ? "" : "1px solid #E4E4E4"}
        borderRadius={"12px"}
        flexGrow="1"
      >
        {/* Header */}
        <HStack className="trending_header">
          <Hide below="md">
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
          </Hide>

          <FilterSortButtons
            setRadioItem={setRadioItem}
            setTimeframe={setTimeframe}
          />
        </HStack>
        {/* lists */}
        <Box
          display="flex"
          h={{ xsm: "290px", md: "270px" }}
          mt="27px"
          flexWrap={"wrap"}
          flexDirection={{ md: "column" }}
          overflowY="auto"
          justifyContent="center"
        >
          {data?.tokens.map((token, i) =>
            isLoading ? (
              "loading"
            ) : (
              <ListElement
                key={i}
                position={i}
                priceChange={token.priceChange}
                icon={token.icon}
                name={token.name}
                price={token.price}
                symbol={token.symbol}
              />
            )
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default TopTrending;
