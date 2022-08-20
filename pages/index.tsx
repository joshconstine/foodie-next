import type { NextPage } from "next";

import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { supabase } from "../utils/supabaseClient";

export default function Home(props: any) {
  console.log(props);

  const { comments } = props;
  
  if (comments === null) {
    return <></>;
  } else {
    return (
      <div>
        {comments.map((comment: any) => {
          return <div key={comment.id}>{comment.body}</div>;
        })}
      </div>
    );
  }
}

export async function getStaticProps() {
  let { data, error } = await supabase.from("comment").select("*");

  return {
    props: { comments: data },
  };
}
