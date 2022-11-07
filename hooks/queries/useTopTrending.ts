import { QueryOptions, useQuery } from "react-query";

import axios from "axios";

export interface IApiError<T = string> {
  errors: T[];
}

export const Instance = axios.create({
  baseURL: "https://beta.investdex.io/dexvision",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

Instance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Instance.interceptors.response.use(
  function (res) {
    return res;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log(error);
    // return Promise.reject(error.response);
    return Promise.reject(error?.response?.data || [error?.message]);
  }
);

interface ITopTrendingTokensArgs {
  page?: number;
  size?: number;
  field?: string;
  sort?: "desc" | "asc";
  include?: "admin";
}
export interface ITopToken {
  icon: string;
  name: string;
  pair: string;
  pairAddress: string;
  id: string;
  symbol: string;
  liquidity: number;
  price: number;
  tokenVolume: number;
  priceChange: number;
  _24HourVolume: number;
  _1HourPriceChange: number;
  _1HourVolume: number;
  volumeChange: number;
  _1HourVolumeChange: number;
  exchange: string;
}
export type ITopTokenResult = { tokens: ITopToken[] };

async function getTopTokens(args: ITopTrendingTokensArgs) {
  const res = await Instance.get<ITopTokenResult>("/eth-api/trending_tokens", {
    params: { ...args, include: "admin" },
  });
  return res.data;
}

export const useTrendingTokens = (
  args: ITopTrendingTokensArgs,
  config: QueryOptions<ITopTokenResult, IApiError> = {}
) => {
  const query = useQuery(
    ["top-tokens", args],
    () => getTopTokens(args),
    config
  );

  return query;
};
