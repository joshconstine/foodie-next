import CommentList from "@/components/comments/CommentList";
import { Comment } from "../types/comment";

const Home = (props: { comments: Comment[] }) => {
  const { comments } = props;
  return (
    <div>
      <CommentList comments={comments} />
    </div>
  );
};
export default Home;

export async function getStaticProps() {
  const url = "http://localhost:3000/api/comment";
  let response = await fetch(url);
  let data: Comment[] = await response.json();

  return {
    // props: { comments: response },
    props: { comments: data },
  };
}
