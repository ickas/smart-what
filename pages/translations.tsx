import Link from "next/link";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Nav from "@/components/Nav";
import TranslationsList from "@/components/TranslationsList";
import Footer from "@/components/Footer";

export default function Translations() {
  const [translations, setTranslations] = useState<{ file: string; value: any }[]>([]);
  const [currentTranslation, setCurrentTransaltion] = useState({ __html: "" });

  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  console.log("CENAS", currentTranslation);

  function fetchFromStorage() {
    const value = JSON.parse(localStorage.getItem("translations") || "{}");
    if (!Object.keys(value).length) {
      console.debug(`No keys on storage`);
      return;
    }

    setTranslations(
      Object.keys(value).map((file) => ({
        file: file.split("/").pop()!,
        value: { ...value[file] },
      })),
    );
  }

  function selectTranslation(i: number) {
    const entry = translations[i].value;

    if (entry?.cid) {
      // todo connect to Translation.retrieveContractFromIPFS
    } else {
      setCurrentTransaltion({ __html: entry.translation });
    }
  }

  useEffect(() => {
    fetchFromStorage();
  }, []);

  return (
    <>
      <Nav bg={!inView} linkUrl="/" linkValue="Back" />
      <div ref={ref} style={{ height: "130px" }} />
      <TranslationsList>
        <h1>
          My <span>translations</span>
        </h1>
        <ul>
          {translations.map(({ file }, i) => (
            <li>
              <button
                onClick={() => {
                  selectTranslation(i);
                }}
              >
                <span>{file}</span>
              </button>
            </li>
          ))}
        </ul>
      </TranslationsList>
      <Footer />
    </>
  );
}
