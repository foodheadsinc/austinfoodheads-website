"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { newsletters, reviews } from "@/data/content";

type Tab = "newsletters" | "reviews";

export default function NewsContent() {
  const [activeTab, setActiveTab] = useState<Tab>("newsletters");
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
            className="text-dark/60 text-lg mb-8"
          >
            Epic bites, endless delight. Explore our newsletters & reviews!
          </motion.p>

          {/* Tabs */}
          <div className="flex justify-center gap-4" id="blog">
            <button
              onClick={() => setActiveTab("newsletters")}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === "newsletters"
                  ? "bg-orange text-white shadow-lg shadow-orange/20"
                  : "bg-white text-dark hover:bg-orange/10"
              }`}
            >
              Newsletters
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              id="reviews"
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === "reviews"
                  ? "bg-orange text-white shadow-lg shadow-orange/20"
                  : "bg-white text-dark hover:bg-orange/10"
              }`}
            >
              Recommended
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {activeTab === "newsletters" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsletters.map((nl, i) => (
                <motion.div
                  key={nl.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    href={nl.externalUrl || `/news/${nl.slug}`}
                    target={nl.externalUrl ? "_blank" : undefined}
                    className="group block bg-cream rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className="relative aspect-[16/9] bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center">
                      <div className="text-center p-6">
                        <p className="font-display text-white/80 text-sm">
                          Newsletter
                        </p>
                        <h3 className="font-serif text-2xl font-bold text-white mt-2">
                          {nl.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-lg font-bold group-hover:text-orange transition-colors">
                        {nl.title}
                      </h3>
                      {nl.description && (
                        <p className="text-dark/60 text-sm mt-2 line-clamp-2">
                          {nl.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <>
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
            </>
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
