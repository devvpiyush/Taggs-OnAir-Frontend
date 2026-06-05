// Local Modules
import API from "@util/api.util";

// External Modules
import { useQuery } from "@tanstack/react-query";

export const useSearch = (input) => {
  input = input.trim().toLowerCase() || "";
  try {
    const call = async () => {
      const res = await API("GET", `search/search-all?q=${input}`);

      if (res?.isFetched && res?.code === "SEARCHES_FETCHED") {
        return res?.data;
      }

      return res?.data;
    };

    return useQuery({
      queryKey: ["search", input],
      queryFn: call,
      enabled: false,
      refetchOnWindowFocus: false,
    });
  } catch (err) {
    console.log(`Error Sending Search Queries -> ${err}`);
  }
};
