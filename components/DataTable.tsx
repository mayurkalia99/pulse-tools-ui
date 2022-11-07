import {
  Box,
  Spinner,
  Table,
  TableContainer,
  TableContainerProps,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  useColorMode,
} from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React from "react";

interface DataTableProps extends TableContainerProps {
  title: string;
  tableHeads: ReactJSXElement;
  children?: ReactJSXElement[];
  rightElement?: JSX.Element;
  isLoading: boolean;
}

const DataTable: React.FC<DataTableProps> = ({
  title,
  tableHeads,
  rightElement,
  children,
  isLoading,
}) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box display="inline-flex" alignItems="center" width="100%">
        <Text
          fontSize="20px"
          flexGrow="1"
          fontWeight="300"
          lineHeight="15px"
          ml={{ xsm: "0.5rem", md: "1rem" }}
        >
          {title}
        </Text>
        {rightElement}
      </Box>
      <Box
        className="table-container"
        p="0px 45px"
        // maxH={{ md: "54vh", xlg: "56vh" }}
        borderRadius="xl"
        marginY="1em"
        h="502px"
        bg={colorMode === "dark" ? "#191F26" : "#F0F0F0"}
        overflowY="auto"
      >
        <TableContainer>
          <Table variant="unstyled" position="relative">
            <Thead
              color={colorMode === "dark" ? "#FFFFFF" : "black"}
              h={{ lg: "45px", xlg: "65px" }}
            >
              <Tr
                borderBottom={
                  colorMode === "dark"
                    ? "1px solid #000000"
                    : "1px solid #FFFFFF"
                }
                _first={{
                  borderBottom:
                    colorMode === "dark"
                      ? "1px solid #000000"
                      : "1px solid #FFFFFF",
                  width: "91%",
                }}
              >
                {tableHeads}
              </Tr>
            </Thead>
            <Tbody
              color={colorMode === "dark" ? "#BFBFBF" : "balck"}
              fontWeight="500"
              fontSize={{ xsm: "14px", md: "16px" }}
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
