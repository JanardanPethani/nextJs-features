import Link from "next/link";

import { Post } from "./types";
import { fetchPosts } from "@/services/posts";

export default async function page() {
  const posts = await fetchPosts();

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-3">
      {posts.map((post: Post) => (
        <li
          key={post.id}
          className="border border-slate-700 dark:border-slate-600 rounded-md hover:outline hover:outline-2 hover:outline-offset-1 "
        >
          <Link
            href={`/posts/${post.id}-${post.title.replaceAll(" ", "-")}`}
            className="overflow-hidden"
          >
            <p
              className="overflow-hidden box-border bg-slate-700"
              title={post.title}
            >
              <span className="m-2 text-white line-clamp-1 capitalize font-semibold overflow-hidden box-border">
                {post.title}
              </span>
            </p>
            <p className="m-2 line-clamp-3 box-border">{post.body}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
