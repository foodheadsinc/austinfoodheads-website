"use client";

import Image from "next/image";
import { FadeInUp } from "@/components/AnimatedSection";

export default function CollaborateSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeInUp>
            <div>
              <p className="font-display text-orange text-sm mb-4">
                Collaborate with us!
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                We help restaurants of any size, but the food must be Great.
              </h2>
              <p className="text-dark/60 text-lg leading-relaxed mb-8">
                People don&apos;t want to eat at the same 3 places in their
                rotation. They come to us to find where to eat next.
              </p>
              <a
                href="https://calendar.app.google/9HmcesYXXVLBMnq47"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-dark transition-all hover:scale-105 shadow-lg shadow-orange/20"
              >
                Book A Call
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/food-photo-3.jpg"
                alt="Collaborate with Austin Food Heads"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
