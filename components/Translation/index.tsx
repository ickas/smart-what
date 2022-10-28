import {ReactNode, useState} from "react";
import {useAccount} from "@web3modal/react";
import axios from "axios";

interface TranslationProps {
  children: ReactNode;
}

const Translation = (props: TranslationProps) => {
  const { children } = props;

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

  return <div>
    <input
      type="url"
      value={contractUrl}
      onChange={(evt) => {setContractUrl(evt.target.value);}} />

    <button onClick={() => { fetchAndSetTranslation(); }}>translate</button>

    <pre dangerouslySetInnerHTML={translation}></pre>

  </div>;
};

export default Translation;
