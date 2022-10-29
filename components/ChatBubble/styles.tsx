import styled from "styled-components";
import { rem } from "polished";
import { chatBubble, colors, device, typography } from "@/styles/design-tokens";
import { ChatBubbleProps } from "./types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Bubble = styled.div<ChatBubbleProps>`
  width: max-content;
  max-width: 80%;
  border-radius: ${chatBubble.borderRadius};
  background-image: ${(props) =>
    props.side === "left"
      ? "linear-gradient(180deg, #dfd6ff 0%, #fff 100%)"
      : "linear-gradient(180deg, #4329A6 0%, #5736D9 0.01%, #4329A6 78.35%)"};
  padding: ${chatBubble.padding};
  font-size: ${rem("26px")};
  font-weight: ${typography.fontWeigthMedium};
  color: ${(props) => (props.side === "left" ? colors.purple950 : colors.purple50)};
  align-self: ${(props) => (props.side === "left" ? "flex-start" : "flex-end")};

  & + div {
    align-self: ${(props) => (props.side === "left" ? "flex-start" : "flex-end")};
    width: ${chatBubble.triangleSize};
    height: ${chatBubble.triangleSize};
    margin: ${(props) =>
      props.side === "left"
        ? `0 0 0 ${chatBubble.triangleMargin}`
        : ` 0 ${chatBubble.triangleMargin} 0 0`};
    background: ${(props) =>
      props.side === "left"
        ? "linear-gradient(to bottom right, #fff 0%, #fff 50%, transparent 50%, transparent 100%)"
        : "linear-gradient(to bottom right, transparent 0%, transparent 50%, #4329A6 50%, #4329A6 100%)"};
    transform: ${(props) => (props.side === "left" ? "none" : "rotate(-90deg)")};
  }

  @media ${device.s} {
    max-width: 70%;
    font-size: ${chatBubble.fontSize};
  }
`;
