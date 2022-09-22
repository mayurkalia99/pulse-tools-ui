import {
  Box,
  Divider,
  Spinner,
  Table,
  TableContainer,
  TableContainerProps,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React, { Dispatch, FC, SetStateAction } from "react";
import { TableTH } from "./TableTH";

interface DataTableProps extends TableContainerProps {
  title: string;
  tableHeads: ReactJSXElement;
  children?: ReactJSXElement[];
  rightElement?: JSX.Element;
  isLoading: boolean;
  field?: string;
  sort?: string;
  onSort?: Dispatch<SetStateAction<string>>;
}

const DataTable: React.FC<DataTableProps> = ({
  title,
  tableHeads,
  sort,
  onSort,
  field,
  rightElement,
  children,
  isLoading,
}) => {
  return (
    <>
      <Box display="inline-flex" alignItems="center" width="100%">
        <Text
          fontSize="20px"
          flexGrow="1"
          fontWeight="300"
          lineHeight="15px"
          ml={{ sm: "0.5rem", md: "1rem" }}
        >
          {title}
        </Text>
        {rightElement}
      </Box>
      <Box
        className="table-container"
        p="0px 45px"
        maxH={{ md: "54vh", xlg: "56vh" }}
        borderRadius="xl"
        marginY="1em"
        bg="#191F26"
        overflowY="auto"
      >
        <TableContainer>
          <Table variant="unstyled" position="relative">
            <Thead color="#FFFFFF" h={{ lg: "45px", xlg: "65px" }}>
              <Tr
                borderBottom="1px solid #000000"
                _first={{
                  borderBottom: "1px solid #000000",
                  width: "91%",
                }}
              >
                {tableHeads}
              </Tr>
            </Thead>
            <Tbody
              color="#BFBFBF"
              fontWeight="500"
              fontSize={{ sm: "14px", md: "16px" }}
            >
              {isLoading ? (
                <Tr>
                  <Td>
                    <Box
                      display={"flex"}
                      justifyContent="center"
                      alignItems={"center"}
                      h="100%"
                    >
                      <Spinner color="#8A52FF" />
                    </Box>
                  </Td>
                </Tr>
              ) : (
                children
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default DataTable;
