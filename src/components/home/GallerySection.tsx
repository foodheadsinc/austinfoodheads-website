"use client";

import Image from "next/image";
import { FadeInUp } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/images/food-photo-1.jpg", alt: "Austin food photography" },
  { src: "/images/food-photo-2.jpg", alt: "Best restaurants in Austin" },
  { src: "/images/food-photo-3.jpg", alt: "Austin dining experience" },
  { src: "/images/hero-food.jpg", alt: "Austin food scene" },
];

export default function GallerySection() {
  return (
    <section className="py-24 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInUp>
          <div className="text-center mb-16">
            <p className="font-display text-orange text-sm mb-4">
              Check out our work
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
              Foodie Bliss Through the Eyes of Our Followers
            </h2>
          </div>
        </FadeInUp>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-orange/0 group-hover:bg-orange/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        <FadeInUp>
          <div className="text-center">
            <a
              href="https://www.instagram.com/austinfoodheads/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-dark px-8 py-4 rounded-full font-semibold hover:bg-orange hover:text-white transition-all hover:scale-105 shadow-xl"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow Us On Instagram
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
