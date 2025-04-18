import { radiusVariant, tv, type VariantProps } from "@jamsr-ui/utils";

export const test = "";

export const otpInput = tv({
  slots: {
    base: "group flex flex-col gap-2",
    label: "shrink-0 select-none text-sm font-normal text-foreground-400",
    wrapper: "flex flex-col gap-1",
    inputsWrapper: "flex gap-2",
    helperText: "text-xs text-foreground-600",
    input: [
      "size-12 border-2 border-default-200 bg-transparent text-center text-base outline-none",
      "focus:border-primary enabled:hover:border-default-400 disabled:cursor-not-allowed disabled:opacity-50 ",
    ],
  },
  variants: {
    isInvalid: {
      true: {
        helperText: "text-danger",
      },
    },
    radius: radiusVariant("input"),
  },
  defaultVariants: {
    radius: "md",
  },
});

export type OtpInputVariantProps = VariantProps<typeof otpInput>;
export type OtpInputSlots = keyof ReturnType<typeof otpInput>;
