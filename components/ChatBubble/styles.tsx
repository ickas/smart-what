import styled, { keyframes } from "styled-components";
import { rem, timingFunctions } from "polished";
import { chatBubble, colors, device, typography } from "@/styles/design-tokens";
import { ChatBubbleProps } from "./types";

const slideInTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const showValue = keyframes`
  from {
    visibility: hidden;
    position: absolute;
    width: 0;
    height: 0;
  }

  to {
    visibility: visible;
    position: inherit;
    width: auto;
    height: auto;
  }
`;

const hideLoading = keyframes`
  from {
    visibility: visible;
    width: auto;
    height: auto;
  }

  to {
    visibility: hidden;
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
  }
`;

const loading = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  animation-timing-function: ${timingFunctions("easeOutQuint")};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-name: ${slideInTop};
  transform: translateX(100%);

  &:last-child {
    animation-delay: 1s;

    .value {
      width: 0;
      height: 0;
      position: absolute;
      visibility: hidden;
      animation-delay: 2.5s;
      animation-fill-mode: forwards;
      animation-name: ${showValue};
      overflow: hidden;
    }

    .loading {
      min-width: ${rem("100px")};
      height: ${rem("24.5px")};
      visibility: visible;
      display: flex;
      justify-content: center;
      animation-delay: 2.5s;
      animation-fill-mode: forwards;
      animation-name: ${hideLoading};

      @media ${device.s} {
        height: ${rem("32px")};
      }

      .circle {
        display: inline-block;
        width: 15px;
        height: 15px;
        border-radius: 15px;
        background-color: ${colors.purple700};

        &:nth-last-child(1) {
          animation: ${loading} 0.6s 0.1s linear infinite;
        }
        &:nth-last-child(2) {
          margin: 0 3px;
          animation: ${loading} 0.6s 0.2s linear infinite;
        }
        &:nth-last-child(3) {
          animation: ${loading} 0.6s 0.3s linear infinite;
        }
      }
    }
  }
`;

export const Bubble = styled.div<ChatBubbleProps>`
  width: max-content;
  max-width: 85%;
  border-radius: ${chatBubble.borderRadius};
  background-image: ${(props) =>
    props.side === "left"
      ? "linear-gradient(180deg, #dfd6ff 0%, #fff 100%)"
      : "linear-gradient(180deg, #4329A6 0%, #5736D9 0.01%, #4329A6 78.35%)"};
  padding: ${chatBubble.padding};
  font-size: ${rem("20px")};
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
