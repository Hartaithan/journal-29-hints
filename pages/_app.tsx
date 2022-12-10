import { Lora } from "@next/font/google";
import GlobalStyle from "../styles/globals";
import { useState } from "react";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import MainLayout from "../layouts/MainLayout";
import { IAppProps, IPageProps } from "../models/AppModel";

const lora = Lora({
  subsets: ["latin", "cyrillic"],
});

const App: React.FC<IAppProps<IPageProps>> = (props) => {
  const { Component, pageProps } = props;
  const Layout = Component.Layout || MainLayout;
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Layout>
        <main className={lora.className}>
          <Component {...pageProps} />
        </main>
      </Layout>
      <GlobalStyle />
    </SessionContextProvider>
  );
};

export default App;
