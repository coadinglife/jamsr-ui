import { type VariantTypes } from "@/types/variants";
import { readFileSync } from "fs";
import path from "path";

export const readVariantCode = <T extends keyof VariantTypes>(
  component: T,
  variant: VariantTypes[T][number],
) => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "app",
    "(docs)",
    "components",
    component,
    "variants",
    `${variant}.tsx`,
  );
  const data = readFileSync(filePath, "utf-8");
  return data;
};
