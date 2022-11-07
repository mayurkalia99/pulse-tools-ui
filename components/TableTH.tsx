import { HStack, Icon, Text, TextProps } from "@chakra-ui/react";
import React, { Dispatch, FC, SetStateAction } from "react";
import sortIcons from "../assets/icons/sortIcons.svg";
import sortUp from "../assets/icons/sortUp.svg";
import sortDown from "../assets/icons/sortDown.svg";
import { Th } from "@chakra-ui/react";
import { SortType } from "modules/dashboard/components/Table";

interface TableTHProps {
  head: string;
  onSort?: Dispatch<SetStateAction<SortType>>;
  textProps?: TextProps;
  sort?: SortType;
  field?: string;
}

export const TableTH: FC<TableTHProps> = ({ head, onSort, field, sort }) => {
  const sortable = !!sort;
  return (
    <Th
      _first={{
        paddingInlineStart: "0px",
      }}
      textTransform="none"
      fontSize={{ xsm: "12px", md: "12px", lg: "12px" }}
      cursor="pointer"
      onClick={() =>
        onSort?.({
          field,
          sort: sort?.field === field && sort?.sort === "asc" ? "desc" : "asc",
        })
      }
    >
      <HStack>
        <Text>{head}</Text>
        {sortable && (
          <Icon
            as={
              sort?.field === field && sort?.sort
                ? sort.sort === "asc"
                  ? sortUp
                  : sortDown
                : sortIcons
            }
            color="ic"
            w="12px"
            h="12px"
            mx="1"
          />
        )}
      </HStack>
    </Th>
  );
};
