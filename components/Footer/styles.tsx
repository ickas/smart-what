import styled from "styled-components";
import { rem } from "polished";
import { colors, layout, typography, global, device } from "@/styles/design-tokens";

export const Wrapper = styled.footer`
  border-top: ${rem("1px")} solid ${colors.purple700};
  background-color: ${colors.purple900};
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${layout.contentMaxWidth};
  padding: 0 ${layout.sidePadding} ${layout.sidePadding} ${layout.sidePadding};
  text-align: center;

  @media ${device.s} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${layout.sidePadding};
    text-align: inherit;
  }

  img {
    width: ${rem("100px")};
    height: auto;
  }

  a,
  span {
    font-size: ${typography.fontSize};
    color: ${colors.purple200};
  }

  a {
    text-decoration: none;
    transition-duration: ${global.hoverTransitionDuration};

    &:hover {
      color: ${colors.purple400};
    }
  }
`;
