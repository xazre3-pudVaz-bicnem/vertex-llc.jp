import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPost from "@/components/blog/BlogPost";
import {
  fetchPostBySlug,
  fetchAllPostSlugs,
  getPostImage,
  stripHtml,
} from "@/lib/wordpress";

/* ISR: revalidate every 60 seconds */
export const revalidate = 60;

/* Pre-build all known slugs at build time; unknown slugs render on demand */
export async function generateStaticParams() {
  const slugs = await fetchAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return { title: "記事が見つかりません" };
  }

  const title   = stripHtml(post.title.rendered);
  const excerpt = stripHtml(post.excerpt.rendered).substring(0, 160);
  const image   = getPostImage(post);

  return {
    title,
    description: excerpt,
    openGraph: {
      title,
      description: excerpt,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      ...(image && { images: [{ url: image, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: excerpt,
      ...(image && { images: [image] }),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <BlogPost post={post} />
    </main>
  );
}
