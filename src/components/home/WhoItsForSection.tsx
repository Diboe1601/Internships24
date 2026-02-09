import { GraduationCap, BookOpen, Building2, UserSearch } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "University Graduates",
    description:
      "Recent grads looking for their first professional job experience after earning degrees or diplomas from universities. Graduates seeking internships, graduate programs, or entry-level positions that enable them to use their academic knowledge in practical work settings are included in this category.",
  },
  {
    icon: BookOpen,
    title: "TVET Students",
    description:
      "In order to obtain real-world experience and exposure to the industry, students and recent graduates of Technical and Vocational Education and Training (TVET) institutions seeking technical or vocational employment are searching for learnerships, apprenticeships, or workplace-based training opportunities.",
  },
  {
    icon: Building2,
    title: "Current Students",
    description:
      "In order to support their studies and obtain early career experience, high school students, TVET students, and university students who are still enrolled in classes are looking for financial opportunities, part-time internships, bursaries, or vacation work.",
  },
  {
    icon: UserSearch,
    title: "Unemployed Youth",
    description:
      "Young South Africans without jobs who are actively looking for work experience programs, skills development courses, or entry-level positions that will assist them get into the workforce and improve their employability.",
  },
];

export function WhoItsForSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Who It&apos;s For
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Supporting South African Youth
          </h2>
          <p className="text-muted-foreground text-lg">
            The goal of Internships24 is to assist young South Africans at various phases of their academic and professional development. 
            Our platform offers advice and information to assist you in exploring your possibilities, regardless of whether you are a student, 
            a recent graduate, or looking for your first opportunity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="card-elevated p-6 text-center group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <audience.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
