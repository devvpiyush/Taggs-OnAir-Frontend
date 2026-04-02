// Local Modules
import api from "@util/api.util";

// External Modules
import { useQuery } from "@tanstack/react-query";

export const useSearch = (input) => {
if (input === "") return;
  input = input.trim().toLowerCase() || "";

  const call = async () => {
    const res = await api("GET", `func/search?query=${input}`);
    return res?.meta?.results || [];
  };

  return useQuery({
    queryKey: ["search", input],
    queryFn: call,
    enabled: false,
    refetchOnWindowFocus: false,
  });
};
