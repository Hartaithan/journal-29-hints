import { Locale } from "../models/LocaleModel";
import { IOption } from "../models/OptionModel";

export const langOptions: IOption<Locale>[] = [
  { id: 1, label: "Русский", value: "ru" },
  { id: 2, label: "English", value: "en" },
];
