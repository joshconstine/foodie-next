import AddComment from "./AddComment";
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
        <AddComment />
      </>
    );
  }
};
export default CommentList;
