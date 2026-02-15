import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: December 13, 2024
            </p>

            <div className="prose prose-lg max-w-none space-y-6 text-foreground">
              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Introduction</h2>
                <p className="text-muted-foreground">
                  What happens to your details on Internships24? The way we handle them is built around safety and respect. When you arrive at our site, actions behind the scenes start - quiet steps that track nothing beyond what's needed. 
                  Each piece stays locked down unless a real reason appears to move it elsewhere. 
                  Your trust matters most here, so choices about data aren’t left hanging - they’re clear, limited, direct.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
                <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Personal Information:</strong> Name, email address, and any information you voluntarily provide through our contact form.</li>
                  <li><strong className="text-foreground">Usage Data:</strong> Information about how you use our website, including pages visited, time spent, and navigation patterns.</li>
                  <li><strong className="text-foreground">Technical Data:</strong> IP address, browser type, device information, and operating system.</li>
                  <li><strong className="text-foreground">Cookies:</strong> Small data files stored on your device to improve your browsing experience.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use the collected information to:</p>
                
                <p> 
                  Answer questions you ask. Support comes after we listen. When needed, help follows quickly. Replies arrive without delay. Assistance shows up when called. Your contact leads to a response. Every request gets attention
                  Improve our website and user experience, Analyse website traffic and usage patterns, show ads with google adsense.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
                <p className="text-muted-foreground">
                  Ads appear on our site through a service called {" "}
                  <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    Google Ads Settings
                  </a>. Because of past visits - here or elsewhere - you might see tailored ads served using small data files known as cookies. Personalised ad options let you step back via the Google Ads Settings page if that feels better.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Data Security</h2>
                <p className="text-muted-foreground">
                  Still, every online transfer carries some risk, even when precautions are taken. Our systems use safeguards designed to keep your data safe.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  Got a question about our Privacy Policy? , please{" "}
                  <Link to="/contact" className="text-accent hover:underline">contact us</Link> We’re here to help clarify anything on your mind. Questions pop up - just send them our way. Curious about something specific? Let us know. Whatever comes up, feel free to get in touch. Need clarity? That’s what we’re here for.
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
