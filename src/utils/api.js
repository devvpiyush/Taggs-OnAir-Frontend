// External Modules
import axios from "axios";

async function api(REQUEST_METHOD, END_POINT, WITH_CREDENTIALS = true, DATA) {
  const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/${END_POINT}`;
  try {
    if (REQUEST_METHOD === "get" || REQUEST_METHOD === "GET") {
      return await axios.get(BASE_URL, {
        withCredentials: WITH_CREDENTIALS,
      });
    } else if (REQUEST_METHOD === "post" || REQUEST_METHOD === "POST") {
      return await axios.post(REQUEST_METHOD, DATA, {
        withCredentials: WITH_CREDENTIALS,
      });
    } else {
      throw new Error("INVALID_REQUEST_METHOD");
    }
  } catch (error) {
    throw new Error(error);
  }
}

export default api;
