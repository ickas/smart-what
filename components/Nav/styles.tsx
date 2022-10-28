import styled from "styled-components";
import { rem } from "polished";
import { colors, global } from "@/styles/design-tokens";

export const Wrapper = styled.nav`
  border: 1px solid red;
  padding: ${rem("20px")} ${rem("40px")};
`;

export const Overlay = styled.div`
  border: 1px solid blue;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    border: 1px solid yellow;
    height: 68px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      margin-right: ${rem("32px")};
      color: ${colors.purple50};
      text-decoration: none;
      transition-duration: ${global.hoverTransitionDuration};

      &:hover {
        color: ${colors.grey100};
      }
    }

    svg {
      width: auto;
      height: ${rem("38px")};
    }
  }
`;
