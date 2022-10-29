import Link from "next/link";
import {useState} from "react";

export default function Translations() {

  const [translations, setTranslations] = useState<{file: string; value: string}[]>([]);

  function fetchFromStorage() {
    const value = JSON.parse(localStorage.getItem('translations') || '{}');
    if (!Object.keys(value).length) {
      console.debug(`No keys on storage`);
      return;
    }

    setTranslations(Object.keys(value).map(file => ({file: file.split('/').pop()!, value})));
  }

  function selectTranslation(i: number) {
    const entry = translations[i].value;
    const value = JSON.parse(localStorage.getItem('translations')!)[entry];
    if (value.cid) {
      // todo connect to Translation.retrieveContractFromIPFS
    } else {
      // todo connect to Translation.fetchAndSetTranslation
    }
  }

  return (
    <div>
      <h1>My translations</h1>
      <ul>
        {translations.map(({file}, i) => <li>{file}</li>)}
      </ul>
      <Link href="/">
        <span>Back</span>
      </Link>
    </div>
  );
}
