"use client";

import { FadeInUp } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const channels = [
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    title: "Instagram",
    description:
      "We have over 200,000 followers on instagram and reach a wide variety of local Austinites who are passionate about the world of food.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    title: "Newsletter",
    description:
      "Our newsletter is another fast-growing channel where we keep community members up to date on the latest food they should try around Austin.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    title: "Word of Mouth",
    description:
      "Whether you're a 5 star restaurant or a hole in the wall food truck; our audience has your demographic. Local food joints who book with us see an influx of both dedicated visits and repeat customers.",
  },
];

export default function ChannelsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              How We Reach Your Audience
            </h2>
          </div>
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-8">
          {channels.map((channel, i) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-cream rounded-3xl p-8 hover:bg-orange transition-all duration-500 cursor-pointer"
            >
              <div className="text-orange group-hover:text-white transition-colors mb-6">
                {channel.icon}
              </div>
              <h3 className="font-serif text-xl font-bold mb-4 group-hover:text-white transition-colors">
                {channel.title}
              </h3>
              <p className="text-dark/60 group-hover:text-white/80 transition-colors leading-relaxed">
                {channel.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
