import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Austin Food Heads Privacy Policy - how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-10">
          Privacy Policy
        </h1>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg prose prose-lg max-w-none">
          <p>
            This Privacy Policy outlines how Austin Food Heads (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses, protects, and discloses the personal information of visitors (&ldquo;users,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) to www.austinfoodheads.com (the &ldquo;Website&rdquo;). Please read this Privacy Policy carefully to understand our practices regarding your personal information and how we handle it. By accessing or using the Website, you agree to the terms of this Privacy Policy.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect both personally identifiable information (&ldquo;PII&rdquo;) and non-personally identifiable information (&ldquo;Non-PII&rdquo;) from users through various interactions with the Website, including but not limited to:
          </p>
          <h3>a. Personal Information:</h3>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Contact information</li>
            <li>Any other information you voluntarily provide</li>
          </ul>
          <h3>b. Non-Personal Information:</h3>
          <ul>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>IP address</li>
            <li>Usage data (pages visited, actions taken on the Website)</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We may use your information for the following purposes:</p>
          <ul>
            <li>To personalize your experience on the Website</li>
            <li>To send you periodic emails with updates, news, and promotions (you can opt out at any time)</li>
            <li>To improve our Website and services based on your feedback</li>
            <li>To analyze and monitor usage patterns and trends</li>
            <li>To fulfill our legal obligations and protect our rights</li>
          </ul>

          <h2>3. Cookies and Tracking Technologies</h2>
          <p>
            We may use cookies and other tracking technologies to enhance user experience and collect usage data. Cookies are small files stored on your device that enable the Website to recognize your browser and capture certain information.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.
          </p>

          <h2>5. Third-Party Links</h2>
          <p>
            The Website may contain links to third-party websites, products, or services. These third-party sites have their own privacy policies, which we do not control. We are not responsible for the content or practices of these third-party websites.
          </p>

          <h2>6. Children&apos;s Privacy</h2>
          <p>
            Our Website is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            You have the right to access, modify, or delete the personal information we hold about you. You can also unsubscribe from our emails at any time by using the provided opt-out link. If you wish to exercise any of these rights, please contact us at austinfoodheads@gmail.com.
          </p>

          <h2>8. Changes to this Privacy Policy</h2>
          <p>
            We reserve the right to update or modify this Privacy Policy at any time without prior notice. Any changes will be effective immediately upon posting on the Website. We encourage you to review this Privacy Policy periodically for any updates.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at austinfoodheads@gmail.com.
          </p>

          <p>
            By using the Website, you agree to the terms of this Privacy Policy. If you do not agree with our practices outlined in this policy, please refrain from using the Website.
          </p>
        </div>
      </div>
    </div>
  );
}
