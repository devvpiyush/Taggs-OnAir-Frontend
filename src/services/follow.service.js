// Local Modules
import API from "@util/api.util.js";

export const follow = async (followingId) => {
  const result = await API("POST", `follow/${followingId}`);
  return { status: result?.data?.status };
};
