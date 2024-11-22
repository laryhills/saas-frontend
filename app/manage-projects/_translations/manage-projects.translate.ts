import enContributorsBulkPanel from "@/app/manage-projects/[projectSlug]/_features/contributors-table/_features/contributors-bulk-sidepanel/contributors-bulk-sidepanel.en.json";
import enBudgetAvailable from "@/app/manage-projects/[projectSlug]/_features/financial/budget-available-cards/budget-available.en.json";
import enFinancialColumnChart from "@/app/manage-projects/[projectSlug]/_features/financial/financial-column-chart/financial-column-chart.en.json";
import enTransactionPanel from "@/app/manage-projects/[projectSlug]/_features/financial/transactions-sidepanel/_translations/transaction-sidepanel.en.json";

import enManageProjectsDetails from "../[projectSlug]/_translations/manage-project-detail.en.json";
import enManageProjects from "../_translations/manage-projects.en.json";

export const enManageProjectsTranslation = {
  manageProjects: {
    list: enManageProjects,
    detail: enManageProjectsDetails,
    budgetAvailable: enBudgetAvailable,
    financialColumnChart: enFinancialColumnChart,
    transactionPanel: enTransactionPanel,
    bulk: enContributorsBulkPanel,
  },
};
