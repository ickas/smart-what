import { useInView } from "react-intersection-observer";
import Nav from "@/components/Nav";
import ChatBubble from "@/components/ChatBubble";
import Translation from "@/components/Translation";
import ChatBubbles from "@/components/ChatBubbles";

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  return (
    <>
      <Nav bg={!inView} pastTransValue="Past Translations" />
      <div ref={ref} style={{ height: "130px" }} />
      <main>
        <ChatBubbles>
          <ChatBubble side="left" value="It’s a Google Translate for Smart Contracts" />
          <ChatBubble side="right" value="Smart What ?!" />
        </ChatBubbles>
        <Translation />
      </main>
    </>
  );
}
