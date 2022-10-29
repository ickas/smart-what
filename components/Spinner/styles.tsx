import styled, { keyframes } from "styled-components";
import { rem } from "polished";
import { colors, device } from "@/styles/design-tokens";

const rotation = keyframes`
  from {
      transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  border: ${rem("5px")} solid hsla(0, 0%, 48%, 0.5);
  border-top-color: ${colors.purple500};
  border-radius: 999px;
  width: ${rem("20px")};
  height: ${rem("20px")};
  animation: ${rotation} 0.8s ease infinite;

  @media ${device.s} {
    border: ${rem("10px")} solid ${colors.purple700};
    border-top-color: ${colors.purple500};
    width: ${rem("40px")};
    height: ${rem("40px")};
  }
`;
