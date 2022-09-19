import {
  Box,
  HStack,
  Select,
  useColorMode,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import React, { FC } from "react";

function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const { colorMode } = useColorMode();

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        w="137px"
        _checked={{
          bg: colorMode === "light" ? "white" : "#1B1B1B",
          // color: "white",
          borderColor: "1px solid #9898DE",
        }}
        _focus={{
          boxShadow: "none",
        }}
        display="flex"
        justifyContent={"center"}
        color={colorMode === "light" ? "#474545" : "#BFBFBF"}
        bg={
          colorMode === "light"
            ? "#F0F4F9"
            : "linear-gradient(90.06deg, rgba(240, 244, 249, 0.11) 0.06%, rgba(250, 251, 253, 0.11) 97.63%)"
        }
        borderRadius="10px"
        fontSize="14px"
        px={5}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  );
}

interface FilterSortButtonsProps {
  setRadioItem: React.Dispatch<React.SetStateAction<string>>;
  setTimeframe: React.Dispatch<React.SetStateAction<string>>;
}

const FilterSortButtons: FC<FilterSortButtonsProps> = ({
  setRadioItem,
  setTimeframe,
}) => {
  const options = ["All Pairs", "Top Gainers", "Top Loosers"];
  const { colorMode } = useColorMode();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "filters",
    defaultValue: "All Pairs",
    onChange: setRadioItem,
  });
  const group = getRootProps();

  return (
    <HStack {...group} mr="5px !important">
      {options.map((value, i) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={i} {...radio}>
            {value}
          </RadioCard>
        );
      })}
      <Select
        w="125px"
        h="34px"
        borderRadius={"10px"}
        bg="linear-gradient(90.06deg, rgba(240, 244, 249, 0.11) 0.06%, rgba(250, 251, 253, 0.11) 97.63%)"
        fontSize="14px"
        color={colorMode === "light" ? "#474545" : "#BFBFBF"}
        placeholder="Timeframe"
        onChange={(e) => setTimeframe(e.target.value)}
      >
        <option value="1H">1H</option>
        <option value="6H">6H</option>
        <option value="24H">24H</option>
      </Select>
    </HStack>
  );
};

export default FilterSortButtons;
