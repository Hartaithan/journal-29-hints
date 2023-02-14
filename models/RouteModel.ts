import { Locale } from "./LocaleModel";

export interface IRouteTitle {
  [key: Locale | string]: string;
}

export interface IRoute {
  id: number;
  pathname: string;
  title: IRouteTitle;
  isNavigable: boolean;
  isVisibleOnAuth: boolean;
}
