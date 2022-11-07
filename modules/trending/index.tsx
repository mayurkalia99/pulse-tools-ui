import React, { useState } from "react";
import Layout from "@/components/Layout";
import TrendingSlider from "@/components/TrendingSlider";
import { Box, Flex, Show, Text, useColorMode } from "@chakra-ui/react";
import SortBySelect from "./components/SortBySelect";
import { TimeframeSelect } from "@/components/FilterSortButtons";

const TrendingModule = () => {
  const { colorMode } = useColorMode();
  const [timeframe, setTimeframe] = useState("");
  const [field, setField] = useState("");

  return (
    <Layout>
      <>
        <TrendingSlider />
        <Show below="md">
          <Flex mt="1rem" alignItems="center">
            <Text flexGrow="1">Trending Now</Text>
            <SortBySelect
              setField={setField}
              colorMode={colorMode}
              w="auto"
              mr="8px"
            />
            <Box>
              <TimeframeSelect
                // p="7px 10px"
                w="74px"
                colorMode={colorMode}
                setTimeframe={setTimeframe}
              />
            </Box>
          </Flex>
        </Show>
      </>
    </Layout>
  );
};

export default TrendingModule;
