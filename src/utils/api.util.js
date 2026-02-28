// External Modules
import axios from "axios";

export async function fireApi(
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
    if (error.response?.data) {
      return error.response.data;
    }

    // 🔴 Network / CORS / Timeout
    throw {
      signal: "RED",
      code: "NETWORK_ERROR",
      message: "Unable to connect to server",
    };
  }
}
