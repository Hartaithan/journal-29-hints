import type { AppProps } from "next/app";
import { Lora } from "@next/font/google";
import GlobalStyle from "../styles/globals";

const lora = Lora({
  subsets: ["latin", "cyrillic"],
});

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;
  return (
    <main className={lora.className}>
      <GlobalStyle />
      <Component {...pageProps} />
    </main>
  );
};

export default App;
