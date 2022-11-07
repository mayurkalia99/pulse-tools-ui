import { TableTH } from "@/components/TableTH";
import React, { Dispatch, FC, SetStateAction } from "react";
import { SortType } from "./Table";

type TrendingTableHeadsProps = {
  sort?: SortType;
  onSort?: Dispatch<SetStateAction<SortType>>;
};

const TrendingTableHeads: FC<TrendingTableHeadsProps> = ({ sort, onSort }) => (
  <>
    <TableTH head="Pair" />
    <TableTH head="Price USD" field="price" sort={sort} onSort={onSort} />
    <TableTH
      head="Price %(1H)"
      field="_1HourPriceChange"
      sort={sort}
      onSort={onSort}
    />
    <TableTH
      head="Price %(24H)"
      field="priceChange"
      sort={sort}
      onSort={onSort}
    />
    <TableTH
      head="Volume (24H)"
      field="volumeChange"
      sort={sort}
      onSort={onSort}
    />
    <TableTH
      head="Vol %(1H)"
      field="_1HourVolumeChange"
      sort={sort}
      onSort={onSort}
    />
    <TableTH
      head="Vol %(24H)"
      field="_24HourVolume"
      sort={sort}
      onSort={onSort}
    />
    <TableTH head="Liquidity" field="liquidity" sort={sort} onSort={onSort} />
    <TableTH head="Actions" />
  </>
);

export default TrendingTableHeads;
