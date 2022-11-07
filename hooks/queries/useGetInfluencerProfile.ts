import { QueryOptions } from "react-query";
import { axios, IApiError } from "./axios.config";
import { useQuery } from "react-query";

interface IInfluencerProfileParams {
  slug: string | string[] | undefined;
}

export type IInfluencerProfile = {
  full_name: string;
  image: string;
  rating: number;
  website: string;
  twitter: string;
  telegram: string;
  github: string;
  discord: string;
  investor: boolean;
  founder: boolean;
  whale: boolean;
  slug: string;
  influencer: boolean;
  bio: string;
};

export type IInfluencerProfileResult = {
  success: boolean;
  data: IInfluencerProfile[];
};

async function getInfluencerProfile(params: IInfluencerProfileParams) {
  const res = await axios.get<IInfluencerProfileResult>("/profile", { params });
  return res.data;
}

export const useGetInfluencerProfile = (
  params: IInfluencerProfileParams,
  config: QueryOptions<IInfluencerProfileResult, IApiError> = {}
) => {
  const query = useQuery(
    ["influencer's profile", params],
    () => getInfluencerProfile(params),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 1000 * 60 * 60 * 24,
      ...config,
    }
  );
  return query;
};
