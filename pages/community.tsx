import type { NextPage } from "next";
import Head from "next/head";
import CommunityModule from "../modules/community";

const Community: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CommunityModule />
    </>
  );
};

export default Community;
