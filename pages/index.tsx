import { useInView } from "react-intersection-observer";
import Nav from "@/components/Nav";
import ChatBubble from "@/components/ChatBubble";
import axios from "axios";
import {useAccount, Web3Button} from "@web3modal/react";


export default function Home() {

  const { ref, inView } = useInView({
    threshold: 0.8,
  });

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
        bg={!inView}
        pastTransValue="Past Translations"
        buttonValue="Connect Wallet"
      />
      <div ref={ref} style={{ height: "130px" }} />
      <main>
        <ChatBubble
          side="left"
          value="It’s a Google Translate for Smart Contracts"
        />
        <ChatBubble side="right" value="Smart What ?!" />

        {/* TODO: MOVE THIS TO SOME OTHER PLACE THAT MAKES SENSE */}
        <pre dangerouslySetInnerHTML={translation}></pre>

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
