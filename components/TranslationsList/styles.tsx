import styled from "styled-components";
import { rem } from "polished";
import { layout, typography, colors, translation, global } from "@/styles/design-tokens";

export const Wrapper = styled.div`
  min-height: calc(100vh - ${rem("230px")});
  padding-bottom: ${rem("300px")};
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${layout.contentMaxWidth};
  padding: 0 ${layout.sidePadding};

  h1 {
    font-size: ${translation.titleFontSize};
    font-weight: ${typography.fontWeigthMedium};

    span {
      background: linear-gradient(${colors.white} 30%, #6d48fa);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  ul {
    margin: ${rem("20px")} 0 0 0;
    padding: 0;

    li {
      list-style: none;

      &:not(:last-child) {
        margin-bottom: ${rem("15px")};
      }

      button {
        color: ${colors.white};

        span {
          font-size: ${rem("34px")};
          color: ${colors.purple200};
          transition-duration: ${global.hoverTransitionDuration};
        }

        &:hover {
          span {
            color: ${colors.purple400};
          }
        }
      }
    }
  }
`;
