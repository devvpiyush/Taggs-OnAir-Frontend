// Local Modules
import Thread from "./Thread";
import { useLike } from "@hook/Posts.hooks";

function Schema({ post, user }) {
  // Functions
  function doAction(type, id) {
    switch (type) {
      case "LIKE":
        useLike(id);
        break;
    }
  }

  if (post.type === "thread") {
    return (
      <Thread
        key={post._id}
        post={post}
        user={post.postedBy}
        action={doAction}
      />
    );
  }
}

export default Schema;
