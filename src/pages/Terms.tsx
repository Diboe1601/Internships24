import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: December 13, 2024
            </p>

            <div className="prose prose-lg max-w-none space-y-6 text-foreground">
              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  You step into Internships24, you’re also stepping into these rules - no separate sign-up needed. Walk away if they don’t sit right with you.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Description of Service</h2>
                <p className="text-muted-foreground">
                  Starting strong, Internships24 shares details on internships across South Africa. It covers learnerships too - also graduate roles worth exploring. Bursary options appear here alongside helpful tips for building a path forward. 
                  Information gets pulled from public sources, then posted clearly. The aim? Making searches easier without extra noise. Updates roll in regularly so visitors stay informed. 
                  Every post links out exactly where it should. Opportunities show up as they become known. Help comes through access, nothing hidden. Clarity matters most throughout.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">No Employment Guarantee</h2>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Important:</strong>  Internships24 isn’t a staffing firm. Getting hired? That depends on each company, not us. While we share details about openings, it's up to you to apply. Hiring choices belong solely to the employers involved. 
                  Although our goal is support, actual results vary by organisation. Because every business runs its own selection, outcomes differ widely.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">User Responsibilities</h2>
                <p className="text-muted-foreground mb-4">When using our website, you agree to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Use the website for lawful purposes only</li>
                  <li>Verify opportunity details with official sources before applying</li>
                  <li>Not submit false or misleading information through our contact forms</li>
                  <li>Failing to mess with how the site works correctly</li>
                  <li>Not reproduce or distribute our content without permission</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Content Accuracy</h2>
                <p className="text-muted-foreground">
                  Even when care is taken to share correct and current details, there’s no promise every piece will be fully accurate, complete, or fresh. 
                  Changes can happen quietly, shifting how chances appear. Check directly with trusted authorities before moving forward on anything.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground">
                  What you see on Internships24 - words, pictures, logos, visuals - belongs to Internships24 or those who provided them. 
                  This stuff isn’t free for anyone to grab. Because it’s guarded under copyright rules. Using any piece without permission? Not allowed. Protection kicks in automatically. Even if there's no small print saying so. Whoever puts work here keeps control over how it spreads. 
                  Taking parts for your own thing behind their back crosses a line. Respect stays required. Otherwise consequences follow.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Third-Party Links</h2>
                <p className="text-muted-foreground">
                  Links to outside sites might show up on our pages. Even though we include them, what's on those places isn't our doing. Their way of handling data stays theirs, not ours. 
                  You go there knowing you're on your own. How well they work or stay online? That part is out of our hands too.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  Should something go wrong while using the site, Internships24 won’t owe you anything. Problems tied to how you use the platform fall on you, not us. If details here lead you astray, we’re not responsible. 
                  Even if things get bad - like time lost or stress - we aren’t held accountable. Punishment-level claims? Not our burden.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground">
                  Might change these rules whenever needed. Once they’re up, new versions start working straight away. 
                  Staying on the site means agreeing to what’s updated. New details stand without extra notice.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  Got a question about these terms?, please{" "}
                  <Link to="/contact" className="text-accent hover:underline">contact us</Link> Our team reads every message. Help is just an email away. Curious about something? We’re here to clarify. No query too small. Just send us a note and we’ll respond quickly.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
