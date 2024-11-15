import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  UseMutationFacadeParams,
  useMutationAdapter,
} from "@/core/application/react-query-adapter/helpers/use-mutation-adapter";
import { bootstrap } from "@/core/bootstrap";
import { DeleteApplicationBody } from "@/core/domain/application/application-contract.types";
import { ApplicationFacadePort } from "@/core/domain/application/input/application-facade-port";

export function useDeleteApplication({
  pathParams,
  options,
}: UseMutationFacadeParams<ApplicationFacadePort["deleteApplication"], undefined, never, DeleteApplicationBody>) {
  const applicationStoragePort = bootstrap.getApplicationStoragePortForClient();
  const contributionStoragePort = bootstrap.getContributionStoragePortForClient();
  const queryClient = useQueryClient();

  return useMutation(
    useMutationAdapter({
      ...applicationStoragePort.deleteApplication({ pathParams }),
      options: {
        ...options,
        onSuccess: async (data, variables, context) => {
          //  Invalidate application kanban list
          await queryClient.invalidateQueries({
            queryKey: contributionStoragePort.getContributions({}).tag,
            exact: false,
          });

          options?.onSuccess?.(data, variables, context);
        },
      },
    })
  );
}
