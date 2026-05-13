import { notFound, redirect } from "next/navigation";
import { newsletters, reviews } from "@/data/content";
import ReviewDetail from "@/components/news/ReviewDetail";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const nlParams = newsletters.map((nl) => ({ slug: nl.slug }));
  const reviewParams = reviews.map((r) => ({ slug: r.slug }));
  return [...nlParams, ...reviewParams];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = reviews.find((r) => r.slug === slug);
  const newsletter = newsletters.find((nl) => nl.slug === slug);

  if (review) {
    return {
      title: review.name,
      description: review.description,
    };
  }

  if (newsletter) {
    return {
      title: newsletter.title,
      description:
        newsletter.description ||
        `${newsletter.title} from Austin Food Heads`,
    };
  }

  return {
    title: "Not Found",
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;

  // Check if it's a newsletter with external URL
  const newsletter = newsletters.find((nl) => nl.slug === slug);
  if (newsletter?.externalUrl) {
    redirect(newsletter.externalUrl);
  }

  // Check if it's a review
  const review = reviews.find((r) => r.slug === slug);
  if (review) {
    return <ReviewDetail review={review} />;
  }

  // Newsletter without external URL - show simple page
  if (newsletter) {
    return (
      <div className="pt-28 pb-20 bg-cream min-h-screen">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">
            {newsletter.title}
          </h1>
          {newsletter.description && (
            <p className="text-dark/60 text-lg">{newsletter.description}</p>
          )}
        </div>
      </div>
    );
  }

  notFound();
}
