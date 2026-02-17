import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import BlogPostClient from "./_components/blog-post-client";

export const dynamic = "force-dynamic";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = params?.slug;
  
  const post = await prisma.blogPost.findFirst({
    where: {
      OR: [
        { slugFr: slug },
        { slugEn: slug },
      ],
      published: true,
    },
  });

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}
