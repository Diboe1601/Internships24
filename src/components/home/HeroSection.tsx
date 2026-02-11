import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users, Briefcase, GraduationCap } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Opportunities Shared", value: "100+" },
  { icon: Users, label: "Users Reached", value: "100+" },
  { icon: GraduationCap, label: "Career Resources Published", value: "100+" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative">
        <div className="py-20 md:py-28 lg:py-36">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6 animate-fade-up">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              South Africa&apos;s Career Information Platform
            </div>

            {/* Headline */}
            <h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Latest 2026 / 2027 Internships & Learnerships in{" "}
              <span className="text-accent">South Africa</span>
            </h1>

            {/* Subheading */}
            <p
              className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Internships24 lets students, recent graduates, and unemployed youth find internships, learnerships, graduate programs, and career information from a trusted public source. 
              We offer you the inside scoop on job offers; applications go directly to our participating employers.

            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/blog">
                  Browse Opportunities
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/get-started">How It Works</Link>
              </Button>
            </div>

            {/* Trust Signals */}
            <div
              className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/70 text-sm animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Free Access to Information</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Listings from Public & Trusted Sources</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Content Updated Regularly</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 text-accent mb-3">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
