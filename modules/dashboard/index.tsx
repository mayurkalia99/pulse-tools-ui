import React from "react";
import { Box, Flex, Heading, Show, Text } from "@chakra-ui/react";
import Layout from "../../components/Layout/index";
import TopTrending from "../../components/TopTrending";
import QuickLinksBox from "../../components/QuickLinksBox";
import TabSection, { WinnersCupIcon } from "./components/TabSection";
import Table from "./components/Table";
import LatestNews from "./components/TabSection/LatestNews";

const DashboardModule = () => {
  return (
    <Layout>
      <div>
        <Flex direction={{ xsm: "column-reverse", md: "row" }}>
          <TopTrending />
          <QuickLinksBox />
        </Flex>
        <Show above="md">
          <TabSection />
          <Table />
        </Show>
        <Show below="md">
          <Text
            fontSize="20px"
            fontWeight="300"
            lineHeight="20px"
            mt="31px"
            mb="28px"
            display="flex"
            alignItems="center"
          >
            <WinnersCupIcon />
            Top News
          </Text>
          <Box className="top-news_mobile">
            <LatestNews />
          </Box>
        </Show>
      </div>
    </Layout>
  );
};

export default DashboardModule;
