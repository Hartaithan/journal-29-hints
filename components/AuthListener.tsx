"use client";

import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";
import { supabase } from "../helpers/supabase";

interface IAuthListenerProps {
  accessToken?: string;
}

const AuthListener: FC<IAuthListenerProps> = (props) => {
  const { accessToken } = props;
  const router = useRouter();

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
