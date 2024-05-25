import { useRef } from "react";
import { useRipple } from "./use-ripple";

export const Ripple = () => {
  const ref = useRef<HTMLSpanElement>(null);
  const ripples = useRipple(ref);
  return (
    <span
      className="absolute inset-0 size-full overflow-hidden rounded-inherit"
      ref={ref}
    >
      {ripples?.map((style, i) => {
        return (
          <span
            key={i}
            className="absolute scale-0 rounded-full bg-current opacity-25"
            style={{
              ...style,
              transform: "scale(0)",
              animation: "ripple 1s linear",
            }}
          />
        );
      })}
    </span>
  );
};
