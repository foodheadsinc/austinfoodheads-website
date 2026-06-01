"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeInUp } from "@/components/AnimatedSection";

export default function NewsletterSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
              Subscribe to our newsletter for monthly bites!
            </h2>
            <p className="text-dark/60 text-lg max-w-xl mx-auto">
              Get special deals & make your next restaurant pick EASY
            </p>
          </div>
        </FadeInUp>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInUp delay={0.2}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto">
              <Image
                src="/images/newsletter-scroll.png"
                alt="Austin Food Heads Newsletter"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-white text-sm">Newsletters</p>
                <p className="text-white/80 text-sm mt-2">
                  Epic bites, endless delight. Explore our blog & reviews!
                </p>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <p className="font-display text-orange text-sm mb-2">
                  Mission
                </p>
                <h3 className="font-serif text-2xl font-bold mb-3">
                  Here to celebrate food excellence
                </h3>
                <p className="text-dark/60 leading-relaxed">
                  We love trying and promoting the best food spots in Austin. If
                  you&apos;re interested in partnership promotions or social
                  media management/consulting please grab some time with us!
                </p>
                <a
                  href="https://forms.clickup.com/9011221962/f/8chrnea-4191/N6GG09LFE1WOEVJWE7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 bg-orange text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-dark transition-all hover:scale-105"
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

              <Link
                href="/news"
                className="group bg-dark text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              >
                <p className="font-display text-orange text-sm mb-2">
                  Newsletters
                </p>
                <h3 className="font-serif text-xl font-bold mb-2">
                  View Full Newsletters
                </h3>
                <p className="text-white/60 text-sm">
                  Epic bites, endless delight. Explore our blog & reviews!
                </p>
                <div className="mt-4 text-orange font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                  Read More →
                </div>
              </Link>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
