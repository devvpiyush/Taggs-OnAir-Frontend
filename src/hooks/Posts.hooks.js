// Local Modules
import api from "@util/api.util";

export const useFeed = () => {
  const call = async () => {
    const res = await api("GET", `post/feed`);
    if (res?.isSuccess) console.log(res?.meta?.posts);
  };

  call();
};
