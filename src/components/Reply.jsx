import Link from "next/link";

export const Reply = ({ userImagePath, username, replyText, likeNum }) => {
  return (
    <div className="d-flex justify-content-between gap-3">
      <Link href={"/app/" + userImagePath}>
        {replyText}. {username}. {likeNum}
      </Link>
      <span className="text-primary fw-bold">
        <likeNum /> {replyText}
      </span>
    </div>
  );
};
