// Local Modules
import api from "@util/api.util.js";
import { apiCache } from "@data/cache.js";

export async function useHealth() {
  try {
    apiCache.health.loading = true;
    const res = await api("GET", "i/health", false);
    apiCache.health.data = res;
    apiCache.health.loading = false;
  } catch (error) {
    console.log("Health Check Error: ", error);
    apiCache.health.error = error;
  }
}
