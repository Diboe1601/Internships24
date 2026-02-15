import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const Disclaimer = () => {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
              Disclaimer
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: December 13, 2024
            </p>

            <div className="prose prose-lg max-w-none space-y-6 text-foreground">
              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">General Information</h2>
                <p className="text-muted-foreground">
                  What you find at Internships24 is meant just to inform. 
                  Though shared kindly, nothing here promises how correct, suitable, truthful, dependable, timely, present, or whole that info might be.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Not a Recruitment Agency</h2>
                <div className="card-elevated p-6 border-2 border-accent/20 bg-accent/5">
                  <p className="text-foreground font-medium mb-2">Important Notice:</p>
                  <p className="text-muted-foreground">
                     Behind every listing on <strong className="text-foreground">Internships24</strong>stands just facts - no promises. 
                     Not a <strong className="text-foreground">Recruiter,</strong>  never claiming jobs will follow. Decisions about hires? Never touched by us. Sending your form somewhere else? That part isn’t handled here.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">No Payment Required</h2>
                <p className="text-muted-foreground">
                  Most real jobs won’t ask you to hand over cash just to apply. When looking at roles online, especially here, expect zero fees. A request for money? That usually means trouble ahead.
                  <strong className="text-foreground">Training programs that are honest never demand upfront payments.</strong> Spotting a fee could mean someone is pretending to offer work. Stay clear of anything asking for funds - real chances don’t cost entry. 
                  Chances listed elsewhere follow the same rule: if they want payment, walk away.

                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Government Affiliation</h2>
                <p className="text-muted-foreground">
                  Most chances listed come from public sources, so always double-check them yourself. This site has<strong className="text-foreground">no ties to the South African governmen</strong> unless clearly noted somewhere else. 
                  What you see online might change, which means relying only on official pages makes sense. Details shared here are pulled straight from open records, nothing more.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Third-Party Listings</h2>
                <p className="text-muted-foreground">
                  From time to time, you’ll find openings pulled together from places like official company pages, online job platforms, or government notices. 
                  Even though checks are made to see if these leads are real, there’s no promise that each one is fully trustworthy. Take a moment to look into things yourself prior to sending any application.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Advertisements</h2>
                <p className="text-muted-foreground">
                  Advertisements might show up here. They come through outside ad systems, such as Google AdSense. You’ll see them because automated networks place them there. 
                  Spotting a product on this site doesn’t mean it's recommended. What appears is separate from the views held here.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">External Links</h2>
                <p className="text-muted-foreground">
                  Links to outside websites might show up on our pages - these places aren’t run by us. What happens there stays there; we can’t influence their rules, how they handle data, or what they post. 
                  Any choices those sites make fall on them, not us. Our name isn’t tied to their actions, ever.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">User Responsibility</h2>
                <p className="text-muted-foreground">
                  Beware of details when looking at a new chance. A smart move means confirming who is behind it, using real sources to check facts. 
                  Look up what the organization says online, spot trusted updates on their page. Always take care sending personal info out there - go slow, stay sharp.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  No matter what happens, Internships24 won’t be held responsible if you lose something, get harmed, or face problems using our site. 
                  That covers trouble from applying to roles, dealing with outside people, or choices shaped by what we publish. 
                  Though clear warnings are posted, outcomes depend on individual situations - none tied directly to us.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Report Concerns</h2>
                <p className="text-muted-foreground">
                  Should something on our site seem off, please <Link to="/contact" className="text-accent hover:underline">Contact us</Link>{" "}
                  We’ll look into it once notified. Mistakes happen, yet fixing them matters just as much. Getting a heads up helps everything move faster. Clarity keeps things working smoothly behind the scenes too.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Disclaimer;
