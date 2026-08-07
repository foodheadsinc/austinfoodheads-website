"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { reviews } from "@/data/content";

export default function NewsContent() {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 4);

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-dark/60 text-lg"
          >
            Epic bites, endless delight. Our favorite spots around Austin.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {displayedReviews.map((review, i) => (
              <motion.div
                key={review.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/news/${review.slug}`}
                  className="group block bg-cream rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {review.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold group-hover:text-orange transition-colors">
                      {review.name}
                    </h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-dark/50">
                      <span>
                        Price: <strong>{review.price}</strong>
                      </span>
                      <span>
                        Rating: <strong>{review.rating}</strong>
                      </span>
                    </div>
                    <p className="text-dark/60 text-sm mt-3 line-clamp-2">
                      {review.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {!showAllReviews && reviews.length > 4 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllReviews(true)}
                className="bg-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-dark transition-all hover:scale-105"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-display text-orange text-sm mb-4">say hey</p>
          <a
            href="https://www.instagram.com/austinfoodheads/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-dark transition-all hover:scale-105 shadow-lg shadow-orange/20"
          >
            Follow Us On Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
