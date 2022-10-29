import styled, { keyframes } from "styled-components";
import { rem, timingFunctions } from "polished";
import { colors, global, formatter } from "@/styles/design-tokens";

const slideInLeft = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 50vw;
  height: 100vh;
  background-color: white;
  padding: 0 ${rem("20px")} ${rem("20px")} ${rem("20px")};
  animation-timing-function: ${timingFunctions("easeOutQuint")};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-name: ${slideInLeft};
  transform: translateX(100%);
  overflow-y: auto;
  z-index: 3;

  button {
    margin-top: ${rem("20px")};
    border: ${rem("2px")} solid ${formatter.borderColor};
    border-radius: ${rem("10px")};
    background-color: ${colors.purple600};
    width: auto;
    height: auto;
    font-size: ${formatter.saveFontSize};
    color: ${formatter.saveColor};
    padding: ${rem("10px")} ${rem("20px")};
    transition-duration: ${global.hoverTransitionDuration};

    &:hover {
      background-color: ${colors.purple900};
    }
  }
`;
