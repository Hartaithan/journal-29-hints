"use client";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";

interface IAuthListenerProps {
  accessToken?: string;
}

const AuthListener: FC<IAuthListenerProps> = (props) => {
  const { accessToken } = props;
  const router = useRouter();
  const supabase = createBrowserSupabaseClient();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      if (session?.access_token !== accessToken) {
        router.refresh();
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [accessToken]); // eslint-disable-line

  return null;
};

export default AuthListener;
