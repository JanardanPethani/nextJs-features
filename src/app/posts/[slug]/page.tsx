import { fetchPostData, fetchPosts } from "@/services/posts";
import { Post } from "../types";

export async function generateStaticParams() {
  const posts = await fetchPosts();

  return posts.map((post: Post) => ({
    slug: `${post.id}-${post.title}`,
  }));
}

export default async function page({ params }: { params: { slug: string } }) {
  const postData = await fetchPostData(params.slug.split("-")[0]);
  return (
    <div>
      <h2 className="px-5 py-10 bg-slate-700 text-white">{postData.title}</h2>
      <p>{postData.body}</p>
    </div>
  );
}
