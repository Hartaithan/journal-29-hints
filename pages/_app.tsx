import type { AppProps } from "next/app";
import { Lora } from "@next/font/google";
import GlobalStyle from "../styles/globals";
import { useState } from "react";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import {
  createBrowserSupabaseClient,
  Session,
} from "@supabase/auth-helpers-nextjs";

const lora = Lora({
  subsets: ["latin", "cyrillic"],
});

interface AppWithSession {
  initialSession: Session;
}

const App: React.FC<AppProps<AppWithSession>> = (props) => {
  const { Component, pageProps } = props;
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <main className={lora.className}>
        <GlobalStyle />
        <Component {...pageProps} />
      </main>
    </SessionContextProvider>
  );
};

export default App;
