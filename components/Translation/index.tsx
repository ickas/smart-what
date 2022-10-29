import { useState, useEffect } from "react";
import { useAccount } from "@web3modal/react";
import axios from "axios";
import * as Styles from "./styles";
import { Web3Storage } from "web3.storage";
import Spinner from "@/components/Spinner";
import Formatter from "@/components/Formatter";

const Translation = () => {
  const [contractUrl, setContractUrl] = useState("");
  const [translation, setTranslation] = useState({ __html: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { account } = useAccount();
  const [web3storageKey] = useState(process.env.NEXT_PUBLIC_WEB3_STORAGE_API_KEY);
  const [web3Storage] = useState(new Web3Storage({ token: web3storageKey! }));

  useEffect(() => {
    if (contractUrl) {
      setLoading(true);
      setTimeout(fetchAndSetTranslation, 2000);
    }
  }, [contractUrl]);

  function fetchAndSetTranslation() {
    if (!contractUrl) {
      setLoading(false);
      setError("No contract URL");
      return console.debug(`No contractURL`);
    }

    axios
      .post(`api/translate`, { url: contractUrl })
      .then(({ data }) => data)
      .then(({ parsedSource, contractSource }) => {
        console.debug(`contractSource`, contractSource);
        console.debug(`parsedSource`, parsedSource);
        return { __html: parsedSource };
      })
      .then((parsedSource) => {
        setError("");
        setLoading(false);
        setTranslation(parsedSource);
      })
      .catch((e) => {
        setLoading(false);
        setError("Error fetching translation");
        console.debug(`Error while fetching translation`, e?.message || e?.toString());
        return "Error fetching translation";
      });
  }

  async function saveCurrentTranslation() {
    if (!translation) {
      console.debug(`Missing translation`);
      return;
    }

    let cid = null;
    if (account?.address) {
      const name = contractUrl.split("/").pop();

      const file = new Blob([translation.__html], { type: "text/plain" });
      cid = await web3Storage.put([new File([file], name!)]);
    }

    const previous = JSON.parse(localStorage.getItem("translations") || "{}");
    const newState = {
      ...previous,
      [contractUrl]: { customName: "", translation: !cid ? translation.__html : null, cid },
    };

    localStorage.setItem("translations", JSON.stringify(newState));
  }

  return (
    <Styles.Wrapper>
      <h2>
        Try it <span>here</span>
      </h2>
      <span>Paste your smart contract</span>

      <Styles.Input>
        <input
          className={contractUrl && error ? "error" : undefined}
          type="url"
          placeholder="https://example.xyz/smart-contract.sol"
          value={contractUrl}
          onChange={(evt) => {
            setContractUrl(evt.target.value);
          }}
        />
        {loading && <Spinner />}
        {!loading && contractUrl && (
          <button
            className="clean"
            onClick={() => {
              setError("");
              setContractUrl("");
              setTranslation({ __html: "" });
            }}
          >
            <img src="close.svg" />
          </button>
        )}
        {error && contractUrl && <span>{error}</span>}
      </Styles.Input>

      {/*
      <button
        onClick={() => {
          saveCurrentTranslation();
        }}
      >
        Save translation
      </button> */}

      {translation.__html && (
        <Formatter>
          <div dangerouslySetInnerHTML={translation}></div>
        </Formatter>
      )}
    </Styles.Wrapper>
  );
};

export default Translation;
