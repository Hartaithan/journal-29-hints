import AuthListener from "@/components/AuthListener";
import SupabaseProvider from "@/components/SupabaseProvider";
import { createServerClient } from "@/helpers/supabase-server";
import "./globals.css";

interface IRootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = async (props: IRootLayoutProps) => {
  const { children } = props;

  const supabase = createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <head />
      <body>
        <SupabaseProvider session={session}>
          <AuthListener serverAccessToken={session?.access_token} />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
};

export default RootLayout;
