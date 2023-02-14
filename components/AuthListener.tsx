"use client";

import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";
import { useSupabase } from "./SupabaseProvider";

interface IAuthListenerProps {
  serverAccessToken?: string;
}

const AuthListener: FC<IAuthListenerProps> = (props) => {
  const { serverAccessToken } = props;

  const { supabase } = useSupabase();
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== serverAccessToken) {
        router.refresh();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [serverAccessToken, router, supabase]);

  return null;
};

export default AuthListener;
