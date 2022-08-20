const Comment = (props: any) => {
  const { comment } = props;

  const isMyComment = true;
  const handleClick = async () => {
    const url = "http://localhost:3000/api/comment";
    let response = await fetch(url, {
      method: "DELETE",
      headers: {
        id: `${comment.id}`,
      },
    });
  };
  return (
    <div style={{ padding: "10px", margin: "10px" }}>
      <div>authorUN</div>
      <div>{comment.body}</div>
      {isMyComment ? <button onClick={handleClick}>delete</button> : <></>}
    </div>
  );
};
export default Comment;
