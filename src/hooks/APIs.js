// Local Modules
import { callApi } from "@util/api.js";

export async function checkHealth() {
  try {
    return await callApi("GET", "i/health", false);
  } catch (error) {
    console.log("Health Check Error: ", error);
  }
}
