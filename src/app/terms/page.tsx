import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Austin Food Heads standard terms and conditions for services, partnerships, and website usage.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-10">
          Standard Terms & Conditions
        </h1>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg prose prose-lg max-w-none">
          <h2>SERVICE AGREEMENT — FOOD HEADS</h2>

          <h3>1. Description of Services</h3>
          <p>
            Beginning on the invoice paid date, Food Heads will provide to Customer the services agreed to on the invoice.
          </p>
          <p>
            Food Heads has sole discretion over the content posted on its page; however, Food Heads will ask Client to review and give feedback prior to posting.
          </p>
          <p>
            Client has 12 hours to provide feedback. If Client fails to do so, Food Heads may post without further confirmation.
          </p>

          <h3>2. Payment</h3>
          <ul>
            <li>The Customer agrees to pay Food Heads for the Services up-front.</li>
            <li>Food Heads is responsible for delivering the agreed-upon services listed in the invoice.</li>
            <li>Client will provide, at its sole cost and expense, all products being promoted by Food Heads.</li>
          </ul>

          <h3>3. Revision Policy</h3>
          <p>
            Food Heads will provide one round of revision for content to be posted across its platform.
          </p>
          <p>
            Client has 12 hours to give feedback. If no feedback is received, Food Heads may post without approval.
          </p>

          <h3>4. Term; Effect of Termination</h3>
          <p>
            This Agreement remains in effect until both the agreed service and payment are complete (the &ldquo;Initial Term&rdquo;).
          </p>

          <h3>5. Warranties</h3>
          <p>
            Food Heads shall provide the Services in a timely manner and confer with Client, upon reasonable and timely request, regarding promotional content.
          </p>
          <p>
            <strong>Disclaimer:</strong> FOOD HEADS MAKES NO REPRESENTATIONS OR WARRANTIES REGARDING THE RESULTS EXPECTED FROM THE SERVICES OR DELIVERABLES.
          </p>

          <h3>6. Work Product Ownership</h3>
          <p>
            Any copyrightable works, ideas, inventions, or other intellectual property (&ldquo;Work Product&rdquo;) developed by Food Heads in connection with the Services are the sole and exclusive property of Food Heads.
          </p>
          <p>
            Client irrevocably assigns any interest it may have in such Work Product to Food Heads.
          </p>

          <h3>7. Indemnification</h3>
          <p>
            Client shall indemnify, defend and hold harmless Food Heads and its affiliates (including employees, consultants, and advisors) from any and all losses, damages, liabilities, or costs (including attorneys&apos; fees) arising from:
          </p>
          <ul>
            <li>Information or content posted on any of Client&apos;s platforms.</li>
            <li>Any breach or unauthorized disclosure of personal information by Client.</li>
          </ul>

          <h3>8. Amendment</h3>
          <p>This Agreement may be modified only in writing and signed by both parties.</p>

          <h3>9. Confidentiality</h3>
          <p>
            Neither Party nor its representatives shall disclose any Confidential Information of the other Party. Each Party shall protect Confidential Information with at least the same degree of care it uses for its own (not less than reasonable care). This obligation survives termination.
          </p>

          <h3>10. Applicable Law</h3>
          <p>This Agreement is governed by the laws of the State of Texas.</p>

          <h3>11. Entire Contract</h3>
          <p>
            This Agreement constitutes the entire agreement between the Parties regarding its subject matter and supersedes all prior agreements, written or oral.
          </p>

          <hr />

          <h2>WEBSITE & SERVICE TERMS</h2>
          <p>
            <strong>THESE TERMS OF USE CONSTITUTE A BINDING LEGAL AGREEMENT. PLEASE READ CAREFULLY.</strong>
          </p>

          <h3>Modifications to Services and Terms</h3>
          <ul>
            <li>Services may change or improve without prior notice.</li>
            <li>Terms of Use may be updated; revised terms become effective immediately upon posting.</li>
            <li>Continued use of the Website constitutes acceptance of the revised Terms.</li>
            <li>If you do not agree, cease all use immediately.</li>
          </ul>

          <h3>Terms of Service</h3>
          <ol>
            <li><strong>Acceptance of Terms:</strong> Purchasing a Food Heads service signifies agreement to these Terms and the general Terms of Service.</li>
            <li><strong>Service Plans & Payment:</strong> Subscriptions are billed in advance; payments are non-refundable.</li>
          </ol>

          <h3>User Responsibilities</h3>
          <ul>
            <li>You may revoke social access at any time by changing your social passwords.</li>
          </ul>

          <h3>Limitations of Liability</h3>
          <p>Food Heads is not responsible for:</p>
          <ul>
            <li>Issues arising from third-party services (e.g., data discrepancies, outages).</li>
            <li>Unauthorized access to your platforms due to factors outside Food Heads&apos; control (e.g., misuse of credentials, third-party breaches).</li>
          </ul>

          <h3>Other Provisions</h3>
          <ul>
            <li>These Terms (and those on the Food Heads website) form the entire agreement on this subject and supersede prior agreements.</li>
            <li>Food Heads may assign these Terms; you may not assign your rights without written permission.</li>
            <li>If any provision is invalid, the remainder stays in force.</li>
            <li>Section headings are for convenience only and do not affect interpretation.</li>
          </ul>

          <h3>Contact</h3>
          <p>
            For further information or to report issues, email{" "}
            <a href="mailto:austinfoodheads@gmail.com" className="text-orange hover:underline">
              austinfoodheads@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
