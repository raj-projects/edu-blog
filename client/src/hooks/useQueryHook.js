import { gql } from "@apollo/client";

export const useDevices = () => {
  const { data, error, loading } = useQuery(gql, {
    variables: {
      tenantId: tenantId()
    },
    onError: (err) => showError(err.message)
  });

  return {
    devices: processData(data),
    error,
    loading
  };
};