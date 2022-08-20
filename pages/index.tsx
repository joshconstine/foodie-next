import type { NextPage } from "next";

import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState(null);

  const fetchData = async () => {
    console.log("Fetching data");

    const response = await supabase.from("comment").select("*");
    console.log(response);
    // return response.data
  };

  return (
    <div>
      hello<button onClick={fetchData}>fetch data</button>
    </div>
  );
}
