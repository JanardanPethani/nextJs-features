import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  if (!res.ok) return undefined;

  const data = await res.json();
  return Response.json({ post: data });
}
