// Local Modules
import api from "@util/api.util";

export const searchAccount = async (input) => {
  if (!input || input === "") return null;

  const res = await api("GET", `func/search?query=${input}`);

  if (res.isSuccess && res.meta.results.length > 0) {
    return res.meta.results;
  }
};
