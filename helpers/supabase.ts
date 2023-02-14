import {
  createBrowserSupabaseClient,
  createServerComponentSupabaseClient,
} from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";

export const createServerClient = () =>
  createServerComponentSupabaseClient({
    headers,
    cookies,
  });

export const createBrowserClient = () => createBrowserSupabaseClient();
