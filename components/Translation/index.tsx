import {ReactNode, useEffect, useState} from "react";
import {useAccount} from "@web3modal/react";
import axios from "axios";

interface TranslationProps {
  children: ReactNode;
}



const Translation = (props: TranslationProps) => {
  const { children } = props;

  const [contractUrl, setContractUrl] = useState("");
  const [translation, setTranslation] = useState({__html: "Translation goes here"});
  const { account } = useAccount();
  const [web3storageKey,] = useState(process.env.NEXT_PUBLIC_WEB3_STORAGE_API_KEY);

  useEffect(() => { console.log('key',web3storageKey); } ,[])

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

  function saveCurrentTranslation() {
    if (!translation) {
      console.debug(`Missing translation`)
      return;
    }

    const previous = JSON.parse(localStorage.getItem('translations') || '{}');
    const newState = {...previous, [contractUrl]: {customName: '', translation}};

    localStorage.setItem('translations', JSON.stringify(newState));
  }

  return <div>
    <input
      type="url"
      value={contractUrl}
      onChange={(evt) => {setContractUrl(evt.target.value);}} />

    <button onClick={() => { fetchAndSetTranslation(); }}>translate</button>
    <button onClick={() => { saveCurrentTranslation(); }}>Save translation</button>

    <pre dangerouslySetInnerHTML={translation}></pre>

  </div>;
};

export default Translation;
