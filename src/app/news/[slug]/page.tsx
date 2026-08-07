import { notFound } from "next/navigation";
import { reviews } from "@/data/content";
import ReviewDetail from "@/components/news/ReviewDetail";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return reviews.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = reviews.find((r) => r.slug === slug);

  if (review) {
    return {
      title: review.name,
      description: review.description,
    };
  }

  return {
    title: "Not Found",
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const review = reviews.find((r) => r.slug === slug);
  if (review) {
    return <ReviewDetail review={review} />;
  }

  notFound();
}
