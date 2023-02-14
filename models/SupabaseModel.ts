import { Session, SupabaseClient } from "@supabase/supabase-js";

export type NullableSession = Session | null;

export interface ISupabaseContext {
  supabase: SupabaseClient;
  session: NullableSession;
}
