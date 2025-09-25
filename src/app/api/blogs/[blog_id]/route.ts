import { NextResponse } from "next/server";
import { blogs } from "../route";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ blog_id: string }> }
) {
  const { blog_id } =await params;

  const matchedBlog = blogs.find(
    (b) => b.id === Number(blog_id) // এখানে string to number করতে হবে
  );

//   console.log("matched blog----", matchedBlog);

  if (!matchedBlog) {
    return Response.json({ message: "Blog not found" }, { status: 404 });
  }

  //   return Response.json(matchedBlog, { status: 200 });
  return NextResponse.json(matchedBlog, { status: 200 });
}
