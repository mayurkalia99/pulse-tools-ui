import { extendTheme, theme as baseTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const components = {
  Text: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: mode("black", "white")(props),
      letterSpacing: "0.44px",
    }),
  },
  Heading: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: mode("black", "white")(props),
    }),
  },
  // Link: {
  //   baseStyle: (props: StyleFunctionProps) => ({
  //     color: mode("black", "white")(props),
  //   }),
  // },
};

export default components;
