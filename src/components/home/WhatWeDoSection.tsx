import { FileText, Search, Shield, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Curated Opportunities",
    description:
      "We consider every detail to help lay the foundation for your future, providing you with all the pertinent information needed to find bursaries and simplify your search. Our wish is to make students and job seekers not look through the internet sites for real opportunities.",
  },
  {
    icon: FileText,
    title: "Career Guidance",
    description:
      "Our tutorials and templates will teach you how to make the best impression, with tips on writing your CV and cover letter, advice for successfully nailing job interviews, and everything you need to know about applying for job. The information is intended for students and recent graduates at various stages of their professional development.",
  },
  {
    icon: Shield,
    title: "Scam Protection",
    description:
      "We promote safe job searching by cross-referencing job postings with official sources and offering unambiguous guidance on how to identify and avoid scammers. We also warn users about common red flags, such as money requests and unverified contacts, to help protect personal information.",
  },
  {
    icon: Lightbulb,
    title: "Free Resources",
    description:
      "Internships24 offers free access to all of its resources. There are no application costs or subscription requirements. Regardless of background or financial situation, we want to make career information and guidance accessible to everybody.",
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
            Internships24 is a completely independent information web portal for anybody seeking South African internships, bursaries, learnerships, and other vocational opportunities. 
            We are not an employer and do not hire or employ people for any reason, so we don’t act as recruiters or employers.
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
