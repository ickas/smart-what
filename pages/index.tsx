import Link from "next/link";
import { useState } from "react";
import Translation from "./components/Translation";

export default function Home() {
  const [contractUrl, setContractUrl] = useState("");

  return (
    <div>
      <Link href="/translations">
        <span>My Translations</span>
      </Link>
      <h1>Home</h1>
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
      <Translation>translation goes here!</Translation>
    </div>
  );
}
