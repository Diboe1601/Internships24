import { FileText, Search, Shield, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Curated Opportunities",
    description:
      "We thoroughly investigate, evaluate, and gather graduate programs, learnerships, internships, and bursaries from reliable public sources all around South Africa. Our objective is to eliminate the necessity for students and job seekers to search across different platforms in order to find genuine possibilities. ",
  },
  {
    icon: FileText,
    title: "Career Guidance",
    description:
      "Our instructional articles and tutorials assist you with understanding the requirements for applications, enhancing your cover letter and CV, getting ready for interviews, and making wise career selections. The information is intended to help students and recent graduates at various phases of their professional development. ",
  },
  {
    icon: Shield,
    title: "Scam Protection",
    description:
      "By comparing job advertisements to official sources and providing clear instructions on how to spot and steer clear of scammers, we encourage safe job seeking. To assist safeguard personal information, we also advise users about typical red flags, like money demands and unconfirmed contacts.",
  },
  {
    icon: Lightbulb,
    title: "Free Resources",
    description:
      "Access to all of Internships24's materials is totally free. We don't require subscriptions or charge application fees. Our goal is to make career information and advice available to everyone, irrespective of financial status or background. ",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            What We Do
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Gateway to Career Opportunities
          </h2>
          <p className="text-muted-foreground text-lg">
            Internships24 is an independent information platform that assists young people in South Africa in finding professional possibilities, 
            including graduate programs, learnerships, internships, and bursaries. 
            We offer instructions and direct links so people can apply on their own through official channels; 
            we do not serve as a recruiting agency or employer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-elevated p-6 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
