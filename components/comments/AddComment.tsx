import { useRef, useState } from "react";

const AddComment = () => {
  const [comment, setComment] = useState({ comment: "" });

  const handleChange = (event: any) => {
    setComment({ comment: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/api/comment";
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Comment"
          value={comment.comment}
          onChange={handleChange}
        />
        <button type="submit">Add comment</button>
      </form>
    </div>
  );
};
export default AddComment;
