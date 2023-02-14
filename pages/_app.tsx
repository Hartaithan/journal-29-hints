import { Lora } from "@next/font/google";
import { useState } from "react";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { ThemeProvider } from "styled-components";
import MainLayout from "../layouts/MainLayout";
import { IAppProps, IPageProps } from "../models/AppModel";
import GlobalStyle from "../styles/globals";
import theme from "../styles/theme";

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
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      <GlobalStyle />
      <style jsx global>{`
        * {
          font-family: ${lora.style.fontFamily};
          font-style: ${lora.style.fontStyle};
        }
      `}</style>
    </SessionContextProvider>
  );
};

export default App;
