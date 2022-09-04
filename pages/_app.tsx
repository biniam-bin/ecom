import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";

const theme = {
  colors: {
    pink: "#fb2e86",
    green: "#209e0f",
    red: "#FB2448",
    blue: "#2F1AC4",
    offNavyBlue: "#3F509E",
    navyBlue: "#151875",
    skyBlue: "linear-gradient(121.53deg, #F3F9FF 0%, #F1F0FF 100%);",
    pantonePurple: "#E0D3F5",
    purple: "#7E33E0",
    offPurple: "#9F63B5",
    offBlue: "#151875",
    textColor: "#0D0E43"
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
