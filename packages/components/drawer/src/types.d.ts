import { type DrawerProps } from ".";

declare module "@jamsr-ui/styles" {
  export interface UIStylesType {
    drawer?: Pick<DrawerProps, "className" | "classNames">;
  }
}
