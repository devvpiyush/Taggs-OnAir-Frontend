// Local Modules
import UserActions from "@/store/user.slice.js";
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
      emailOrUsername,
      password,
    });

    if (res?.isSuccess) {
      UserActions.SET_USER(res);
    }
  } catch (err) {
    console.log(err);
  }
}
