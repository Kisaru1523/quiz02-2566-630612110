import { comments } from "@/libs/comments";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  return (
    <div>
      your code here...
      <p className="fw-bold fs-4 text-center">Comment</p>
      {comments.map((comment, i) => (
        <Reply
          key={comment.id}
          userImagePath={comment.userImagePath}
          username={comment.id}
          commentText={comment.commentText}
          likeNum={comments.likeNum}
          number={i + 1}
        />
      ))}
      {/* map-loop render Reply component here */}
    </div>
  );
};
