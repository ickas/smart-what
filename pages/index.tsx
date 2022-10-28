import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Nav from "@/components/Nav";
import ChatBubble from "@/components/ChatBubble";
import axios from "axios";
import {useAccount, Web3Button} from "@web3modal/react";


export default function Home() {

  const [bgIsVisible, setBgIsVisible] = useState(false);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 1,
  });

  console.log(inView);
  const [contractUrl, setContractUrl] = useState("");
  const [translation, setTranslation] = useState({__html: "Translation goes here"});
  const { account } = useAccount()

  function fetchAndSetTranslation() {

    if (!contractUrl)
      return console.debug(`No contractURL`);

    console.log(`url`, contractUrl)

    axios.post(`api/translate`, {url: contractUrl})
      .then(({data}) => data)
      .then(({parsedSource, contractSource}) => {
        console.debug(`contractSource`, contractSource);
        console.debug(`parsedSource`, parsedSource);
        return {__html: parsedSource};
      })
      .then(parsedSource => setTranslation(parsedSource))
      .catch(e => {
        console.debug(`Error while fetching translation`, e?.message || e?.toString());
        return 'Error fetching translation'
      });
  }

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
        {/*<h1>Home</h1>
      <Web3Button />
        <input
          type="url"
          value={contractUrl}
          onChange={(evt) => { setContractUrl(evt.target.value); }}
        />
        <button type="button" onClick={() => { fetchAndSetTranslation() } }>Translate</button>
      <hr />
      {/* needs pre element to respect newline|return */}
      <pre dangerouslySetInnerHTML={translation}></pre> */}
      </main>
    </>
  );
}
