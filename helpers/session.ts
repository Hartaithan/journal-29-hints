import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSidePropsContext } from "next";
import { SessionResponse } from "../models/AppModel";

export const getSession = async (
  ctx: GetServerSidePropsContext
): Promise<SessionResponse> => {
  const supabase = createServerSupabaseClient(ctx);
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return {
    initialSession: session,
    user: session?.user || null,
  };
};
