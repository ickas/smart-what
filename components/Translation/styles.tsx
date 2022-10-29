import styled from "styled-components";
import { rem } from "polished";
import { colors, global, typography } from "@/styles/design-tokens";

export const Wrapper = styled.div`
  position: relative;
  margin-left: -5%;
  width: 110%;
  min-height: 200px;
  border: 1px solid transparent;
  background-color: ${global.backgroundColor};
  background-image: url("circle.svg");
  background-size: 110% auto;
  background-position: top center;
  background-repeat: no-repeat;
  text-align: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    margin-top: ${rem("-250px")};
    width: 100%;
    height: ${rem("300px")};
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(55, 66, 185, 0.18) 0%,
      rgba(55, 66, 185, 0) 100%
    );
    z-index: 1;
  }

  h2 {
    margin: ${rem("100px")} 0 ${rem("40px")} 0;
    font-size: ${rem("60px")};
    font-weight: ${typography.fontWeigthMedium};

    span {
      background: linear-gradient(${colors.white} 30%, #6d48fa);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  span {
    color: ${colors.purple200};
  }

  input {
    margin-top: ${rem("20px")};
    border: 2px solid ${colors.purple500};
    border-radius: ${rem("20px")};
    background-color: ${colors.purple900};
    width: 100%;
    height: ${rem("90px")};
    font-size: ${rem("26px")};
    color: ${colors.purple50};
    text-align: center;

    &::placeholder {
      color: ${colors.purple700};
      opacity: 1;
    }

    &:-ms-input-placeholder {
      color: ${colors.purple700};
      opacity: 1;
    }

    &::-ms-input-placeholder {
      color: ${colors.purple700};
      opacity: 1;
    }
  }
`;
