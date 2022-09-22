import React from "react";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Icon,
} from "@chakra-ui/react";
import cup from "../../../../assets/icons/cup.svg";
import CommunityListing from "./CommunityListing";
import LatestNews from "./LatestNews";

const WinnersCupIcon = () => <Icon mr="9px" as={cup} />;

const TabSection = () => (
  <Tabs variant="unstyled" mt="27px">
    <TabList>
      <Tab
        fontSize="13px"
        fontWeight="500"
        lineHeight="20px"
        letterSpacing="0.44px"
        w="170px"
        maxH="31px"
        borderRadius="6px"
        bg="rgba(152, 71, 255, 0.31)"
        _selected={{ color: "white", border: "1px solid #9898DE" }}
      >
        <WinnersCupIcon /> Community Listing
      </Tab>
      <Tab
        fontSize="13px"
        fontWeight="500"
        lineHeight="20px"
        letterSpacing="0.44px"
        w="170px"
        ml="15px"
        maxH="31px"
        borderRadius="6px"
        bg="rgba(255, 71, 181, 0.31)"
        _selected={{ color: "white", border: "1px solid #9898DE" }}
      >
        <WinnersCupIcon /> Latest News
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel pl="0px">
        <CommunityListing />
      </TabPanel>
      <TabPanel>
        <LatestNews />
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export default TabSection;
