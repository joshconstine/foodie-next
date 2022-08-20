import Comment from "./Comment";
const CommentList = (props: any) => {
  const { comments } = props;

  if (comments === null) {
    return <></>;
  } else {
    return (
      <>
        {" "}
        {comments.map((comment: any) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </>
    );
  }
};
export default CommentList;
