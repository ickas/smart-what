import { useInView } from "react-intersection-observer";
import Nav from "@/components/Nav";
import ChatBubble from "@/components/ChatBubble";
import Translation from "@/components/Translation";

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  return (
    <>
      <Nav bg={!inView} pastTransValue="Past Translations" />
      <div ref={ref} style={{ height: "130px" }} />
      <main>
        <ChatBubble side="left" value="It’s a Google Translate for Smart Contracts" />
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
    </>
  );
}
