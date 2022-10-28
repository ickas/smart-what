import { rem } from "polished";

export const colors = {
  black: "#000000",
  white: "#ffffff",
  grey50: "#F1F1F3",
  grey100: "#E3E3E8",
  purple50: "#ECEAF6",
  purple950: "#070411",
};

export const global = {
  backgroundColor: colors.purple950,
  hoverTransitionDuration: "0.3s",
};

export const device = {
  xs: `(min-width: 375px)`,
  s: `(min-width: 700px)`,
  m: `(min-width: 900px)`,
  l: `(min-width: 1280px)`,
  xl: `(min-width: 1600px)`,
  touch: `(hover: none) and (pointer: coarse)`,
  mouse: "(min-width: 538px) and (min-height: 720px)",
};

export const layout = {
  contentMaxWidth: rem("1140px"),
  sidePadding: rem("20px"),
};

export const typography = {
  fontFamily: "'Inter', Verdana, Arial, Helvetica, sans-serif",
  fontWeigthThin: 100,
  fontWeigthExtraLight: 200,
  fontWeigthLight: 300,
  fontWeigthRegular: 400,
  fontWeigthMedium: 500,
  fontWeigthSemiBold: 600,
  fontWeigthBold: 700,
  fontWeigthExtraBold: 800,
  fontWeigthBlack: 900,
  fontSize: rem("16px"),
};

export const chatBubble = {
  borderRadius: rem("30px"),
  padding: rem("30px"),
  fontSize: rem("34px"),
  triangleMargin: rem("34px"),
  triangleSize: rem("26px"),
};
