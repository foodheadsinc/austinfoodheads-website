import { notFound } from "next/navigation";
import { reviews } from "@/data/content";
import ReviewDetail from "@/components/news/ReviewDetail";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Only restaurants with a real write-up (`body`) get their own detail page.
// Entries without one are list-only cards on /news until they're expanded,
// so we don't reintroduce the thin auto-generated pages problem.
export async function generateStaticParams() {
  return reviews.filter((r) => r.body).map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = reviews.find((r) => r.slug === slug && r.body);

  if (review) {
    return {
      title: review.name,
      description: review.description,
      alternates: {
        canonical: `/news/${review.slug}`,
      },
    };
  }

  return {
    title: "Not Found",
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const review = reviews.find((r) => r.slug === slug && r.body);
  if (review) {
    return <ReviewDetail review={review} />;
  }

  notFound();
}
