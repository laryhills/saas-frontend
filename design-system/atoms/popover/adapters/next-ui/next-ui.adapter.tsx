"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { createContext, useContext, useState } from "react";

import { PopoverContentPort, PopoverContextPort, PopoverPort, PopoverTriggerPort } from "@/design-system/atoms/popover";

import { cn } from "@/shared/helpers/cn";

const PopoverContext = createContext<PopoverContextPort>({
  isOpen: false,
  setIsOpen: () => {},
});

export function PopoverNextUiAdapter({ children, defaultOpen = false, placement = "bottom-start" }: PopoverPort) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <PopoverContext.Provider value={{ isOpen, setIsOpen }}>
      <Popover isOpen={isOpen} onOpenChange={setIsOpen} placement={placement}>
        {children}
      </Popover>
    </PopoverContext.Provider>
  );
}

PopoverNextUiAdapter.Trigger = function PopoverNextUiAdapterTrigger({ children }: PopoverTriggerPort) {
  const context = useContext(PopoverContext);

  return <PopoverTrigger>{children(context)}</PopoverTrigger>;
};

PopoverNextUiAdapter.Content = function PopoverNextUiAdapterContent({ children, className }: PopoverContentPort) {
  const context = useContext(PopoverContext);

  return (
    <PopoverContent
      className={cn(
        "border-container-stroke-separator bg-container-action text-text-1 rounded-xl border p-3 shadow-none",
        className
      )}
    >
      {children(context)}
    </PopoverContent>
  );
};
