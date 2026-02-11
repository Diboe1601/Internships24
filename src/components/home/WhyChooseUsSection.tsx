import { MapPin, RefreshCw, DollarSign, BookOpen, Shield, Users } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "South Africa Focused",
    description:
      "South African students, recent graduates, and job seekers can benefit from all of the possibilities listed on Internships24. To make it simple for users to identify options that meet South African eligibility standards, we concentrate on local programs, businesses, SETAs, and government initiatives.",
  },
  {
    icon: DollarSign,
    title: "Completely Free",
    description:
      "The website has absolutely NO membership fees, hidden costs or premium access to Internships24. You have free and unlimited access to career guidance advice, internship listing information, tips, resources, etc. at ANY TIME in your search for a new job.",
  },
  {
    icon: RefreshCw,
    title: "Regularly Updated",
    description:
      "Internship postings, learnership postings, and graduate program postings are updated as often as possible. Internship postings, learnership postings, and graduate program postings are also removed from our site if they become outdated or expire.",
  },
  {
    icon: BookOpen,
    title: "Career Guidance",
    description:
      "In order to assist readers in making well-informed selections, we also provide useful career guidance articles that include topics such as CV writing, interview techniques, application advice, and comprehension of various career tracks.",
  },
  {
    icon: Shield,
    title: "Verified Listings",
    description:
      "We look for possibilities on reputable organizations' websites, government portals, and official company websites. Although users should always independently confirm information, our goal is to lessen the likelihood of frauds and false job ads.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "South Africans with knowledge of the local job and education markets founded Internships24. Our information is informed by actual difficulties graduates and students encounter when attempting to find employment in South Africa.",
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
              We are aware of the difficulties South African graduates and students encounter when looking for work. 
              The purpose of Internships24 is to make career information more accessible, safer, and free for everyone.
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
                <div className="text-xl text-primary-foreground/80">Users Reached</div>
                <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                  <div className="text-3xl md:text-4xl font-heading font-bold mb-1">100+</div>
                  <div className="text-primary-foreground/70">Active Listings Shared</div>
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
