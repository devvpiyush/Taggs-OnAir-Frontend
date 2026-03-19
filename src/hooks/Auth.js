// External Modules
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Local Modules
import api from "@util/api.util";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const post = async ({ username, password }) => {
    try {
      const res = await api("POST", "auth/un/login", true, {
        username,
        password,
      });
      return res?.data;
    } catch (err) {
      throw err;
    }
  };

  return useMutation({
    mutationFn: post,
    onSuccess: async () => {
      await queryClient.invalidateQueries(["me"]);
      navigate("/");
    },
  });
}

export function useMe() {
  const fetch = async () => {
    try {
      const res = await api("GET", "auth/me");
      return res?.data;
    } catch (err) {
      throw err;
    }
  };

  return useQuery({
    queryKey: ["me"], // Cache Key
    queryFn: fetch,
    staleTime: 1000 * 60 * 5, // Fetch again after 5 Minutes.
    retry: false, // Restrict from retrying if Unauthorized
    refetchOnWindowFocus: false,
  });
}
