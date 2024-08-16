const host = process?.env.HOST;

// If you are working on local then use http for production when running local build
const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";

export const fetchPosts = async () => {
  const posts = await fetch(`${protocal}://${host}/api/posts`, {
    next: { revalidate: 144 * 60 },
  }).then((res) => {
    return res.json();
  });

  return posts.posts ?? [];
};

export const fetchPostData = async (postId: string) => {
  const posts = await fetch(`${protocal}://${host}/api/posts/${postId}`).then(
    (res) => {
      return res.json();
    }
  );

  return posts.post ?? {};
};
