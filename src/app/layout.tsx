import type { Metadata } from "next";
import { DM_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Austin Food Heads",
    template: "%s | Austin Food Heads",
  },
  description:
    "The best things to do in Austin + best places to eat, drink & travel to.",
  openGraph: {
    title: "Austin Food Heads",
    description:
      "The best things to do in Austin + best places to eat, drink & travel to.",
    url: "https://www.austinfoodheads.com",
    siteName: "Austin Food Heads",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Food Heads",
    description:
      "The best things to do in Austin + best places to eat, drink & travel to.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${libreBaskerville.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fragment+Mono:ital@0;1&family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FFEED6] text-[#191439] font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
