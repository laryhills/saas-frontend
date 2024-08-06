import { ElementType } from "react";

import { ButtonDefaultAdapter } from "@/design-system/atoms/button/adapters/default/default.adapter";
import { withComponentAdapter } from "@/design-system/helpers/with-component-adapter";

import { cn } from "@/shared/helpers/cn";

import { ButtonPort } from "../button.types";

export function ButtonPrimary<C extends ElementType = "button">(props: ButtonPort<C>) {
  return withComponentAdapter<ButtonPort<C>>(ButtonDefaultAdapter)({
    ...props,
    classNames: {
      ...(props.classNames || {}),
      base: cn(
        "border-1 border-interactions-white-default bg-interactions-white-default data-[disabled=true]:bg-interactions-white-disabled data-[disabled=true]:border-interactions-white-disabled",
        "hover:bg-interactions-white-hover hover:border-interactions-white-hover",
        "text-text-4 data-[disabled=true]:text-text-3",
        props.classNames?.base
      ),
      loaderContainer: cn("bg-interactions-white-default", props.classNames?.loaderContainer),
      spinnerCircle: cn("border-b-text-4", props.classNames?.spinnerCircle),
    },
  });
}
