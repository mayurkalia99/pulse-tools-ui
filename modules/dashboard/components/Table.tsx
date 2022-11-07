import React, { useCallback, useEffect, useState } from "react";
import {
  Td,
  Tr,
  Icon,
  Box,
  Spinner,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import DataTable from "@/components/DataTable";
import { useTrendingTokens } from "@/hooks/queries/useTopTrending";
import FilterSortButtons from "@/components/FilterSortButtons";
import { PulseIcon } from "@/components/TopTrending/ListElement";
import { Image } from "@/components/Image";
import dexIcon from "../../../assets/icons/dexIcon.svg";
import TrendingTableHeads from "./TrendingTableHeads";
import formatter from "@/utils/formatter";
import { roundOff } from "@/utils/roundOff";
import { cond } from "@/utils/cond";
import TableActionIcons from "@/components/TableActionIcons";
import { ZeroToNumber } from "@/utils/zeroToNumber";

export type SortType = {
  field?: string;
  sort?: "asc" | "desc";
};

const Table = () => {
  const { colorMode } = useColorMode();
  const [sort, setSort] = useState<SortType>({
    field: "liquidity",
    sort: "desc",
  });
  const [timeframe, setTimeframe] = useState("");
  const [radioItem, setRadioItem] = useState("");

  const { data, isLoading } = useTrendingTokens({
    page: 1,
    size: 50,
    field: sort.field,
    sort: sort.sort,
  });

  useEffect(() => {
    function FilterSort() {
      if (radioItem === "All Pairs") {
        setSort({ field: "liquidity", sort: "desc" });
      } else if (radioItem === "Top Gainers") {
        setSort({ field: "priceChange", sort: "desc" });
      } else if (radioItem === "Top Loosers") {
        setSort({ field: "priceChange", sort: "asc" });
      }
    }
    // console.log("zerotoNumber", zeroToNumber(0.000001005));
    FilterSort();
  }, [radioItem]);

  return (
    <DataTable
      title="All Pairs on Pulse Chains"
      tableHeads={<TrendingTableHeads sort={sort} onSort={setSort} />}
      rightElement={
        <FilterSortButtons
          setRadioItem={setRadioItem}
          setTimeframe={setTimeframe}
        />
      }
      isLoading={isLoading}
    >
      {data?.tokens.map(({ icon, ...data }, i) => (
        <Tr maxH="75px" key={i}>
          <Td>
            <HStack>
              <Image
                src={icon}
                fallback={<PulseIcon w="20px" h="20px" />}
                w="20px"
                h="20px"
                mr="2px"
                alt=""
              />
              <Icon as={dexIcon} w="20px" h="20px" mr="4px" />
              <Text>
                {data.name} ({data.symbol})
              </Text>
            </HStack>
          </Td>
          <Td>
            $
            {data.price >= 100
              ? roundOff(data.price, 2)
              : data.price >= 10
              ? roundOff(data.price, 4)
              : data.price >= 1
              ? roundOff(data.price, 5)
              : data.price >= 0.000001
              ? roundOff(data.price, 8)
              : roundOff.withEllipse(data.price, 100)}
          </Td>
          <Td
            {...cond(
              data._1HourPriceChange < 0,
              { color: colorMode === "light" ? "#FF4646" : "#FF6666" },
              { color: colorMode === "light" ? "#0C9A33" : "#4EFF7F" }
            )}
          >
            {roundOff(data._1HourPriceChange, 4)}%
          </Td>
          <Td
            {...cond(
              data.priceChange < 0,
              { color: colorMode === "light" ? "#FF4646" : "#FF6666" },
              { color: colorMode === "light" ? "#0C9A33" : "#4EFF7F" }
            )}
          >
            {roundOff(data.priceChange, 4)}%
          </Td>
          <Td>${formatter(data._24HourVolume)}</Td>
          <Td
            {...cond(
              data._1HourVolumeChange < 0,
              { color: colorMode === "light" ? "#FF4646" : "#FF6666" },
              { color: colorMode === "light" ? "#0C9A33" : "#4EFF7F" }
            )}
          >
            {roundOff(data._1HourVolumeChange, 4)}%
          </Td>
          <Td
            {...cond(
              data.volumeChange < 0,
              { color: colorMode === "light" ? "#FF4646" : "#FF6666" },
              { color: colorMode === "light" ? "#0C9A33" : "#4EFF7F" }
            )}
          >
            {roundOff(data.volumeChange, 4)}%
          </Td>
          <Td>${formatter(data.liquidity)}</Td>
          <Td>
            <TableActionIcons />
          </Td>
        </Tr>
      ))}
    </DataTable>
  );
};

export default Table;
