import type { NextPage } from "next";

import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { supabase } from "../utils/supabaseClient";
import CommentList from "@/components/comments/CommentList";

export default function Home(props: any) {
  const { comments } = props;
  return (
    <div>
      <CommentList comments={comments} />
    </div>
  );
}

export async function getStaticProps() {
  const url = "http://localhost:3000/api/comment";
  let response = await fetch(url);
  let data = await response.json();

  return {
    // props: { comments: response },
    props: { comments: data },
  };
}
