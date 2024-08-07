import { tv } from "tailwind-variants";

export const ToasterSonnerVariants = tv({
  slots: {
    base: "border-container-stroke-separator text-text-1 flex justify-between gap-3 rounded-lg border p-3",
    messageWrapper: "flex items-center gap-2",
    closeButton: "text-text-1",
  },
  variants: {
    variant: {
      default: {
        base: "bg-container-action",
      },
      error: {
        base: "bg-interactions-error-active",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
