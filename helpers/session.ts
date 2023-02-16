import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSidePropsContext } from "next";
import { NullableSession, NullableUser } from "../models/AppModel";

interface SessionResponse {
  initialSession: NullableSession;
  user: NullableUser;
}

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
