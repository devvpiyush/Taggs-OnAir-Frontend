// Local Modules
import api from "@util/api.util.js";
import { apiCache } from "@data/AppCache.js";
import { createLocalUser } from "@util/user.util";

export async function checkHealth() {
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

export async function useLogin(dispatch, emailOrUsername, password) {
  try {
    const res = await api("POST", "auth/login", true, {
      emailOrUsername,
      password,
    });
    if (res?.isSuccess && res?.data) {
      createLocalUser(dispatch, res?.data);
    }
  } catch (err) {
    console.log(err);
  }
}