// Local Modules
import Schema from "./Schema";
import { useFeed } from "@hook/Posts.hooks";

function Feed() {
  // Constants
  const Feed = useFeed();

  return (
    <div className="flex flex-col gap-4 scroll-auto">
      {!Feed.isFetching &&
        Feed.data.map((post) => {
          return <Schema key={post?._id} post={post} user={post?.postedBy} />;
        })}
    </div>
  );
}

export default Feed;
