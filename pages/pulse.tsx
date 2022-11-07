import type { NextPage } from "next";
import Head from "next/head";
import PulseModule from "../modules/pulse";

const Pulse: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PulseModule />
    </>
  );
};

export default Pulse;
