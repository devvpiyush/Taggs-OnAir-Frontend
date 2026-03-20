// External Modules
import { useQuery } from "@tanstack/react-query";

// Local Modules
import api from "@util/api.util.js";

export function useHealth() {
  const fetch = async () => {
    if (!sessionStorage.getItem("loaded")) {
      try {
        const res = await api("GET", "i/health", false);
        return res;
      } catch (err) {
        throw err;
      } finally {
        sessionStorage.setItem("loaded", true);
      }
    }

    return "OK";
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
