// import Link from "next/link";
// import { useState } from "react";
import ChatBubble from "../components/ChatBubble";
// import Translation from "../components/Translation";

export default function Home() {
  // const [contractUrl, setContractUrl] = useState("");

  return (
    <main>
      {/* <Link href="/translations">
        <span>My Translations</span>
      </Link> */}
      <ChatBubble
        side="left"
        value="It’s a Google Translate for Smart Contracts"
      />
      <ChatBubble side="right" value="Smart What ?!" />
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
  );
}
