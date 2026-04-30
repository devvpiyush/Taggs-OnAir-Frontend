// Local Modules
import API from "@util/api.util";

// External Modules
import { useQuery } from "@tanstack/react-query";

export const useSearch = (input) => {
  input = input.trim().toLowerCase() || "";

  const call = async () => {
    const res = await API("GET", `func/search?query=${input}`);
    return res?.meta?.data || [];
  };

  return useQuery({
    queryKey: ["search", input],
    queryFn: call,
    enabled: false,
    refetchOnWindowFocus: false,
  });
};
