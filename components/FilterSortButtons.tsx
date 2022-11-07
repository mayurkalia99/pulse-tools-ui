import {
  Box,
  Hide,
  HStack,
  Select,
  SelectProps,
  useColorMode,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import React, { Dispatch, FC, SetStateAction } from "react";

function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const { colorMode } = useColorMode();

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" position="relative">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        w={{ xsm: "91px", sm: "110px", md: "137px" }}
        _checked={{
          bg: "transparent",
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
        px={{ xsm: 2, sm: 3, md: 5 }}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  );
}

interface SelectDropdownProps extends SelectProps {
  colorMode: string;
  setTimeframe: Dispatch<SetStateAction<string>>;
}

export const TimeframeSelect: FC<SelectDropdownProps> = ({
  colorMode,
  setTimeframe,
  ...rest
}) => (
  <Select
    h="34px"
    borderRadius={"10px"}
    defaultValue="24H"
    bg="linear-gradient(90.06deg, rgba(240, 244, 249, 0.11) 0.06%, rgba(250, 251, 253, 0.11) 97.63%)"
    fontSize="14px"
    color={colorMode === "light" ? "#474545" : "#BFBFBF"}
    placeholder="Timeframe"
    onChange={(e) => setTimeframe(e.target.value)}
    {...rest}
  >
    <option value="1H">1H</option>
    <option value="6H">6H</option>
    <option value="24H">24H</option>
  </Select>
);

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
    <HStack
      className="filter_sort_group"
      {...group}
      mr={{ md: "5px !important" }}
      w={{ xsm: "100%", md: "max-content" }}
      justify={"space-between"}
    >
      {options.map((value, i) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={i} {...radio}>
            {value}
          </RadioCard>
        );
      })}
      <Hide below="md">
        <TimeframeSelect colorMode={colorMode} setTimeframe={setTimeframe} />
      </Hide>
    </HStack>
  );
};

export default FilterSortButtons;
