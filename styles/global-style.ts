import { createGlobalStyle } from 'styled-components';
import { rem } from 'polished';
import { layout, colors, typography, device, global } from './design-tokens';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  :root {
    --fontSize: ${typography.fontSize};
    --sidePadding: ${layout.sidePadding};

    @media ${device.s} {
      --fontSize: ${rem("20px")};
      --sidePadding: calc(${layout.sidePadding} * 3);
    }
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background-color: ${global.backgroundColor};
    font-family: ${typography.fontFamily};
    font-size: var(--fontSize);
    font-weight: ${typography.fontWeigthRegular};
    font-feature-settings: 'ss04' on;
    color: ${colors.white};
    overflow-x: hidden;
  }

  .sr-only {
    position: absolute !important;
    margin: 0;
    border: 0;
    width: ${rem('1px')};
    height: auto;
    padding: 0;
    white-space: nowrap;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }

  @media screen and (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
`;

export default GlobalStyle;
