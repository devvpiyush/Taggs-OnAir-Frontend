// Local Modules
import api from "@util/api.util.js";
import { apiCache } from "@data/AppCache.js";

export async function useHealth() {
  try {
    apiCache.checkHealth.loading = true;
    const res = await api("GET", "i/health", false);
    apiCache.checkHealth.data = res;
  } catch (err) {
    apiCache.checkHealth.error = err;
  } finally {
    apiCache.checkHealth.loading = false;
  }
}

export async function useLogin(emailOrUsername, password) {
  try {
    const res = await api("POST", "auth/login", true, {
      identifier: emailOrUsername,
      password,
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
