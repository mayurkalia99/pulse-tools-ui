import React from "react";
import { Box, Center, Flex, HStack, Text } from "@chakra-ui/react";
import Layout from "../../components/Layout/index";
import TopTrending from "../../components/TopTrending";
import QuickLinksBox from "../../components/QuickLinksBox";
import TabSection from "./components/TabSection";

const DashboardModule = () => {
  return (
    <main>
      <Layout>
        <>
          <Flex>
            <TopTrending />
            <QuickLinksBox />
          </Flex>
          <TabSection />
        </>
      </Layout>
    </main>
  );
};

export default DashboardModule;
