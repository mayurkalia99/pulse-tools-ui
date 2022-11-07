import React from "react";
import { HStack, Icon, IconButton } from "@chakra-ui/react";
import chartIcon from "../assets/icons/chartIcon.svg";
import bellIcon from "../assets/icons/bellIcon.svg";

const TableActionIcons = () => {
  return (
    <HStack m="auto" justify="center">
      <IconButton
        variant="unstyled"
        minW="0px"
        h="10px"
        aria-label="chartIcon"
        icon={<Icon as={chartIcon} boxSize="14px" />}
      />
      <IconButton
        variant="unstyled"
        minW="0px"
        h="10px"
        aria-label="bellIcon"
        icon={<Icon as={bellIcon} boxSize="14px" />}
      />
    </HStack>
  );
};

export default TableActionIcons;
