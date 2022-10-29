import {ReactNode, useEffect, useState} from "react";
import {useAccount} from "@web3modal/react";
import axios from "axios";
import {Web3Storage} from "web3.storage";

interface TranslationProps {
  children: ReactNode;
}



const Translation = (props: TranslationProps) => {
  const { children } = props;

  const [contractUrl, setContractUrl] = useState("");
  const [translation, setTranslation] = useState({__html: "Translation goes here"});
  const { account } = useAccount();
  const [web3storageKey,] = useState(process.env.NEXT_PUBLIC_WEB3_STORAGE_API_KEY);
  const [web3Storage,] = useState(new Web3Storage({token: web3storageKey!}))

  function fetchAndSetTranslation() {

    if (!contractUrl)
      return console.debug(`No contractURL`);


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

  async function saveCurrentTranslation() {
    if (!translation) {
      console.debug(`Missing translation`)
      return;
    }

    let cid = null;
    if (account?.address) {
      const name = contractUrl.split('/').pop()

      const file = new Blob([translation.__html], {type: 'text/plain'});
      cid = await web3Storage.put([new File([file], name!)])
    }

    const previous = JSON.parse(localStorage.getItem('translations') || '{}');
    const newState = {...previous, [contractUrl]: {customName: '', translation: !cid ? translation.__html : null, cid}};

    localStorage.setItem('translations', JSON.stringify(newState));
  }

  async function retrieveContractFromIPFS(cid: string) {
    const answer = await web3Storage.get(cid);
    if (!answer?.ok) {
      console.debug(`Failed to get cid ${cid}`);
      return;
    }

    const files = await answer.files();
    files[0].text().then(v => setTranslation({__html: v}));
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
