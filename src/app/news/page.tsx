import type { Metadata } from "next";
import NewsContent from "@/components/news/NewsContent";

export const metadata: Metadata = {
  title: "News",
  description:
    "Newsletters, restaurant reviews, and food recommendations from Austin Food Heads. Discover the best places to eat in Austin, Texas.",
};

export default function NewsPage() {
  return <NewsContent />;
}
