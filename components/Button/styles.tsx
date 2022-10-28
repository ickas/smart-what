import styled from "styled-components";
import { rem } from "polished";
import { colors, global, typography } from "@/styles/design-tokens";

export const Wrapper = styled.button`
  margin: 0;
  border: 0;
  border-radius: 999px;
  background-color: ${colors.white};
  width: min-content;
  height: ${rem("50px")};
  white-space: nowrap;
  padding: 0 ${rem("32px")};
  text-decoration: none;
  transition-duration: ${global.hoverTransitionDuration};
  cursor: pointer;

  &:hover {
    background-color: ${colors.grey100};
  }

  span {
    position: relative;
    font-size: ${typography.fontSize};
    font-weight: ${typography.fontWeigthMedium};
    color: ${colors.purple950};
  }
`;
