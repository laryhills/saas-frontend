import { ProgramStoragePort } from "@/core/domain/program/outputs/program-storage-port";
import { mockHttpStorageResponse } from "@/core/infrastructure/marketplace-api-client-adapter/http/mock-http-client/mock-http-storage-response";

export class ProgramClientAdapterMock implements ProgramStoragePort {
  constructor() {}

  routes = {};

  getProgramById = mockHttpStorageResponse<ProgramStoragePort["getProgramById"]>;

  getPrograms = mockHttpStorageResponse<ProgramStoragePort["getPrograms"]>;

  getProgramTransactions = mockHttpStorageResponse<ProgramStoragePort["getProgramTransactions"]>;

  getProgramTransactionsStats = mockHttpStorageResponse<ProgramStoragePort["getProgramTransactionsStats"]>;

  getProgramProjects = mockHttpStorageResponse<ProgramStoragePort["getProgramProjects"]>;

  grantBudgetToProject = mockHttpStorageResponse<ProgramStoragePort["grantBudgetToProject"]>;

  getProgramTransactionsCsv = mockHttpStorageResponse<ProgramStoragePort["getProgramTransactionsCsv"]>;
}
