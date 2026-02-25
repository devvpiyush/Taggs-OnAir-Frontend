// External Modules
import axios from "axios";

export async function callApi(
  REQUEST_METHOD,
  END_POINT,
  WITH_CREDENTIALS = true,
  DATA = {},
) {
  const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/${END_POINT}`;
  try {
    const call = await axios({
      method: REQUEST_METHOD,
      url: BASE_URL,
      withCredentials: WITH_CREDENTIALS,
      data: DATA,
    });
    return call.data;
  } catch (error) {
    throw error;
  }
}

export function debounce(fn, delay = 300) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
