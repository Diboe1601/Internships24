import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
 {
  question: "Who can use Internships24?",
  answer: "For South African students and job seekers at various phases of their academic and professional development, Internships24 was established. Those who are actively looking for internships, learnerships, bursaries, graduate programs, and entry-level professional prospects include high school students, TVET college students, university students, recent graduates, and unemployed youngsters."
},
{
  question: "Do I need formal qualifications to apply for internships?",
  answer: "Depending on the opportunity and the company providing it, different qualifications are needed. While some internships and learnerships are available to current students, recent matriculants, or candidates with relevant skills, others require completed qualifications. Before applying, candidates should always thoroughly read the prerequisites. "
},
{
  question: "How do I apply for opportunities listed on Internships24?",
  answer: "Clear application guidelines and a link to the actual employer, training provider, or organization are included with every opportunity posted on Internships24. Since Internships24 does not gather applications or serve as a recruitment agency, all applications are sent straight to the opportunity source."
},
{
  question: "Are opportunities on Internships24 limited to South African citizens?",
  answer: "South African nationals or permanent residents are the target audience for the majority of internships listed on Internships24, especially those sponsored by SETAs or government agencies. The position description always outlines eligibility requirements, such as citizenship or residency requirements."
},
{
  question: "Can I apply for more than one internship or learnership?",
  answer: "Yes, applicants are encouraged to apply for multiple opportunities as long as they meet the minimum requirements for each role. Applying to several suitable opportunities can increase your chances of being shortlisted or selected. "
},
{
  question: "Does Internships24 provide help with CVs and cover letters?",
  answer: "Indeed. Career advising information from Internships24 includes resources for interview preparation, cover letter advice, and CV writing help. These resources are intended to help graduates and students enhance their applications and show employers that they are professional. "
},
{
  question: "How can I tell if an opportunity is legitimate?",
  answer: "Our goal is to share possibilities from credible and official sources, including government platforms, business websites, and well-known organizations. However, before submitting, candidates are highly encouraged to do their own research, avoid paying any fees, and independently confirm any information."
},
{
  question: "Do internships and learnerships usually pay a stipend?",
  answer: "Payment structures vary depending on the programme and organisation. Some internships and learnerships offer a monthly stipend or allowance, while others may be unpaid but provide valuable work experience. Stipend or payment details are typically stated in the opportunity listing."
},
{
  question: "Can I submit an opportunity to be featured on Internships24?",
  answer: "Indeed. You can explore reputable internships, learnerships, bursaries, and graduate programs by getting in touch with Internships24. If an opportunity satisfies our content and verification requirements, it may be published for free."
},
{
  question: "Will Internships24 ever ask users to pay fees?",
  answer: "No, access to opportunities, applications, or career information will never be paid for by Internships24. Users should proceed with caution and take any request for money made by someone posing as Internships24 as a possible fraud."
}

];

export function FAQSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Got questions? We&apos;ve got answers. Find everything you need to know about Internships24.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elevated border-none px-6 data-[state=open]:ring-2 data-[state=open]:ring-accent/20"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-accent hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
