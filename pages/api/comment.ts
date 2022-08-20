import { supabase } from "../../utils/supabaseClient";

export default async function comment(req: any, res: any) {
  if (req.method === "GET") {
    let { data, error } = await supabase.from("comment").select("*");
    res.status(400).json(data);
  } else {
    // Handle any other HTTP method
    console.log("no api for this method");
  }
}
