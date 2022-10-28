import { rem } from "polished";

export const colors = {
  black: "#000000",
  white: "#ffffff",
};

export const global = {
  backgroundColor: colors.black,
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
  contentMaxWidth: rem("1344px"),
  sidePadding: rem("16px"),
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
