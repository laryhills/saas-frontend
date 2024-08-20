import enTransactionPanel from "@/app/programs/[programId]/_features/transactions-sidepanel//_translations/transaction-sidepanel.en.json";
import enProgramsDetails from "@/app/programs/[programId]/_translations/programs-detail.en.json";

import enBudgetAvailable from "../[programId]/_features/budget-available-cards/budget-available.en.json";
import enFinancialColumnChart from "../[programId]/_features/financial-column-chart/financial-column-chart.en.json";
import enFinancialDetailSidePanel from "../[programId]/_features/financial-detail-sidepanel/financial-detail-sidepanel.en.json";
import enProjectDetail from "../[programId]/_features/project-sidepanel/project-sidepanel.en.json";
import enPrograms from "./programs.en.json";

export const enProgramsTranslation = {
  programs: {
    list: enPrograms,
    details: enProgramsDetails,
    transactionPanel: enTransactionPanel,
    financialColumnChart: enFinancialColumnChart,
    budgetAvailable: enBudgetAvailable,
    financialDetailSidePanel: enFinancialDetailSidePanel,
    projectDetail: enProjectDetail,
  },
};
