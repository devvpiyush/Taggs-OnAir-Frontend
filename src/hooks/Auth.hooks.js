// External Modules
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Local Modules
import API from "@util/api.util";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const call = async ({ usernameOrEmail, password }) => {
    const res = await API("POST", "auth/login", true, {
      usernameOrEmail,
      password,
    });
    return res?.data;
  };

  return useMutation({
    mutationFn: call,
    onSuccess: async () => {
      await queryClient.invalidateQueries(["me"]);
      navigate("/");
    },
  });
}

export function useMe() {
  const call = async () => {
    const res = await API("GET", "auth/me");
    return res?.meta?.data || null;
  };

  return useQuery({
    queryKey: ["me"], // Cache Key
    queryFn: call,
    staleTime: 1000 * 60 * 5, // Fetch again after 5 Minutes.
    retry: false, // Restrict from retrying if Unauthorized
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}
