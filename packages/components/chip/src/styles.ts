import {
  type ClassValue,
  colorVariants,
  radiusVariant,
  tv,
  type VariantProps,
} from "@jamsr-ui/utils";

export const test = "";
const base = tv({
  slots: {
    base: "relative box-border inline-flex min-w-min max-w-fit shrink-0 items-center justify-between whitespace-nowrap rounded-full",
    content: "flex flex-1 items-center gap-1 text-inherit",
    closeButton:
      "z-10 cursor-pointer select-none appearance-none opacity-70 outline-none transition-opacity tap-highlight-transparent hover:opacity-100 active:opacity-disabled",
    dot: "size-1.5 rounded-full",
  },
  variants: {
    variant: {
      solid: "",
      outlined: "border",
      flat: "",
      dot: "",
    },
    size: {
      xs: {
        base: "h-5 px-0.5 text-xs",
        content: "px-0.5",
      },
      sm: {
        base: "h-6 px-1 text-xs",
        content: "px-1",
      },
      md: {
        base: "h-7 px-1 text-sm",
        content: "px-1",
      },
      lg: {
        base: "h-8 px-2 text-base",
        content: "px-2",
      },
    },
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: "",
    },
    isSquare: {
      true: {
        base: "flex aspect-square items-center justify-center",
        content: "flex-none",
      },
    },
    isBordered: {
      true: {
        base: "border",
      },
    },
    radius: radiusVariant("base"),
  },
  defaultVariants: {
    color: "default",
    size: "md",
    radius: "full",
    variant: "solid",
  },
});
export type ChipVariantsProps = VariantProps<typeof base>;
export type ChipSlots = keyof ReturnType<typeof base>;

type CompoundVariant<T> = T & {
  className?: {
    [K in ChipSlots]?: ClassValue;
  };
};

const solidVariant: CompoundVariant<ChipVariantsProps>[] = [
  {
    variant: "solid",
    color: "default",
    className: {
      base: colorVariants.solid.default,
    },
  },
  {
    variant: "solid",
    color: "primary",
    className: { base: colorVariants.solid.primary },
  },
  {
    variant: "solid",
    color: "secondary",
    className: { base: colorVariants.solid.secondary },
  },
  {
    variant: "solid",
    color: "success",
    className: { base: colorVariants.solid.success },
  },
  {
    variant: "solid",
    color: "warning",
    className: { base: colorVariants.solid.warning },
  },
  {
    variant: "solid",
    color: "danger",
    className: { base: colorVariants.solid.danger },
  },
];

const dotVariant: CompoundVariant<ChipVariantsProps>[] = [
  {
    variant: "dot",
    color: "default",
    className: {
      dot: colorVariants.solid.default,
    },
  },
  {
    variant: "dot",
    color: "primary",
    className: { dot: colorVariants.solid.primary },
  },
  {
    variant: "dot",
    color: "secondary",
    className: { dot: colorVariants.solid.secondary },
  },
  {
    variant: "dot",
    color: "success",
    className: { dot: colorVariants.solid.success },
  },
  {
    variant: "dot",
    color: "warning",
    className: { dot: colorVariants.solid.warning },
  },
  {
    variant: "dot",
    color: "danger",
    className: { dot: colorVariants.solid.danger },
  },
];

const outlinedVariant: CompoundVariant<ChipVariantsProps>[] = [
  {
    variant: "outlined",
    color: "default",
    className: { base: colorVariants.outlined.default },
  },
  {
    variant: "outlined",
    color: "primary",
    className: { base: colorVariants.outlined.primary },
  },
  {
    variant: "outlined",
    color: "secondary",
    className: { base: colorVariants.outlined.secondary },
  },
  {
    variant: "outlined",
    color: "success",
    className: { base: colorVariants.outlined.success },
  },
  {
    variant: "outlined",
    color: "warning",
    className: { base: colorVariants.outlined.warning },
  },
  {
    variant: "outlined",
    color: "danger",
    className: { base: colorVariants.outlined.danger },
  },
];

const flatVariant: CompoundVariant<ChipVariantsProps>[] = [
  {
    variant: "flat",
    color: "default",
    className: { base: colorVariants.flat.default },
  },
  {
    variant: "flat",
    color: "primary",
    className: { base: colorVariants.flat.primary },
  },
  {
    variant: "flat",
    color: "secondary",
    className: { base: colorVariants.flat.secondary },
  },
  {
    variant: "flat",
    color: "success",
    className: { base: colorVariants.flat.success },
  },
  {
    variant: "flat",
    color: "warning",
    className: { base: colorVariants.flat.warning },
  },
  {
    variant: "flat",
    color: "danger",
    className: { base: colorVariants.flat.danger },
  },
];

const isBorderedVariant: CompoundVariant<ChipVariantsProps>[] = [
  {
    isBordered: true,
    color: "danger",
    className: { base: "border-danger" },
  },
  {
    isBordered: true,
    color: "primary",
    className: { base: "border-primary" },
  },
  {
    isBordered: true,
    color: "secondary",
    className: { base: "border-secondary" },
  },
  {
    isBordered: true,
    color: "success",
    className: { base: "border-success" },
  },
  {
    isBordered: true,
    color: "warning",
    className: { base: "border-warning" },
  },
  {
    isBordered: true,
    color: "default",
    className: { base: "border-divider" },
  },
];

export const chip = tv({
  extend: base,
  compoundVariants: [
    ...solidVariant,
    ...outlinedVariant,
    ...flatVariant,
    ...isBorderedVariant,
    ...dotVariant,
  ],
});
