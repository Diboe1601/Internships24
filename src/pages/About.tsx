import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Users, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "Life shifts happen when young people in South Africa find work that truly matters. Our efforts point one way - opening doors they can walk through. Not just jobs, but paths forward take shape through what we build. Real chances grow where support meets ambition. Each step ties back to creating something lasting for those ready to move.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Truth matters most to us. Clear talk comes before flashy words. Hidden fees do not exist here. Promises made are promises kept. Trust grows when there is nothing to hide.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Fresh from South Africa, shaped by those who live it. A clear view of what schools miss, how jobs slip away. Made here, for here - no borrowed ideas. Knowing classrooms. Feeling job hunts. Close to home truths.",
  },
  {
    icon: Heart,
    title: "Accessibility",
    description:
      "Focused on one thing only: making job details clear, open, always free. Background never matters. Everyone gets the same shot.",
  },
];

const About = () => {
  return (
    <Layout>
{/* Hero Section */}
<section className="gradient-primary section-padding">
  <div className="container-main">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground mb-6">
        About Internships24
      </h1>
      <p className="text-lg text-primary-foreground/80 leading-relaxed">
        The goal of the South African career information website Internships24 is to assist recent graduates, students, 
        and jobless young people attempting to make their first forays into the workforce.
        <br /><br />
        We know how daunting the job market can be, particularly if you're looking for entry-level positions with little to no work experience, learnerships, or internships. 
        Internships24 exists to make career information more accessible, comprehensible, and trustworthy.
        <br /><br />
        Verified learnerships, graduate programs, bursaries, internships, and opportunities for skill development from respectable companies throughout South Africa are all gathered in one location by our platform. 
        In order to allow users to spend more time applying with confidence and less time searching, we prioritize accuracy, clarity, and frequent updates.
      </p>
    </div>
  </div>
</section>


      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Our Story
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why We Began Internships24
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Every day, young people across South Africa search without success for work. 
                Not lack of skill but missing connections blocks many fresh graduates. 
                Openings stay hidden behind scattered websites instead of clear paths forward. 
                Some hold degrees yet face doors shut by demands they cannot meet alone.
              </p>
              <p>
                One reason Internships24 exists is to fix how hard it can be to locate good internships. 
                Rather than jumping between countless sites and scrolling endlessly through feeds, people land what they need right here. 
                A single spot now holds what used to scatter everywhere online.
              </p>
              <p>
                From trusted firms, training authorities, schools, and official notices we pull together internships, learning roles, grad schemes, plus financial aid options. 
                Every detail gets checked, kept current, confirmed correct through ongoing review.
              </p>
              <p>
                What matters here isn’t simply sharing options. 
                It’s about building real understanding in young people across South Africa, so they can move forward into jobs with clarity and belief in themselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-elevated p-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every chance should count when starting out. Free info stays fresh here for SA students hunting roles after school. 
                Reliable details open paths into real jobs through internships, learnerships, or first steps at work. 
                Building a future begins with clear options shown plainly. 
                What matters gets updated without cost so everyone can move forward.
              </p>
            </div>
            <div className="card-elevated p-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A nation down south where youth everywhere grab chances to work, learn trades, or step into jobs - 
                no matter their starting point or how remote the place they call home begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Guides Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card-elevated p-6 text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Who Internships24 Is For
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Starting out? Internships24 supports those stepping into work life - whether still at university, attending a TVET college, fresh out of studies, without a job, or just beginning their path. 
              Some explore internships. Others search for learnerships. 
              A few aim for graduate roles. Many want to grow abilities locally. Opportunities live across South Africa. 
              Each journey differs. So does how people find them.
            </p>
          </div>
        </div>
      </section>

      {/* Transparency Statement */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Transparency Statement
            </h2>
            <div className="card-elevated p-8 text-left">
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">
                Started by chance, Internships24 shares details about opportunities. Not hiring anyone - just passing along info.
                </strong>{" "}
                When you apply, your form goes straight to the company itself. 
                No promises of jobs, because that choice isn’t ours to make. 
                The real employers handle every step after submission. 
                This site only connects people with openings they might like. 
                Nothing more, nothing less. Each listing comes from official sources, not us. 
                You deal directly with them, always. Help exists here, but outcomes depend on the organisation. 
                Think of it as a doorway, not a promise. Access is free, control stays with the applicant. 
                Every link leads outward, never inward. Truth matters most: we don’t place people anywhere. 
                Decisions happen elsewhere, without our influence. That’s how it works. Always has been.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Free entry into Internships24 comes without hidden steps. No need to hand over money, bank numbers, or anything tied to your finances. 
                What you see costs nothing - no surprises hiding behind forms or sign-ups.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Now here's how things run behind the scenes - ads or partner links might show up to keep the platform going. 
                When something’s sponsored, it gets a clear label right there. 
                Always double-check any chance you see by heading straight to the main site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
