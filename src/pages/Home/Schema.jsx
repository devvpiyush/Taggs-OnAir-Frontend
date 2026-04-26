// Local Modules
import Thread from "./Thread";
import { useLike } from "@hook/Posts.hooks";

function Schema({ post, user }) {
  if (post.type === "thread") {
    return <Thread key={post._id} post={post} user={post.postedBy} />;
  }
}

export default Schema;
