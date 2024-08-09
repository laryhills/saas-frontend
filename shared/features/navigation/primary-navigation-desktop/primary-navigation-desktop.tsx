"use client";

import { ReactNode, useState } from "react";

import { Paper } from "@/design-system/atoms/paper";

import { AnimatedColumn } from "@/shared/components/animated-column-group/animated-column/animated-column";
import { PrimaryMenu } from "@/shared/features/navigation/menu/primary-menu/primary-menu";
import { SecondaryMenu } from "@/shared/features/navigation/menu/secondary-menu/secondary-menu";
import { UserMenu } from "@/shared/features/navigation/menu/user-menu/user-menu";
import { PrimaryBanner } from "@/shared/features/navigation/primary-banner/primary-banner";
import { HeaderMenu } from "@/shared/features/navigation/primary-navigation-desktop/header-menu/header-menu";

function MenuContainer({ children }: { children: ReactNode }) {
  return (
    <Paper size={"s"} classNames={{ base: "flex w-full flex-col gap-2" }} container={"2"} border={"none"}>
      {children}
    </Paper>
  );
}

const SIZES = {
  folded: 64.7,
  unfolded: 260,
};

export function PrimaryNavigationDesktop() {
  const [folded, setFolded] = useState(false);

  function onFold(value: boolean) {
    setFolded(value);
  }

  const navSize = folded ? SIZES.folded : SIZES.unfolded;

  return (
    <AnimatedColumn
      autoWidth={false}
      width={navSize}
      initialWidth={260}
      className="flex h-full flex-col justify-between gap-3"
    >
      <MenuContainer>
        <HeaderMenu isFolded={folded} onFoldChange={onFold} />
      </MenuContainer>
      <MenuContainer>
        <PrimaryMenu isFolded={folded} />
      </MenuContainer>
      <PrimaryBanner isFolded={folded} />
      <MenuContainer>
        <SecondaryMenu isFolded={folded} />
      </MenuContainer>
      <MenuContainer>
        <UserMenu isFolded={folded} />
      </MenuContainer>
    </AnimatedColumn>
  );
}
