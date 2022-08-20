import { supabase } from "../../utils/supabaseClient";

export default async function comment(req: any, res: any) {
  if (req.method === "GET") {
    let { data, error } = await supabase.from("comment").select("*");
    res.status(400).json(data);
  } else if (req.method === "DELETE") {
    const { id } = req.headers;
    try {
      const { data, error } = await supabase
        .from("comment")
        .delete()
        .match({ id: id });
      res.status(202).json(data);
    } catch (err) {
      console.log(err);
    }
  } else if (req.method === "POST") {
    const { comment } = req.body;
    try {
      const { data, error } = await supabase
        .from("comment")
        .insert([{ body: comment }]);
      res.status(201).json(data);
    } catch (err) {
      console.log(err);
    }
  } else {
    // Handle any other HTTP method
    console.log("no api for this method");
  }
}
