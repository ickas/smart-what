import styled from "styled-components";
import { rem } from "polished";
import { colors, global, nav, typography } from "@/styles/design-tokens";

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
  border: ${rem("1px")} solid ${(props) => (props.bg ? colors.purple500 : "transparent")};
  border-radius: ${rem("10px")};
  background: ${(props) => (props.bg ? `${colors.purple850}B3` : "transparent")};
  backdrop-filter: var(--blur);
  -webkit-backdrop-filter: var(--blur);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${rem("8px")};
  transition-duration: ${global.hoverTransitionDuration};

  > div {
    height: 68px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      width: auto;
      height: ${rem("38px")};
    }

    a {
      margin-right: ${rem("32px")};
      color: ${colors.purple50};
      text-decoration: none;
      transition-duration: ${global.hoverTransitionDuration};

      &:hover {
        color: ${colors.grey100};
      }
    }
  }
`;
