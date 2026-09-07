"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { reviews } from "@/data/content";

const INITIAL_COUNT = 8;

function FilterGroup({
  label,
  options,
  active,
  onToggle,
}: {
  label: string;
  options: string[];
  active: Set<string>;
  onToggle: (value: string) => void;
}) {
  return (
    <div>
      <span className="block text-xs font-semibold uppercase tracking-wider text-dark/40 mb-2">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = active.has(option);
          return (
            <button
              key={option}
              onClick={() => onToggle(option)}
              aria-pressed={isActive}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                isActive
                  ? "bg-orange text-white border-orange"
                  : "bg-white text-dark/70 border-dark/10 hover:border-orange hover:text-orange"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function NewsContent() {
  const [showAll, setShowAll] = useState(false);
  const [cuisines, setCuisines] = useState<Set<string>>(new Set());
  const [mealTypes, setMealTypes] = useState<Set<string>>(new Set());
  const [prices, setPrices] = useState<Set<string>>(new Set());

  const cuisineOptions = useMemo(
    () => Array.from(new Set(reviews.map((r) => r.category))).sort(),
    []
  );
  const mealTypeOptions = useMemo(
    () => Array.from(new Set(reviews.flatMap((r) => r.mealType))).sort(),
    []
  );
  const priceOptions = ["$", "$$", "$$$", "$$$$"].filter((p) =>
    reviews.some((r) => r.price === p)
  );

  function toggle(set: Set<string>, setter: (s: Set<string>) => void, value: string) {
    const next = new Set(set);
    if (next.has(value)) {
      next.delete(value);
    } else {
      next.add(value);
    }
    setter(next);
  }

  const hasActiveFilters =
    cuisines.size > 0 || mealTypes.size > 0 || prices.size > 0;

  const filteredReviews = useMemo(() => {
    return reviews.filter((r) => {
      if (cuisines.size > 0 && !cuisines.has(r.category)) return false;
      if (mealTypes.size > 0 && !r.mealType.some((m) => mealTypes.has(m)))
        return false;
      if (prices.size > 0 && !prices.has(r.price)) return false;
      return true;
    });
  }, [cuisines, mealTypes, prices]);

  const displayedReviews =
    hasActiveFilters || showAll
      ? filteredReviews
      : filteredReviews.slice(0, INITIAL_COUNT);

  function clearFilters() {
    setCuisines(new Set());
    setMealTypes(new Set());
    setPrices(new Set());
  }

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-3xl md:text-5xl font-bold mb-4"
          >
            Austin Food Recommendations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-dark/60 text-lg max-w-2xl mx-auto"
          >
            Epic bites, endless delight. These are the Austin spots we
            actually recommend to friends, sourced from the same eating and
            filming we do every week for our 250,000+ followers. Filter by
            cuisine, meal, or price to find your next spot.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-dark/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-6">
            <FilterGroup
              label="Cuisine"
              options={cuisineOptions}
              active={cuisines}
              onToggle={(v) => toggle(cuisines, setCuisines, v)}
            />
            <FilterGroup
              label="Meal"
              options={mealTypeOptions}
              active={mealTypes}
              onToggle={(v) => toggle(mealTypes, setMealTypes, v)}
            />
            <FilterGroup
              label="Price"
              options={priceOptions}
              active={prices}
              onToggle={(v) => toggle(prices, setPrices, v)}
            />
          </div>
          {hasActiveFilters && (
            <div className="mt-4 flex items-center gap-4">
              <span className="text-sm text-dark/50">
                {filteredReviews.length}{" "}
                {filteredReviews.length === 1 ? "spot" : "spots"} match
              </span>
              <button
                onClick={clearFilters}
                className="text-sm font-semibold text-orange hover:text-orange-dark transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {displayedReviews.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-dark/60 text-lg">
                No spots match those filters yet.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 text-orange font-semibold hover:text-orange-dark transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {displayedReviews.map((review, i) => {
                const cardInner = (
                  <>
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
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
                  </>
                );

                const cardClass =
                  "group block bg-cream rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1";

                return (
                  <motion.div
                    key={review.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (i % INITIAL_COUNT) * 0.05 }}
                  >
                    {review.body ? (
                      <Link href={`/news/${review.slug}`} className={cardClass}>
                        {cardInner}
                      </Link>
                    ) : review.websiteUrl ? (
                      <a
                        href={review.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cardClass}
                      >
                        {cardInner}
                      </a>
                    ) : (
                      <div className="bg-cream rounded-2xl overflow-hidden">
                        {cardInner}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          )}

          {!hasActiveFilters && !showAll && filteredReviews.length > INITIAL_COUNT && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(true)}
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
