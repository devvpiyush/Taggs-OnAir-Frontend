// External Modules
import axios from "axios";

async function API(
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
  } catch (err) {
    return err?.response?.data;
  }
}

export default API;
