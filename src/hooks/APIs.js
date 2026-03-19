// External Modules
import { useQuery } from "@tanstack/react-query";

// Local Modules
import api from "@util/api.util.js";

export function useHealth() {
  const fetch = async () => {
    try {
      const res = await api("GET", "i/health", false);
      return res;
    } catch (err) {
      throw err;
    }
  };

  return useQuery({
    queryKey: ["health"],
    queryFn: fetch,
    staleTime: 0,
    cacheTime: 0,
    retry: true,
    retryDelay: 2000, // Every 2 Seconds.
    refetchOnWindowFocus: false,
  });
}
