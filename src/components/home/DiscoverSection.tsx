"use client";

import Image from "next/image";
import { FadeInUp, ScaleIn } from "@/components/AnimatedSection";

export default function DiscoverSection() {
  return (
    <section id="food" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <FadeInUp>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Discover New Food Spots Year Round
              </h2>
              <p className="text-dark/60 text-lg leading-relaxed">
                Austin Food Heads was created to make your life easier by
                sharing the best food spots on a weekly basis so you always have
                somewhere new to look forward to trying.
              </p>
            </div>
          </FadeInUp>
          <ScaleIn delay={0.2}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/food-photo-1.jpg"
                alt="Austin food discovery"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </ScaleIn>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScaleIn className="md:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/food-photo-2.jpg"
                alt="Food recommendations in Austin"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </ScaleIn>
          <FadeInUp className="md:order-1">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Impress your friends with great Reccs
              </h2>
              <p className="text-dark/60 text-lg leading-relaxed">
                There&apos;s no better feeling than being the one with all the
                best recommendations whether that goes for movies, music, or
                food. Let us be your secret weapon when friends come to town and
                ask where they should go!
              </p>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
