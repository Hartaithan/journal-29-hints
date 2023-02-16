import { Session, User } from "@supabase/supabase-js";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { FC, PropsWithChildren } from "react";

export type NullableSession = Session | null;
export type NullableUser = User | null;

export interface ILayoutProps {
  Layout?: FC<PropsWithChildren>;
}

export interface IAppProps<P> extends AppProps<P> {
  Component: AppProps["Component"] & ILayoutProps;
}

export interface IPageProps {
  initialSession: NullableSession;
  user: NullableUser;
}

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> &
  ILayoutProps;
