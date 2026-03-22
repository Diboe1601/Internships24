import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";

const Privacy = () => {
  useSEO({
    title: "Privacy Policy | Internships24",
    description: "Read the Internships24 privacy policy. Learn how we collect, use and protect your personal information.",
    canonical: "https://www.internships24.co.za/privacy",
  });

  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: March 8, 2026
            </p>

            {/* QUICK SUMMARY - NEW */}
            <section className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="font-heading text-2xl font-semibold mb-4">Quick Summary</h2>
              <p className="text-muted-foreground mb-4">Here's what you should know about your privacy on Internships24:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>We collect your name and email only when you contact us through our form.</li>
                <li>We use cookies to analyze site traffic and improve your experience.</li>
                <li><strong>We never sell your personal data</strong> to third parties.</li>
                <li>Google AdSense shows ads based on your browsing history - you can opt out of personalized ads.</li>
                <li>You can request access to your data or ask us to delete it at any time.</li>
              </ul>
            </section>

            {/* QUICK NAVIGATION - NEW */}
            <section className="mb-8 p-4 bg-gray-100 rounded-lg">
              <h3 className="font-heading font-semibold mb-3">Quick Navigation</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <a href="#introduction" className="text-accent hover:underline text-sm">Introduction</a>
                <a href="#information-we-collect" className="text-accent hover:underline text-sm">Information We Collect</a>
                <a href="#how-we-use" className="text-accent hover:underline text-sm">How We Use</a>
                <a href="#third-party" className="text-accent hover:underline text-sm">Third-Party Services</a>
                <a href="#data-security" className="text-accent hover:underline text-sm">Data Security</a>
                <a href="#your-rights" className="text-accent hover:underline text-sm">Your Rights</a>
                <a href="#contact" className="text-accent hover:underline text-sm">Contact Us</a>
              </div>
            </section>

            <div className="prose prose-lg max-w-none space-y-6 text-foreground">
              {/* INTRODUCTION - YOUR EXISTING CONTENT */}
              <section id="introduction">
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Introduction</h2>
                <p className="text-muted-foreground">
                  What happens to your details on Internships24? The way we handle them is built around safety and respect. When you arrive at our site, actions behind the scenes start - quiet steps that track nothing beyond what's needed. 
                  Each piece stays locked down unless a real reason appears to move it elsewhere. 
                  Your trust matters most here, so choices about data aren't left hanging - they're clear, limited, direct.
                </p>
              </section>

              {/* INFORMATION WE COLLECT - YOUR EXISTING CONTENT */}
              <section id="information-we-collect">
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
                <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Personal Information:</strong> Name, email address, and any information you voluntarily provide through our contact form.</li>
                  <li><strong className="text-foreground">Usage Data:</strong> Information about how you use our website, including pages visited, time spent, and navigation patterns.</li>
                  <li><strong className="text-foreground">Technical Data:</strong> IP address, browser type, device information, and operating system.</li>
                  <li><strong className="text-foreground">Cookies:</strong> Small data files stored on your device to improve your browsing experience.</li>
                </ul>
              </section>

              {/* HOW WE USE YOUR INFORMATION - YOUR EXISTING CONTENT */}
              <section id="how-we-use">
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use the collected information to:</p>
                
                <p className="text-muted-foreground"> 
                  Answer questions you ask. Support comes after we listen. When needed, help follows quickly. Replies arrive without delay. Assistance shows up when called. Your contact leads to a response. Every request gets attention
                  Improve our website and user experience, Analyse website traffic and usage patterns, show ads with google adsense.
                </p>
              </section>

              {/* THIRD-PARTY SERVICES - YOUR EXISTING CONTENT */}
              <section id="third-party">
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
                <p className="text-muted-foreground">
                  Ads appear on our site through a service called {" "}
                  <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    Google Ads Settings
                  </a>. Because of past visits - here or elsewhere - you might see tailored ads served using small data files known as cookies. Personalised ad options let you step back via the Google Ads Settings page if that feels better.
                </p>
              </section>

              {/* DATA SECURITY - YOUR EXISTING CONTENT */}
              <section id="data-security">
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Data Security</h2>
                <p className="text-muted-foreground">
                  Still, every online transfer carries some risk, even when precautions are taken. Our systems use safeguards designed to keep your data safe.
                </p>
              </section>

              {/* YOUR RIGHTS - YOUR EXISTING CONTENT */}
              <section id="your-rights">
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </section>

              {/* CONTACT US - YOUR EXISTING CONTENT */}
              <section id="contact">
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  Got a question about our Privacy Policy? , please{" "}
                  <Link to="/contact" className="text-accent hover:underline">contact us</Link> We're here to help clarify anything on your mind. Questions pop up - just send them our way. Curious about something specific? Let us know. Whatever comes up, feel free to get in touch. Need clarity? That's what we're here for.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;