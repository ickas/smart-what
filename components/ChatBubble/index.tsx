import * as Styles from "./styles";
import { ChatBubbleProps } from "./types";

const ChatBubble = (props: ChatBubbleProps) => {
  const { side = "left", value } = props;

  return (
    <Styles.Wrapper>
      <Styles.Bubble side={side}>
        <span className="value">{value}</span>
        <div className="loading">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </Styles.Bubble>
      <div />
    </Styles.Wrapper>
  );
};
export default ChatBubble;
