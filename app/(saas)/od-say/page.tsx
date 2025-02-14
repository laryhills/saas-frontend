"use client";

import { useLayoutEffect } from "react";

import { withClientOnly } from "@/shared/components/client-only/client-only";
import { NavigationBreadcrumb } from "@/shared/features/navigation/navigation.context";
import { PageContainer } from "@/shared/features/page/page-container/page-container";
import { ApplyIssueSidepanel } from "@/shared/panels/apply-issue-sidepanel/apply-issue-sidepanel";
import { ProjectSidepanel } from "@/shared/panels/project-sidepanel/project-sidepanel";
import { withAuthenticated } from "@/shared/providers/auth-provider";

import Chat from "./_features/chat/chat";

function ODSay() {
  useLayoutEffect(() => {
    document.querySelector(".page-container")?.classList.remove("pb-20");

    return () => {
      document.querySelector(".page-container")?.classList.add("pb-20");
    };
  }, []);

  return (
    <PageContainer size="large" className="flex-1">
      <NavigationBreadcrumb
        breadcrumb={[
          {
            id: "root",
            label: "OD-Say",
          },
        ]}
      />
      <Chat />
      <ApplyIssueSidepanel />
      <ProjectSidepanel />
    </PageContainer>
  );
}

export default withClientOnly(withAuthenticated(ODSay));
