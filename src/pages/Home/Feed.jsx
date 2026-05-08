// Local Modules
import Thread from "@/schemas/Thread";
import { useFeed } from "@hook/Posts.hooks";

function Feed() {
  // Constants
  const Feed = useFeed();

  return (
    <div className="pb-17 md:pb-0 flex flex-col gap-4 scroll-auto">
      {!Feed.isFetching &&
        Feed.data.map(
          ({
            _id,
            type,
            caption,
            createdAt,
            likesCount,
            commentsCount,
            creator,
          }) => {
            if (type === "thread")
              return (
                <Thread
                  key={_id}
                  caption={caption}
                  createdAt={createdAt}
                  likesCount={likesCount}
                  commentsCount={commentsCount}
                  creatorUsername={creator?.creatorUsername}
                  creatorName={creator?.creatorName}
                  creatorProfilePictureUrl={creator?.creatorProfilePictureUrl}
                  isCreatorVerified={creator?.isCreatorVerified}
                />
              );
          },
        )}
    </div>
  );
}

export default Feed;
