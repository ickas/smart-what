import { colors, layout, typography } from "@/styles/design-tokens";
import { rem } from "polished";
import styled from "styled-components";

export const Wrapper = styled.footer`
  border-top: ${rem("1px")} solid ${colors.purple700};
  background-color: ${colors.purple900};
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${layout.contentMaxWidth};

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: ${rem("100px")};
    height: auto;
  }

  span {
    font-size: ${typography.fontSize};
    color: ${colors.purple200};
  }
`;
