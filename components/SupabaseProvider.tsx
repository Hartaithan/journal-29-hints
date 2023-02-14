"use client";

import { createBrowserClient } from "@/helpers/supabase";
import { ISupabaseContext, NullableSession } from "@/models/SupabaseModel";
import { createContext, FC, useContext, useState } from "react";

// @ts-ignore
const Context = createContext<ISupabaseContext>();

interface ISupabaseProviderProps {
  children: React.ReactNode;
  session: NullableSession;
}

const SupabaseProvider: FC<ISupabaseProviderProps> = (props) => {
  const { children, session } = props;

  const [supabase] = useState(() => createBrowserClient());

  return (
    <Context.Provider value={{ supabase, session }}>
      <>{children}</>
    </Context.Provider>
  );
};

export default SupabaseProvider;

export const useSupabase = () => useContext(Context);
