// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
// const theme = extendTheme({ config });

const theme = extendTheme({
  ...config,
  components: {
    Divider: {
      baseStyle: {
        borderTop: "1px solid red",
        height: "12.8px",
        // backgroundColor: "#616161",
      },
    },
  },
});

export default theme;
