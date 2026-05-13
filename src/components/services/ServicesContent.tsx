"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeInUp, ScaleIn } from "@/components/AnimatedSection";

const socialMediaFeatures = [
  "Content Strategy and Planning",
  "Professional Content Creation",
  "Community Engagement",
  "Community Building",
  "Analytics and Reporting",
  "Influencer Management / Coordination",
];

export default function ServicesContent() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-orange text-sm mb-4"
          >
            Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl font-bold mb-6"
          >
            What We Do
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-dark/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            We have 12+ years of combined experience in the social media space.
            We have built a loyal and engaged community of 250k+ people. Let us
            help you build your digital community and reach your target audience
            like we did for ourselves.
          </motion.p>
        </div>
      </section>

      {/* Social Media Management */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInUp>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  Social Media Management
                </h2>
                <p className="text-dark/60 text-lg leading-relaxed mb-8">
                  Grow your brand, engage your audience and turn followers into
                  loyal customers. We offer full-service social media management
                  tailored to your brand voice and business goals. From strategic
                  content planning to daily engagement, our team ensures your
                  presence stays consistent, authentic and impactful across all
                  the major platforms.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {socialMediaFeatures.map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-center gap-3 bg-cream rounded-xl p-4"
                    >
                      <div className="w-2 h-2 rounded-full bg-orange flex-shrink-0" />
                      <span className="font-medium text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeInUp>

            <ScaleIn delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/services-social.webp"
                  alt="Social media management services"
                  fill
                  className="object-cover"
                />
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Content Creation */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScaleIn className="lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/services-content.webp"
                  alt="Content creation for restaurants"
                  fill
                  className="object-cover"
                />
              </div>
            </ScaleIn>

            <FadeInUp className="lg:order-2">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  Content Creation
                </h2>
                <p className="text-dark/60 text-lg leading-relaxed mb-8">
                  We specialize in capturing and curating high-quality photo and
                  video content that captures your brand&apos;s story and
                  connects with your audience. From detail oriented food shots to
                  behind the scenes moments, we craft visuals that are designed
                  to stop your customers from scrolling.
                </p>

                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <h3 className="font-serif text-lg font-bold mb-2">
                      Collaborative Storytelling
                    </h3>
                    <p className="text-dark/60">
                      We will work closely with you to ensure your passions are
                      captured accurately.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-md">
                    <h3 className="font-serif text-lg font-bold mb-2">
                      Full Creative Ownership
                    </h3>
                    <p className="text-dark/60">
                      You&apos;ll never have to worry about copyright, because
                      our clients own the rights to the work that we create for
                      them.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Brand Advertising */}
      <section className="py-24 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInUp>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  Brand Advertising
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  We combine authentic content with data-driven advertising to
                  build your brand&apos;s online presence, grow your audience and
                  drive conversation through our platform of 250K+ followers.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange mt-2 flex-shrink-0" />
                    <p className="text-white/60">
                      Creating campaigns focused on driving reservations, online
                      ordering and third-party app orders
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange mt-2 flex-shrink-0" />
                    <p className="text-white/60">
                      Leverage Austin Food Heads existing community
                    </p>
                  </div>
                </div>

                <a
                  href="https://calendar.app.google/9HmcesYXXVLBMnq47"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-dark transition-all hover:scale-105 shadow-lg shadow-orange/30"
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

            <ScaleIn delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/services-brand.webp"
                  alt="Brand advertising with Austin Food Heads"
                  fill
                  className="object-cover"
                />
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>
    </div>
  );
}
