import { MapPin, RefreshCw, DollarSign, BookOpen, Shield, Users } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "South Africa Focused",
    description: "All opportunities are specifically for South African graduates and students.",
  },
  {
    icon: DollarSign,
    title: "Completely Free",
    description: "No hidden fees, no premium tiers. Access all information for free.",
  },
  {
    icon: RefreshCw,
    title: "Regularly Updated",
    description: "We continuously add new opportunities and remove expired listings.",
  },
  {
    icon: BookOpen,
    title: "Career Guidance",
    description: "Expert articles on CVs, interviews, and navigating the job market.",
  },
  {
    icon: Shield,
    title: "Verified Listings",
    description: "We verify opportunities to protect you from scams and fake postings.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by South Africans who understand the local job market.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Why Internships24
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Trusted Platform for Your Career Journey
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We understand the challenges South African graduates face. That&apos;s why we created 
              a platform that makes finding opportunities easier, safer, and completely free.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="flex items-start gap-3 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <reason.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl gradient-primary p-8 flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <div className="text-6xl md:text-7xl font-heading font-extrabold mb-2">100+</div>
                <div className="text-xl text-primary-foreground/80">Users Helped</div>
                <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                  <div className="text-3xl md:text-4xl font-heading font-bold mb-1">100+</div>
                  <div className="text-primary-foreground/70">Active Opportunities</div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
