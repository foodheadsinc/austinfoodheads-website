"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Review } from "@/data/content";

export default function ReviewDetail({ review }: { review: Review }) {
  return (
    <div className="pt-28 pb-20 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-dark/50 hover:text-orange transition-colors mb-8"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to News
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] mb-10">
            <Image
              src={review.image}
              alt={review.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-6 left-6">
              <span className="bg-orange text-white text-sm font-semibold px-4 py-2 rounded-full">
                {review.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-6">
              {review.name}
            </h1>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="bg-cream rounded-xl px-6 py-4">
                <p className="text-sm text-dark/50 mb-1">Price</p>
                <p className="text-2xl font-bold text-orange">{review.price}</p>
              </div>
              <div className="bg-cream rounded-xl px-6 py-4">
                <p className="text-sm text-dark/50 mb-1">Rating</p>
                <p className="text-2xl font-bold text-orange">
                  {review.rating}
                </p>
              </div>
            </div>

            <p className="text-dark/70 text-lg leading-relaxed mb-8">
              {review.description}
            </p>

            {review.hours && (
              <div className="mb-4">
                <span className="font-semibold">Hours of Operation: </span>
                <span className="text-dark/60">{review.hours}</span>
              </div>
            )}

            {review.location && (
              <div className="mb-4">
                <span className="font-semibold">Location: </span>
                <span className="text-dark/60">{review.location}</span>
              </div>
            )}

            {review.websiteUrl && (
              <a
                href={review.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 bg-orange text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-dark transition-all hover:scale-105"
              >
                Visit Website
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
