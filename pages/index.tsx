import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Nav from "@/components/Nav";
import ChatBubble from "@/components/ChatBubble";
// import Translation from "../components/Translation";

export default function Home() {
  const [bgIsVisible, setBgIsVisible] = useState(false);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 1,
  });

  console.log(inView);

  return (
    <>
      <Nav
        bg={bgIsVisible}
        pastTransValue="Past Translations"
        buttonValue="Connect Wallet"
      />
      <main ref={ref}>
        <ChatBubble
          side="left"
          value="It’s a Google Translate for Smart Contracts"
        />
        <ChatBubble side="right" value="Smart What ?!" />
        <p>inView: ${inView}</p>
        {/* <h1>Home</h1>
      <form>
        <input
          type="url"
          value={contractUrl}
          onChange={(evt) => {
            setContractUrl(evt.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log(contractUrl);
          }}
        >
          Translate
        </button>
      </form>
      <hr />
      <Translation>translation goes here!</Translation> */}
      </main>
    </>
  );
}
