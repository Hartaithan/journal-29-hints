import { Session, User } from "@supabase/supabase-js";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { FC, PropsWithChildren } from "react";

export type NullableSession = Session | null;
export type NullableUser = User | null;

export interface ILayoutProps {
  Layout?: FC<PropsWithChildren>;
}

export interface SessionResponse {
  initialSession: NullableSession;
  user: NullableUser;
}

export interface IAppProps<P = {}> extends AppProps<P & SessionResponse> {
  Component: AppProps["Component"] & ILayoutProps;
}

export type IPageProps<P = {}, IP = P> = NextPage<P, IP> & ILayoutProps;
export type IAdminPageProps<P = {} & SessionResponse, IP = P> = NextPage<
  P,
  IP
> &
  ILayoutProps;
