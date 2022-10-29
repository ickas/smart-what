import { useInView } from "react-intersection-observer";
import Nav from "@/components/Nav";
import ChatBubble from "@/components/ChatBubble";
import Translation from "@/components/Translation";
import ChatBubbles from "@/components/ChatBubbles";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Smart What ?!</title>
        <meta name="description" content="Google Translate for Smart Contracts" />
        <meta
          name="keywords"
          key="keywords"
          content="web3, web3 development, web3 developer, smart contract web3, web3 eth contract"
        />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta property="og:title" content="Smart What ?!" />
        <meta property="og:description" content="Google Translate for Smart Contracts" />
        <meta property="og:image" content="smartwhat-og.jpg" />
        <meta property="og:image:alt" content="Smart What ?!" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://smartwhat.xyz" />
        <link rel="icon" href="favicon.ico" />
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
        <link rel="icon" sizes="192x192" type="image/png" href="webapp/android-icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="webapp/apple-icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="webapp/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="webapp/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="webapp/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="webapp/apple-icon-114x114.png" />
        <link rel="icon" sizes="96x96" type="image/png" href="webapp/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="webapp/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="webapp/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="webapp/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="webapp/apple-icon-57x57.png" />
        <link rel="icon" sizes="32x32" type="image/png" href="webapp/favicon-32x32.png" />
        <link rel="icon" sizes="16x16" type="image/png" href="webapp/favicon-16x16.png" />
      </Head>
      <Nav bg={!inView} linkUrl="/translations" linkValue="Past Translations" />
      <div ref={ref} style={{ height: "130px" }} />
      <main>
        <h1 className="sr-only">Google Translate for Smart Contracts</h1>
        <ChatBubbles>
          <ChatBubble side="left" value="It’s a Google Translate for Smart Contracts" />
          <ChatBubble side="right" value="Smart What ?!" />
        </ChatBubbles>
        <Translation />
      </main>
      <Footer />
    </>
  );
}
