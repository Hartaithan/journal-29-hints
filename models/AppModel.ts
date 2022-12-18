import { Session, User } from "@supabase/supabase-js";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { FC, PropsWithChildren } from "react";

export interface ILayoutProps {
  Layout?: FC<PropsWithChildren>;
}

export interface IAppProps<P> extends AppProps<P> {
  Component: AppProps["Component"] & ILayoutProps;
}

export interface IPageProps {
  initialSession: Session;
  user: User | null;
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & ILayoutProps;
