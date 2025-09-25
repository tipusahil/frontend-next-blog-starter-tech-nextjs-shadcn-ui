export const getBlogById = async (blog_id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/${blog_id}`,
    { cache: "force-cache" }
  );
  const {data : blog} = await res.json();
  return blog;
};
