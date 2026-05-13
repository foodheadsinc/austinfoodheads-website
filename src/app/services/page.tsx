import type { Metadata } from "next";
import ServicesContent from "@/components/services/ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Social media management, content creation, and brand advertising services from Austin Food Heads. 12+ years of combined experience and 250K+ community.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
