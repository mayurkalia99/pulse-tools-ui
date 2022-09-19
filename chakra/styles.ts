import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("white", "#000000")(props),
    },
    a: {
      textDecor: "none",
    },
  }),
  textStyles: {
    p: { letterSpacing: "0.44px" },
  },
};

export default styles;
