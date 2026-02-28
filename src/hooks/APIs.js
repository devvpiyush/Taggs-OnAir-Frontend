// Local Modules
import { fireApi } from "@util/api.util.js";

export async function checkHealth() {
  try {
    return await fireApi("GET", "i/health", false);
  } catch (error) {
    console.log("Health Check Error: ", error);
  }
}
