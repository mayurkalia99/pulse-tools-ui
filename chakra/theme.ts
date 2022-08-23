import { extendTheme } from "@chakra-ui/react";
import colors from "./foundations/colors";
import { fonts, fontSizes } from "./foundations/fonts";
import breakpoints from "./foundations/breakpoints";
import styles from "./styles";

export const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
  fontSizes,
  styles,
});
