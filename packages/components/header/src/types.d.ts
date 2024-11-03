import { type HeaderProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    header?: Pick<HeaderProps, "className" | "classNames">;
  }
}
