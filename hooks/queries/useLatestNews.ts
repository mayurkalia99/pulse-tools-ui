import { QueryOptions } from "react-query";
import { axios, IApiError } from "./axios.config";
import { useQuery } from "react-query";

export type IPost = {
  coin_name: string;
  images: string;
  title: string;
  link: string;
  description: string;
  date: number;
};

export type INewsResult = {
  posts_details:
    | {
        posts: IPost[] | undefined;
      }
    | undefined;
};

async function getLatestNews() {
  const res = await axios.get<INewsResult>("/feeds");
  return res.data;
}

export const useGetLatestNews = (
  config: QueryOptions<INewsResult, IApiError> = {}
) => {
  const query = useQuery(["latestNews"], () => getLatestNews(), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    staleTime: 1000 * 60 * 60 * 24,
    ...config,
  });
  return query;
};
