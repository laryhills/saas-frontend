import { useState } from "react";

import {
  GetApplicationsPortParams,
  GetApplicationsQueryParams,
} from "@/core/domain/application/application-contract.types";

import { TableSearch } from "@/design-system/molecules/table-search";

import { ScrollView } from "@/shared/components/scroll-view/scroll-view";
import { AccordionNewContributors } from "@/shared/modals/manage-applicants-modal/_components/applicants-table/_components/accordion-new-contributors/accordion-new-contributors";
import { AccordionProjectContributors } from "@/shared/modals/manage-applicants-modal/_components/applicants-table/_components/accordion-project-contributors/accordion-project-contributors";
import { AccordionRefusedContributors } from "@/shared/modals/manage-applicants-modal/_components/applicants-table/_components/accordion-refused-contributors/accordion-refused-contributors";
import { FilterColumns } from "@/shared/modals/manage-applicants-modal/_components/applicants-table/_components/filter-columns/filter-columns";
import { useFilterColumns } from "@/shared/modals/manage-applicants-modal/_components/applicants-table/_components/filter-columns/filter-columns.hooks";
import { ApplicantsTableProps } from "@/shared/modals/manage-applicants-modal/_components/applicants-table/applicants-table.types";

export type ApplicantsTableFilters = Omit<
  NonNullable<GetApplicationsPortParams["queryParams"]>,
  "pageSize" | "pageIndex"
>;

export function ApplicantsTable({ projectId }: ApplicantsTableProps) {
  const [search, setSearch] = useState<string>();
  const [debouncedSearch, setDebouncedSearch] = useState<string>();

  const queryParams: Partial<GetApplicationsQueryParams> = {
    projectId,
    u: {
      search: debouncedSearch,
    },
  };

  const { columns, selectedIds, setSelectedIds } = useFilterColumns();

  return (
    <ScrollView>
      <div className={"flex flex-col gap-lg overflow-hidden"}>
        <nav className={"flex gap-md"}>
          <TableSearch value={search} onChange={setSearch} onDebouncedChange={setDebouncedSearch} />
          <FilterColumns selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
        </nav>
        <AccordionProjectContributors projectId={projectId} queryParams={queryParams} columns={columns} />
        <AccordionNewContributors projectId={projectId} queryParams={queryParams} columns={columns} />
        <AccordionRefusedContributors projectId={projectId} queryParams={queryParams} columns={columns} />
      </div>
    </ScrollView>
  );
}
