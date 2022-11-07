import { QueryOptions } from "react-query";
import { axios, IApiError } from "./axios.config";
import { useQuery } from "react-query";

interface IInfluencerProfileParams {
  page: number;
  page_size: number;
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

async function getAllProfiles(params: IInfluencerProfileParams) {
  const res = await axios.get<IInfluencerProfileResult>(
    "/influencer-profiles",
    { params }
  );
  return res.data;
}

export const useGetAllInfluencerProfiles = (
  params: IInfluencerProfileParams,
  config: QueryOptions<IInfluencerProfileResult, IApiError> = {}
) => {
  const query = useQuery(
    ["All influencers profile", params],
    () => getAllProfiles(params),
    config
  );
  return query;
};
