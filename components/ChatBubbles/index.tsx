import { ChatBubblesProps } from "./types";
import * as Styles from "./styles";

const ChatBubbles = (props: ChatBubblesProps) => {
  const { children } = props;

  return <Styles.Wrapper>{children}</Styles.Wrapper>;
};
export default ChatBubbles;
