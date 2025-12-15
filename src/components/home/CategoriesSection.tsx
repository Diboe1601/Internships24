import { Link } from "react-router-dom";
import { Briefcase, GraduationCap, Building2, Coins, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: Briefcase,
    title: "Internships",
    description: "Entry-level work experience opportunities across various industries.",
    count: "100+",
    href: "/blog",
  },
  {
    icon: GraduationCap,
    title: "Learnerships",
    description: "Structured programmes combining work experience with formal training.",
    count: "100+",
    href: "/blog",
  },
  {
    icon: Building2,
    title: "Graduate Programmes",
    description: "Comprehensive development programmes for new graduates.",
    count: "80+",
    href: "/blog",
  },
  {
    icon: Coins,
    title: "Bursaries",
    description: "Financial assistance for students pursuing higher education.",
    count: "100+",
    href: "/blog",
  },
  {
    icon: FileText,
    title: "Career Tips",
    description: "Expert advice on CVs, interviews, and job searching strategies.",
    count: "50+",
    href: "/blog",
  },
];

export function CategoriesSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Explore Categories
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Your Path to Success
          </h2>
          <p className="text-muted-foreground text-lg">
            Browse through our categories to find opportunities that match your goals and qualifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              to={category.href}
              className="card-elevated p-6 group animate-fade-up block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <category.icon className="h-6 w-6 text-accent" />
                </div>
                <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {category.count}
                </span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {category.description}
              </p>
              <div className="flex items-center text-accent text-sm font-medium">
                Explore
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="accent" size="lg" asChild>
            <Link to="/blog">
              View All Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
