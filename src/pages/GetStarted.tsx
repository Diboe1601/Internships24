import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  FileText, 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight,
  Lightbulb,
  Shield,
  Clock
} from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const steps = [
  {
    icon: Search,
    title: "Browse Opportunities",
    description: "Look around at the handpicked internships, learnerships, graduate roles, and bursaries waiting in South Africa. Since each one fits different studies or goals, sorting by category helps spot what matches you. While fresh options pop up all the time, staying updated means dropping in now and then. Because things change fast, returning frequently keeps you in step.",
  },
  {
    icon: FileText,
    title: "Read the Details Carefully",
    description: "Start by clicking into every opening to see complete details - like required qualifications, age rules if they apply, deadlines, plus how to submit your response. Reading all parts carefully makes a difference because it shows whether you actually qualify. That way, energy goes only toward roles matching your situation.",
  },
  {
    icon: Send,
    title: "Apply Directly to the Source",
    description: "Ready? Tap the link to reach the real site - company, group, or public office. Send everything straight to the hiring team or course admin every single time. Not a penny requested by Internships24 ever. They pass no forms along for you.",
  },
  {
    icon: CheckCircle2,
    title: "Track & Follow Up",
    description: "A quick note helps track each application - date, place, deadline, and any ID number given. Should silence stretch past the advertised response window, reaching out by their listed method fits standard practice.",
  },
];

const tips = [
  {
    icon: Lightbulb,
    title: "Tailor Your CV",
    description: "A single version of your CV rarely fits all jobs. Tailor it carefully, focusing on what matters for each position. Highlight specific abilities and background details that match the job. Shift emphasis based on where you apply. Tiny tweaks sometimes make a big difference. Standing out often comes down to relevance.",
  },
  {
    icon: Clock,
    title: "Apply Early",
    description: "Waiting too long could mean missing out entirely. Some hiring managers start screening right after getting resumes, filling spots before the deadline hits. Spotting an error? You might not get a second chance to fix it later. Early submission buys room to adjust.",
  },
  {
    icon: Shield,
    title: "Verify Opportunities",
    description: "Watch out when offers skip basic info like email or phone number. Jumping on chances too fast might lead to trouble - slow down. Real openings show clear duties plus honest expectations upfront. Start safe: head straight to the group’s real site before believing anything else.",
  },
];

const scamWarnings = [
  "Money should never leave your pocket when applying for work, training, or learning roles. A request for payment is a red flag every single time. Legitimate opportunities do not ask applicants for cash upfront. If someone demands money just to submit an application, walk away. Real employers cover their own hiring costs, always.",
  "Watch out for promises of jobs you get just like that - no talk, no test. Sometimes they’re too good to be real. A real chance usually asks questions first. Jumping straight in might mean trouble ahead. Quiet red flags pop up when effort isn’t needed.",
  "Start by checking the business name on its main webpage. Look up phone numbers listed in trusted directories. Match addresses through government records online. Go straight to email contacts shown on secure pages. Always cross-check data found on third-party sites.",
  "Sending your bank info too soon? That opens doors to trouble. Hold back on passwords - they’re keys you shouldn’t hand out early. Identity papers stay private until absolutely necessary.",
  "If something feels off about a listing or message, let us know right away.",
];

const GetStarted = () => {
  useSEO({
    title: "How to Use Internships24 | Get Started",
    description: "Learn how to find and apply for internships, learnerships and graduate programmes in South Africa using Internships24.",
    canonical: "https://www.internships24.co.za/get-started",
  });
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-primary section-padding">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground mb-6">
              How to Use Internships24
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Here’s how to get started with Internships24 when looking for real job openings across South Africa. 
              Because every step matters, the process breaks down clearly once you begin exploring available roles. 
              Since details count, each section guides you without confusion toward submitting proper applications. 
              With care given to accuracy, users see only verified positions listed on the site. When timing aligns, applicants gain access to new postings fast. Though options vary, all leads connect directly to active hiring efforts in different fields. 
              Through consistent updates, the platform stays current with what local employers seek.
              <br /><br />
              A fresh start can feel tricky when facing job apps alone. Yet each step forward builds clearer paths for students just beginning. 
              Recent grads might find their rhythm by skipping typical errors others repeat. 
              Anyone without work now gains ground by moving carefully through the process. Confidence grows quietly when actions line up right.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Getting Started
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Four Simple Steps to Find Your Opportunity
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Finding your next chance can feel simple instead of overwhelming. 
              Move ahead by doing each part one at a time without rushing. 
              Start with looking around, then narrow what you see step by step. Stay steady through each phase so nothing feels out of place. 
              Finish by taking action when it makes sense naturally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="card-elevated p-6 relative animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 mt-2">
                  <step.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Best Practices
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tips for Successful Applications
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A little better each time you try might just change everything. Try these ideas to help things go your way
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tips.map((tip, index) => (
              <div
                key={tip.title}
                className="card-elevated p-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <tip.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {tip.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scam Warning Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <div className="card-elevated p-8 border-2 border-destructive/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Avoid Scams
                  </h2>
                  <p className="text-muted-foreground">
                    Stay informed and protect yourself from fraud
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {scamWarnings.map((warning, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{warning}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm text-muted-foreground">
                Got a feeling something’s off about a job offer?, please{" "}
                <Link to="/contact" className="text-accent hover:underline">
                  contact us
                </Link>{" "}
                immediately. Every tip sharpens our ability to shield others on the hunt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-primary">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Find Your Opportunity?
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
            Find plenty of real internships, training programs, and jobs for graduates around South Africa right here - all easy to reach at no cost. One spot holds it all.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/blog">
                Browse Opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetStarted;