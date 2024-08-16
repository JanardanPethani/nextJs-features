export async function GET(request: Request) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return Response.json({ posts: data });
}
