import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global-style";
import "../styles/globals.css";
import { Web3Modal } from "@web3modal/react";

const config = {
  projectId: "601ec3cfd302dae1a73c9b2a30f7f963",
  theme: "dark",
  accentColor: "blackWhite",
  ethereum: {
    appName: "web3Modal",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* @ts-ignore */}
      <Web3Modal config={config} />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
