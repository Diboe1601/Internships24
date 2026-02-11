import { GraduationCap, BookOpen, Building2, UserSearch } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "University Graduates",
    description:
      "Students and recent graduates seeking their first professional experience with an internship, graduate program or entry level position to apply the knowledge they have acquired through academia to real-world working situations",
  },
  {
    icon: BookOpen,
    title: "TVET Students",
    description:
      "Technical or vocational employment and the acquisition of real world experience and familiarity with the industry as a means of obtaining a technical or vocational position are the reasons that students and recent graduates of TVET institutions are seeking out learnership, apprentice or on-the-job training programs. ",
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
      "Young South Africans that are unemployed and currently seeking out work experience programs, skill development courses or entry level positions to assist in getting employed and improving employability.",
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
            The purpose of Internships24 is to provide assistance to young South Africans across all levels of their academic and professional career development. 
            Our platform provides both guidance and information to support you in discovering your options regardless of whether you are a student, a recent graduate or seeking your first opportunity.
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
