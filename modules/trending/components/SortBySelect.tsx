import { Select, SelectProps } from "@chakra-ui/react";
import React, { Dispatch, FC, SetStateAction } from "react";

interface SortBySelectProps extends SelectProps {
  colorMode: string;
  setField: Dispatch<SetStateAction<string>>;
}

const SortBySelect: React.FC<SortBySelectProps> = ({
  colorMode,
  setField,
  ...rest
}) => {
  return (
    <Select
      h="34px"
      borderRadius={"10px"}
      defaultValue="24H"
      bg="linear-gradient(90.06deg, rgba(240, 244, 249, 0.11) 0.06%, rgba(250, 251, 253, 0.11) 97.63%)"
      fontSize="14px"
      color={colorMode === "light" ? "#474545" : "#BFBFBF"}
      placeholder="Sort By"
      onChange={(e) => setField(e.target.value)}
      {...rest}
    >
      <option value="1H">All Pairs</option>
      <option value="6H">Top Gainers</option>
      <option value="24H">Top Loosers</option>
    </Select>
  );
};

export default SortBySelect;
