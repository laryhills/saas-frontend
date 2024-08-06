import { ElementType } from "react";

import { ButtonDefaultAdapter } from "@/design-system/atoms/button/adapters/default/default.adapter";
import { withComponentAdapter } from "@/design-system/helpers/with-component-adapter";

import { cn } from "@/shared/helpers/cn";

import { ButtonPort } from "../button.types";

export function ButtonDanger<C extends ElementType = "button">(props: ButtonPort<C>) {
  return withComponentAdapter<ButtonPort<C>>(ButtonDefaultAdapter)({
    ...props,
    classNames: {
      ...(props.classNames || {}),
      base: cn(
        "bg-interactions-error-active data-[disabled=true]:bg-interactions-error-disabled",
        "hover:bg-interactions-error-hover",
        props.classNames?.base
      ),
      loaderContainer: cn("bg-interactions-error-active", props.classNames?.loaderContainer),
    },
  });
}
