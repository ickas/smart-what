import styled from "styled-components";
import { rem } from "polished";
import { formatter, global, typography } from "@/styles/design-tokens";

export const Wrapper = styled.div`
  margin-top: ${global.defaultMargin};
  background-color: ${formatter.backgroundColor};
  border: ${rem("2px")} solid ${formatter.borderColor};
  border-radius: ${formatter.borderRadius};
  padding: ${formatter.padding};
  color: ${formatter.color};
  text-align: left;

  & + button {
    margin-top: ${global.defaultMargin};
    background-color: ${formatter.saveBackgroundColor};
    border: ${rem("2px")} solid ${formatter.borderColor};
    border-radius: ${formatter.borderRadius};
    width: 100%;
    height: ${formatter.saveHeight};
    font-size: ${formatter.saveFontSize};
    color: ${formatter.saveColor};
    transition-duration: ${global.hoverTransitionDuration};

    &:hover {
      background-color: ${formatter.saveHoverBackgroundColor};
    }
  }

  pre {
    margin: 0;
    font-family: ${formatter.fontFamily};
    font-size: ${formatter.fontSize};
    line-height: ${formatter.lineHeight};
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;

    ul {
      margin: ${rem("15px")} 0 0 0;
      padding: 0 0 0 ${rem("30px")};
    }

    span {
      font-weight: ${typography.fontWeigthMedium};

      &.color1 {
        color: ${formatter.color1};
      }

      &.color2 {
        color: ${formatter.color2};
      }

      &.color3 {
        color: ${formatter.color3};
      }

      &.color4 {
        color: ${formatter.color4};
      }
    }
  }
`;
