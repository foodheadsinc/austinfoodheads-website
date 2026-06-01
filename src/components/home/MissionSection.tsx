"use client";

import { FadeInUp } from "@/components/AnimatedSection";

export default function MissionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeInUp>
            <p className="font-display text-orange text-sm mb-4">
              Reach out!
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
              Here to celebrate food excellence
            </h2>
            <p className="text-dark/60 text-lg max-w-2xl mx-auto leading-relaxed">
              We love trying and promoting the best food spots in Austin. If
              you&apos;re interested in partnership promotions or social media
              management/consulting please grab some time with us!
            </p>
            <a
              href="https://forms.clickup.com/9011221962/f/8chrnea-4191/N6GG09LFE1WOEVJWE7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 bg-orange text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-dark transition-all hover:scale-105 shadow-lg shadow-orange/20"
            >
              Book A Call
            </a>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
