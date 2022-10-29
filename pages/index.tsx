import { useInView } from "react-intersection-observer";
import Nav from "@/components/Nav";
import ChatBubble from "@/components/ChatBubble";
import Translation from "@/components/Translation";
import ChatBubbles from "@/components/ChatBubbles";
import Footer from "@/components/Footer";

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });

  return (
    <>
      <Nav bg={!inView} linkUrl="/translations" linkValue="Past Translations" />
      <div ref={ref} style={{ height: "130px" }} />
      <main>
        <h1 className="sr-only">Google Translate for Smart Contracts</h1>
        <ChatBubbles>
          <ChatBubble side="left" value="It’s a Google Translate for Smart Contracts" />
          <ChatBubble side="right" value="Smart What ?!" />
        </ChatBubbles>
        <Translation />
      </main>
      <Footer />
    </>
  );
}
