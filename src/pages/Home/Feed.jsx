// External Modules
import { useEffect } from "react";

// Local Modules
import Post from "./Post";
import { useFeed } from "@hook/Posts.hooks";

function Feed() {
  // Effects
  useEffect(() => {
    useFeed();
  }, []);
  return <Post />;
}

export default Feed;
