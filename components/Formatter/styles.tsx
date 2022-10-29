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

    }
  }
`;
