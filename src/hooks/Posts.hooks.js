// Local Modules
import API from "@util/api.util";

// External Modules
import { useQuery } from "@tanstack/react-query";

export const useFeed = () => {
  const call = async () => {
    const res = await API("GET", `post/feed`);
    return res?.meta?.data || [];
  };

  return useQuery({
    queryKey: ["feed"],
    queryFn: call,
    refetchOnWindowFocus: false,
  });
};
