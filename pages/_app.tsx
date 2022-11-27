import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Lora } from "@next/font/google";

const lora = Lora({
  subsets: ["latin", "cyrillic"],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={lora.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
