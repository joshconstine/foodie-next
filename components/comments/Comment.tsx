const Comment = (props: any) => {
  const { comment } = props;
  return <div>{comment.body}</div>;
};
export default Comment;
