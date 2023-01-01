export type OptionValue = string | number | boolean;

export interface IOption<P = OptionValue> {
  id: number;
  label: string;
  value: P;
}
