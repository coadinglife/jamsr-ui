import { tv, type VariantProps } from "@jamsr-ui/utils";

export const inputVariants = tv({
  slots: {
    base: "group flex flex-col gap-1",
    labelWrapper: "flex items-center gap-2",
    label: "shrink-0 select-none text-sm font-normal text-foreground-400",
    mainWrapper: "flex gap-1",
    inputWrapper:
      "grow overflow-hidden focus-within:border-primary focus-within:ring-primary",
    innerWrapper: "flex h-full items-center",
    input:
      "block grow bg-transparent px-3 py-2 placeholder:text-foreground-400 read-only:cursor-not-allowed focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
    helper: "text-xs text-foreground-600",
    startContent:
      "flex h-full items-center pl-2 text-foreground-500 empty:hidden",
    endContent: "flex h-full items-center pr-2 text-foreground-500",
    notation: "",
  },
  variants: {
    fullWidth: {
      true: {
        base: "w-full",
      },
    },
    variant: {
      outlined: {
        inputWrapper: "rounded-xl border-2 border-divider",
      },
      filled: {
        inputWrapper:
          "rounded-xl border-2 border-divider bg-background-secondary",
      },
    },
    size: {
      false: {},
      sm: {
        inputWrapper: "h-8 min-h-8 rounded-xl",
        input: "text-sm placeholder:text-sm",
      },
      md: {
        inputWrapper: "h-10 min-h-10",
        input: "text-sm placeholder:text-sm",
      },
      lg: {
        inputWrapper: "h-12 min-h-12",
        input: "text-base placeholder:text-base",
      },
    },
    isInvalid: {
      true: {
        inputWrapper:
          "border-danger focus-within:border-danger focus-within:shadow-danger focus-within:ring-danger",
        helper: "text-danger",
        label: "text-danger",
      },
    },
    labelPlacement: {
      top: {
        mainWrapper: "flex-col",
      },
      start: {
        mainWrapper: "items-center",
      },
      inside: {
        inputWrapper: "relative",
        innerWrapper: "items-end",
        labelWrapper:
          "pointer-events-none absolute inset-0 left-3 flex size-full justify-between",
        label:
          "absolute top-1/2 -translate-y-1/2 text-foreground-400 transition-all duration-200 group-data-[filled-within=true]:top-4",
      },
    },
    isTextarea: {
      true: {
        innerWrapper: "h-auto",
      },
    },
    isRequired: {
      true: {
        notation: "text-danger",
      },
    },
    isOptional: {
      true: {
        notation: "text-success",
      },
    },
  },
  compoundVariants: [
    {
      labelPlacement: "inside",
      size: "sm",
      className: {
        inputWrapper: "h-[3.25rem] min-h-[3.25rem]",
        label: "text-sm group-data-[filled-within=true]:text-xs",
      },
    },
    {
      labelPlacement: "inside",
      size: "md",
      className: {
        inputWrapper: "h-14 min-h-14",
        label: "text-sm",
      },
    },
    {
      labelPlacement: "inside",
      size: "lg",
      className: {
        inputWrapper: "h-14 min-h-14",
        label: "text-base group-data-[filled-within=true]:text-sm",
      },
    },
  ],
  defaultVariants: {
    variant: "outlined",
    size: "md",
    labelPlacement: "top",
  },
});

export type InputVariantProps = VariantProps<typeof inputVariants>;
export type InputSlots = keyof ReturnType<typeof inputVariants>;
