// Local Modules
import { fireApi } from "@util/api.util.js";
import { apiCache } from "@data/cache.js";

export async function checkHealth() {
  try {
    apiCache.health.loading = true;
    const res = await fireApi("GET", "i/health", false);
    apiCache.health.data = res;
    apiCache.health.loading = false;
  } catch (error) {
    console.log("Health Check Error: ", error);
    apiCache.health.error = error;
  }
}
