import styled from "styled-components";
import { rem } from "polished";
import {
  layout,
  nav,
  colors,
  global,
  typography,
  translation,
  device,
} from "@/styles/design-tokens";

export const Wrapper = styled.div`
  position: relative;
  min-height: 200px;
  border: ${rem("1px")} solid transparent;
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
    font-size: ${translation.titleFontSize};
    font-weight: ${typography.fontWeigthMedium};

    span {
      background: linear-gradient(${colors.white} 30%, #6d48fa);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  span {
    color: ${translation.subtitleColor};
  }
`;

export const Input = styled.div`
  position: relative;
  top: ${rem("108px")};
  margin-top: ${global.defaultMargin};
  position: sticky;

  input {
    --blur: ${nav.blur};
    border: ${rem("1px")} solid ${colors.purple500};
    border-radius: ${rem("20px")};
    background: ${colors.purple850}B3;
    backdrop-filter: var(--blur);
    -webkit-backdrop-filter: var(--blur);
    width: 100%;
    height: ${rem("40px")};
    font-size: ${typography.fontSize};
    color: ${translation.inputColor};
    text-align: center;

    @media ${device.s} {
      border: ${rem("2px")} solid ${colors.purple500};
      height: ${translation.inputHeight};
      padding-right: ${rem("80px")};
      font-size: ${translation.inputFontSize};
    }

    &::placeholder {
      color: ${translation.inputPlaceholderColor};
      opacity: 1;
    }

    &:-ms-input-placeholder {
      color: ${translation.inputPlaceholderColor};
      opacity: 1;
    }

    &::-ms-input-placeholder {
      color: ${translation.inputPlaceholderColor};
      opacity: 1;
    }

    &:focus {
      outline: none;
    }

    &.error {
      border-color: ${colors.red500};
      background: ${colors.red950};
      color: ${colors.red500};
    }
  }

  .spinner {
    position: absolute;
    top: ${rem("10px")};
    right: ${rem("10px")};

    @media ${device.s} {
      top: ${rem("25px")};
      right: ${rem("20px")};
    }
  }

  .clean {
    position: absolute;
    top: ${rem("5px")};
    right: ${rem("10px")};
    width: ${rem("30px")};
    height: ${rem("30px")};

    img {
      width: ${rem("30px")};
      height: ${rem("30px")};
    }

    & + span {
      display: inline-block;
      margin-top: ${rem("5px")};
      color: ${colors.red500};
    }

    @media ${device.s} {
      top: ${rem("20px")};
      right: ${rem("15px")};
      width: ${rem("50px")};
      height: ${rem("50px")};

      img {
        width: ${rem("50px")};
        height: ${rem("50px")};
      }
    }
  }
`;
