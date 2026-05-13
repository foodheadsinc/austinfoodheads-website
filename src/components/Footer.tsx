import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  menu: [
    { href: "/", label: "About" },
    { href: "/", label: "Food" },
    { href: "/news#blog", label: "News" },
    { href: "/services", label: "Advertise" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
  socials: [
    {
      href: "https://www.instagram.com/austinfoodheads/?hl=en",
      label: "Instagram",
    },
    { href: "https://www.tiktok.com/@austinfoodheads", label: "TikTok" },
    { href: "https://www.facebook.com/austinfoodheads", label: "Facebook" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Top CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-lg font-bold mb-3">Advertise</h3>
            <a
              href="https://calendar.app.google/9HmcesYXXVLBMnq47"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange hover:text-orange/80 transition-colors font-medium"
            >
              Book A Call →
            </a>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold mb-3">Email us</h3>
            <a
              href="mailto:austinfoodheads@gmail.com"
              className="text-orange hover:text-orange/80 transition-colors font-medium"
            >
              austinfoodheads@gmail.com
            </a>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold mb-3">
              VISITing ATX?
            </h3>
            <a
              href="https://www.instagram.com/austinfoodheads/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange hover:text-orange/80 transition-colors font-medium"
            >
              Message Us For Recommendations →
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Austin Food Heads"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="font-serif font-bold text-xl">
                Austin Food Heads
              </span>
            </Link>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
              Menu
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.menu.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
              Socials
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.socials.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-orange transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">
              Subscribe
            </h4>
            <p className="text-white/60 text-sm mb-4">
              Join our newsletter to stay up to date on the latest in food.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="newsletter-input flex-1 text-sm"
              />
              <button
                type="submit"
                className="bg-orange text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-dark transition-all"
              >
                Join
              </button>
            </form>
            <p className="text-white/40 text-xs mt-3">
              By subscribing you agree to our{" "}
              <Link href="/privacy" className="underline hover:text-orange">
                Privacy Policy
              </Link>{" "}
              and provide consent to receive updates from our company.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Austin Food Heads. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
