import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

import LayoutContainer from "../components/LayoutContainer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* https://css-tricks.com/probably-use-initial-scale1/ */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <LayoutContainer>
        <Component {...pageProps} />;
      </LayoutContainer>
    </>
  );
}

export default MyApp;
