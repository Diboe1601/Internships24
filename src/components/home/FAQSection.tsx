import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
 {
  question: "Who can use Internships24?",
  answer: "For South African students and job seekers at various phases of their academic and professional development, Internships24 was established. High school students, TVET college students, university students, recent graduates, and unemployed youth are among those actively seeking internships, learnerships, bursaries, graduate programs, and entry-level professional opportunities."
},
{
  question: "Do I need formal qualifications to apply for internships?",
  answer: "The particular opportunity being advertised and the firm offering it will determine the kind of certification you require. While some internships and learnerships require completed qualifications, others will be available to current students, recent matriculants (students who have recently passed their final school examinations), or anyone with relevant skills."
},
{
  question: "How do I apply for opportunities listed on Internships24?",
  answer: "Before you apply for an internship or learnership make sure to carefully review the qualification requirements for each opportunity.Each opportunity that we post on Internships24 includes clear application information and links to the actual employer, training provider or organization."
},
{
  question: "Are opportunities on Internships24 limited to South African citizens?",
  answer: "Since we do not collect applications for our opportunities and are not a recruitment agency, all applications for the opportunities that we post will go directly to the original opportunity source.Most of the internships listed on Internships24 are intended for South African citizens or permanent residents, particularly those sponsored by SETAs or government organizations."
},
{
  question: "Can I apply for more than one internship or learnership?",
  answer: "Yes you can apply for more than one opportunity as long as you meet the minimum requirement of each role. You should however apply for several opportunities that fit your profile, to enhance your chances of getting shortlisted/selected."
},
{
  question: "Does Internships24 provide help with CVs and cover letters?",
  answer: "Indeed. Internships24 includes career advice such as tips for interview, suggestions for cover letter and CV writing. These tools are provided to graduates and students as a means of augmenting their applications for employment, and demonstrating that they have an objective to the organization."
},
{
  question: "How can I tell if an opportunity is legitimate?",
  answer: "We aim to bring you opportunities based on a variety of official sources such as government sites, company websites, and reputable organisations. Applicants must however make their own enquiries and imperative not to hand over cash in exchange for anything."
},
{
  question: "Do internships and learnerships usually pay a stipend?",
  answer: "There are different payment schedules based on program and organisation. Certain intern and learner programmes have a monthly allowance paid to the successful candidates. Other employers may offer a stipend in some form or another. Stipend/payment information is provided in the opportunity listing. "
},
{
  question: "Can I submit an opportunity to be featured on Internships24?",
  answer: "Indeed. You can explore reputable internships, learnerships, bursaries, and graduate programs by getting in touch with Internships24. If an opportunity satisfies our content and verification requirements, it may be published for free. "
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
