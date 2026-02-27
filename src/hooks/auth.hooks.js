// External Modules
import { useRef } from "react";

// Local Modules
import { callApi, debounce } from "@util/api.js";

export const normalizeUsername = (value) => {
  return value.toLowerCase();
};

export const requestCanceler = () => {
  const abortControllerRef = useRef(null);

  function cancelRequest() {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
  }

  function createSignal() {
    cancelRequest();
    abortControllerRef.current = new AbortController();
    return abortControllerRef.current.signal;
  }

  return { cancelRequest, createSignal };
};

export const checkUsernameAvailability = debounce(
  async ({ username, signal, onResult }) => {
    const response = await callApi(
      "POST",
      "auth/check/username/availability",
      false,
      { username },
      { signal },
    );
    onResult(response);
  },
  400,
);
