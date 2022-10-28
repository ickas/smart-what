import styled from "styled-components";
import { rem } from "polished";
import { colors, global, nav } from "@/styles/design-tokens";

interface OverlayProps {
  bg?: boolean;
}

export const Wrapper = styled.nav`
  position: fixed;
  width: 100%;
  padding: ${rem("20px")} ${rem("40px")};
`;

export const Overlay = styled.div<OverlayProps>`
  --blur: ${(props) => (props.bg ? nav.blur : "none")};
  border: ${(props) =>
    props.bg ? `${rem("1px")} solid ${colors.purple500}` : 0};
  border-radius: 999px;
  background: ${(props) =>
    props.bg ? `${colors.purple850}B3` : "transparent"};
  backdrop-filter: var(--blur);
  -webkit-backdrop-filter: var(--blur);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${rem("8px")};

  > div {
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
