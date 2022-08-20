export default function comment(req: any, res: any) {
  if (req.method === "GET") {
    res.status(200).json({ name: "John Doe" });
    // Process a POST request
  } else {
    // Handle any other HTTP method
    console.log("no api for this method");
  }
}
