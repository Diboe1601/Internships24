import { Layout } from "@/components/layout/Layout";
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const navigate = useNavigate();

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const isTopInternshipsGuide = post.slug === "top-internships-graduates-south-africa-2026";
  const isLatestLearnerships = post.slug === "latest-learnerships-south-africa";
  
  const opportunities: {
    title: string;
    key: string;
    details?: JSX.Element;
  }[] = isTopInternshipsGuide ? [
    {
      title: "Services SETA: Internships 2026",
      key: "services-seta",
      details: (
        <div className="space-y-4">
          <p><strong>About:</strong> The Services Sector Education and Training Authority (Services SETA) is running a national internship programme (PowerX²) to place graduates into workplace training across public and private employers.</p>
          <div>
            <p className="font-semibold">Duration & Stipend:</p>
            <ul className="list-disc ml-5">
              <li>Typically 24 months for PowerX².</li>
              <li>Other listings show a 12-month internship with ~R7 000 pm stipend.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Requirements:</p>
            <ul className="list-disc ml-5">
              <li>Completed an NQF Level 4–7 qualification (e.g., Diploma, Degree) from a public university or TVET college.</li>
              <li>Unemployed at time of application.</li>
              <li>Available for the full duration (typically 24 months).</li>
              <li>Willing to be placed anywhere in South Africa (matching to host organisation).</li>
              <li>Submit an Expression of Interest (EOI) online and later certified: ID, qualification proof, CV, proof of residence, and bank details.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Fields:</p>
            <p>Various including Finance, HR, Marketing, ICT, Business/Admin depending on host placements.</p>
          </div>
        </div>
      ),
    },
    {
      title: "Department of Tourism: Internship 2026",
      key: "dept-tourism",
      details: (
        <div className="space-y-4">
          <p><strong>About:</strong> A 24-month paid internship for unemployed South African graduates to work in government tourism and administrative functions.</p>
          <div>
            <p className="font-semibold">Stipend:</p>
            <p>~R7 450.58 per month.</p>
          </div>
          <div>
            <p className="font-semibold">Requirements:</p>
            <ul className="list-disc ml-5">
              <li>South African citizen, unemployed.</li>
              <li>35 years old or younger.</li>
              <li>Must not have previously done an internship in government.</li>
              <li>Completed a relevant degree or postgraduate qualification.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Fields (Examples):</p>
            <ul className="list-disc ml-5">
              <li>ICT/Computer Science</li>
              <li>HR & HR Development</li>
              <li>Digital Transformation</li>
              <li>Business Administration/Public Management</li>
              <li>Financial Accounting</li>
              <li>Risk Management/Internal Audit</li>
              <li>Psychology/Social Work</li>
              <li>Policy, Project & Supply Chain Management, and more</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Application:</p>
            <p>Submit Z83 form + CV + certified copies of ID and qualifications.</p>
          </div>
        </div>
      ),
    },
    {
      title: "Visa: Internship Opportunities 2026",
      key: "visa",
      details: (
        <div className="space-y-4">
          <p><strong>About:</strong> Visa South Africa internships are typically corporate internships (often in tech, business, and finance). Official 2026 details may not be fully published yet.</p>
          <div>
            <p className="font-semibold">Expected Requirements (typical):</p>
            <ul className="list-disc ml-5">
              <li>Completed or final-year degree in a relevant field (e.g., IT, Finance, Marketing, Business).</li>
              <li>Strong communication and analytical skills.</li>
              <li>Eligible to work in South Africa.</li>
              <li>CV, cover letter, transcripts usually required.</li>
            </ul>
          </div>
          <p className="text-muted-foreground">Note: Once official Visa postings open, they'll list specific qualification matches and duties.</p>
        </div>
      ),
    },
    {
      title: "SA Government: Internship 2026",
      key: "sa-govt",
      details: (
        <div className="space-y-4">
          <p><strong>About:</strong> The South African Government runs internship and in-service training programmes across many departments (Health, Home Affairs, Public Works, Police, Municipalities, etc.).</p>
          <div>
            <p className="font-semibold">General Requirements:</p>
            <ul className="list-disc ml-5">
              <li>South African citizen, unemployed.</li>
              <li>At least a Degree or Diploma (for internships).</li>
              <li>Z83 application form + CV + certified documents.</li>
              <li>Age usually 18–35 (varies by department).</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Common Fields Available:</p>
            <ul className="list-disc ml-5">
              <li>HR, Finance & Supply Chain</li>
              <li>ICT/Admin</li>
              <li>Public Management & Policy</li>
              <li>Engineering & Technical (some SOEs like Eskom, SANRAL)</li>
              <li>Environmental & Social Sciences</li>
              <li>Municipal services (water, sanitation, planning)</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Benefits:</p>
            <p>Structured workplace exposure, usually with a monthly stipend.</p>
          </div>
        </div>
      ),
    },
    {
      title: "Mercedes-Benz: Graduate Internships 2026",
      key: "mercedes-benz",
      details: (
        <div className="space-y-4">
          <p><strong>About:</strong> Mercedes-Benz South Africa's Graduate Development Programme (GDP) 2026 offers practical experience at a world-class automotive company.</p>
          <div>
            <p className="font-semibold">Requirements:</p>
            <ul className="list-disc ml-5">
              <li>South African citizen.</li>
              <li>Completed a tertiary qualification (Diploma NQF 6 / Degree / Advanced Diploma NQF 7).</li>
              <li>Minimum average 65% in your qualification.</li>
              <li>Graduated within the past 3 years.</li>
              <li>Include CV + certified Matric & tertiary certificates, ID & academic transcript.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Eligible Fields:</p>
            <ul className="list-disc ml-5">
              <li>IT & Computer Sciences</li>
              <li>Accounting & Financial Management</li>
              <li>Business/Marketing/Project Management</li>
              <li>Logistics & Supply Chain</li>
              <li>Data Science & Analytics</li>
              <li>Social Sciences & Organisational Studies</li>
              <li>Law (LLB with at least 1 year post-admission experience)</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Location:</p>
            <p>Pretoria, Gauteng.</p>
          </div>
        </div>
      ),
    },
    {
      title: "Pernod Ricard: Graduate Internships 2026",
      key: "pernod-ricard",
      details: (
        <div className="space-y-4">
          <p><strong>About:</strong> Pernod Ricard South Africa offers a 12-month YES Graduate Internship Programme focused on business functions.</p>
          <div>
            <p className="font-semibold">Requirements:</p>
            <ul className="list-disc ml-5">
              <li>Completed Bachelor's degree or higher in relevant area.</li>
              <li>Strong communication (verbal & written).</li>
              <li>Good Microsoft Office skills (Excel, Word, PowerPoint).</li>
              <li>Positive, entrepreneurial attitude.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Field Areas:</p>
            <ul className="list-disc ml-5">
              <li>Commerce</li>
              <li>Procurement & Operations</li>
              <li>Transformation</li>
              <li>Finance</li>
              <li>Marketing</li>
              <li>Human Resources</li>
              <li>Corporate Affairs</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Unilever: Learnership Opportunities 2026",
      key: "unilever",
      details: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold">About:</p>
            <p>Unilever's 2026 learnership is more operations / production focused rather than a corporate graduate internship, typically offered at factories such as in Boksburg.</p>
          </div>
          <div>
            <p className="font-semibold">Requirements:</p>
            <ul className="list-disc ml-5">
              <li>National Senior Certificate (Matric) with at least Maths & Science OR an N2/N3/N4 Engineering qualification.</li>
              <li>Commitment to complete assessments and workplace logbook requirements.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Skills & Competencies:</p>
            <ul className="list-disc ml-5">
              <li>Basic machinery and quality monitoring.</li>
              <li>Teamwork and safety awareness.</li>
              <li>Communication and problem-solving focus.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "South African National Roads Agency (SANRAL): Internships 2026",
      key: "sanral",
      details: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold">About:</p>
            <p>South African National Roads Agency offers engineering-focused internships (Asset Management & Research & Innovation).</p>
          </div>
          <div>
            <p className="font-semibold">Duration & Pay:</p>
            <ul className="list-disc ml-5">
              <li>Full-time 24-month programme.</li>
              <li>Approx R96 000 per year.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Requirements:</p>
            <ul className="list-disc ml-5">
              <li>Civil Engineering NQF 6+ qualification (Asset Management) OR NQF 7 in Public Admin & Management (Research & Innovation).</li>
              <li>CV, cover letter, ID, certified qualifications & transcripts.</li>
              <li>Able to relocate to Pretoria.</li>
            </ul>
          </div>
        </div>
      ),
    },
  ] : isLatestLearnerships ? [
    {
      title: "MICT SETA: ICT & Digital Skills Learnership",
      key: "mict-seta",
      details: (
        <div className="space-y-4">
          <p><strong>About:</strong> MICT SETA offers accredited learnerships in ICT and digital skills, combining classroom learning with workplace experience in systems development, IT support, and digital marketing.</p>
          <div>
            <p className="font-semibold">Duration & Stipend:</p>
            <ul className="list-disc ml-5">
              <li>Typically 12-24 months</li>
              <li>Monthly stipend: R3,000 - R6,500 (varies by level)</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Requirements:</p>
            <ul className="list-disc ml-5">
              <li>South African citizen or permanent resident</li>
              <li>Age 18-35</li>
              <li>Matric (Grade 12) or equivalent qualification</li>
              <li>Unemployed at time of application</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Fields:</p>
            <p>Systems Development, IT Support, Digital Marketing</p>
          </div>
        </div>
      ),
    },
    {
      title: "MERSETA: Engineering & Manufacturing Learnership",
      key: "merseta",
      details: (
        <div className="space-y-4">
          <p><strong>About:</strong> MERSETA provides learnerships in engineering and manufacturing sectors including welding, fitting, turning, and mechanical engineering roles.</p>
          <div>
            <p className="font-semibold">Duration & Stipend:</p>
            <ul className="list-disc ml-5">
              <li>12-24 months typically</li>
              <li>Includes workplace experience with stipend</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Requirements:</p>
            <ul className="list-disc ml-5">
              <li>South African citizenship</li>
              <li>Matric with Mathematics and Science preferred</li>
              <li>Age 18-35</li>
              <li>Unemployed status</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Fields:</p>
            <p>Welding, Fitting, Turning, Mechanical Engineering, Technical trades</p>
          </div>
        </div>
      ),
    },
    {
      title: "W&RSETA: Retail Operations Learnership",
      key: "wrseta",
      details: (
        <div className="space-y-4">
          <p><strong>About:</strong> Wholesale and Retail SETA offers learnerships in retail operations, sales, and stock control with practical experience in the retail sector.</p>
          <div>
            <p className="font-semibold">Duration & Stipend:</p>
            <ul className="list-disc ml-5">
              <li>12-24 months</li>
              <li>Monthly stipend provided</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Requirements:</p>
            <ul className="list-disc ml-5">
              <li>South African citizenship</li>
              <li>Grade 12 (Matric)</li>
              <li>Age 18-35</li>
              <li>Unemployed status required</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Fields:</p>
            <p>Retail Operations, Sales, Stock Control, Customer Service</p>
          </div>
        </div>
      ),
    },
    {
      title: "BANKSETA: Banking & Finance Learnership",
      key: "bankseta",
      details: (
        <div className="space-y-4">
          <p><strong>About:</strong> Banking sector learnerships offering structured training and on-the-job experience in banking and financial services roles.</p>
          <div>
            <p className="font-semibold">Duration & Stipend:</p>
            <ul className="list-disc ml-5">
              <li>12-24 months</li>
              <li>Competitive monthly stipend</li>
              <li>NQF-registered qualification upon completion</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Requirements:</p>
            <ul className="list-disc ml-5">
              <li>South African citizen</li>
              <li>Matric certificate</li>
              <li>Age 18-35</li>
              <li>Unemployed at application time</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Fields:</p>
            <p>Banking Services, Finance, Customer Service, Administrative roles</p>
          </div>
        </div>
      ),
    },
    {
      title: "UIF-LAP: Free 12-Month Learnership Programme",
      key: "uif-lap",
      details: (
        <div className="space-y-4">
          <p><strong>About:</strong> UIF Labour Activation Programme offers free learnerships across multiple sectors including Agriculture, Construction, ICT, Environmental practice, and Admin roles.</p>
          <div>
            <p className="font-semibold">Duration & Stipend:</p>
            <ul className="list-disc ml-5">
              <li>12-month structured programme</li>
              <li>Stipends vary by sector (R3,000 - R6,500 monthly)</li>
              <li>Free to apply</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Available Sectors:</p>
            <ul className="list-disc ml-5">
              <li>Agriculture</li>
              <li>Construction</li>
              <li>ICT</li>
              <li>Environmental practice</li>
              <li>Administrative roles</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Eligibility:</p>
            <p>South African citizen, 18-35 years old, unemployed, all provinces covered</p>
          </div>
        </div>
      ),
    },
    {
      title: "Department Learnerships: Agriculture & Rural Development",
      key: "dept-agriculture",
      details: (
        <div className="space-y-4">
          <p><strong>About:</strong> Department of Agriculture & Rural Development offers learnerships in agricultural and rural development with NQF Level 2-4 qualifications.</p>
          <div>
            <p className="font-semibold">Duration & Stipend:</p>
            <ul className="list-disc ml-5">
              <li>12-24 months (varies)</li>
              <li>Monthly stipend provided</li>
              <li>NQF registered qualification</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Requirements:</p>
            <ul className="list-disc ml-5">
              <li>Age 18-35 years</li>
              <li>South African citizenship</li>
              <li>Matric or equivalent</li>
              <li>Unemployed status</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Focus Areas:</p>
            <p>Agricultural skills, Rural development, Sustainable farming practices</p>
          </div>
        </div>
      ),
    },
    {
      title: "LearnMe Learnership 2026: Business Admin & Marketing",
      key: "learnme",
      details: (
        <div className="space-y-4">
          <p><strong>About:</strong> LearnMe offers business administration, marketing, and contact centre support learnerships across major South African cities with practical workplace experience.</p>
          <div>
            <p className="font-semibold">Duration & Stipend:</p>
            <ul className="list-disc ml-5">
              <li>12-month learnerships</li>
              <li>Monthly stipend during programme</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Fields Available:</p>
            <ul className="list-disc ml-5">
              <li>Business Administration</li>
              <li>Marketing</li>
              <li>Contact Centre Operations</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Requirements:</p>
            <ul className="list-disc ml-5">
              <li>South African citizen</li>
              <li>Matric (Grade 12)</li>
              <li>Age 18-35</li>
              <li>Must be unemployed</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "YES Learnership: National Youth Employment Service",
      key: "yes-learnership",
      details: (
        <div className="space-y-4">
          <p><strong>About:</strong> National Youth Service (YES) offers 12-month paid work experience and skills development through various companies and public sector partners across South Africa.</p>
          <div>
            <p className="font-semibold">Duration & Pay:</p>
            <ul className="list-disc ml-5">
              <li>12-month paid work experience</li>
              <li>Monthly stipend and benefits</li>
              <li>Skills training included</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Eligibility:</p>
            <ul className="list-disc ml-5">
              <li>South African citizen</li>
              <li>Age 18-35 years old</li>
              <li>Unemployed</li>
              <li>Willing to work in various sectors</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Available Across:</p>
            <p>Retail, Manufacturing, Finance, ICT, and other sectors nationwide</p>
          </div>
        </div>
      ),
    },
  ] : [];

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-primary section-padding">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground inline-block mb-4">
              {post.category}
            </span>
            
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {(isTopInternshipsGuide || isLatestLearnerships) && (
        <section className="section-padding bg-muted">
          <div className="container-main">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                {isTopInternshipsGuide ? "Available Internships (2026)" : "Available Learnerships"}
              </h2>
              <p className="text-muted-foreground mt-2">Browse verified opportunities. Click any card to view key requirements and details.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {opportunities.map((item, index) => (
                <div
                  key={item.key}
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate(`/internship/${item.key}`)}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") navigate(`/internship/${item.key}`); }}
                  className="text-left card-elevated overflow-hidden group animate-fade-up focus:outline-none focus:ring-2 focus:ring-accent"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <article className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">
                        {item.title.includes("Learnership") ? "Learnerships" : "Internships"}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {isTopInternshipsGuide ? "Graduate and early-career opportunities across South Africa for 2026." : "Gain nationally recognised qualifications with workplace experience and stipends."}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>Internships24</span>
                      </div>
                      <Button variant="outline" size="sm" onClick={(e) => { e.stopPropagation(); navigate(`/internship/${item.key}`); }}>View Details</Button>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_280px] gap-12">
              {/* Main Content */}
              <article className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-accent hover:prose-a:text-accent/80">
                <div 
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
                />
              </article>

              {/* Sidebar */}
              <aside className="space-y-6">
                
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Explore More Articles
            </h2>
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Simple markdown-like content formatter
function formatContent(content: string): string {
  return content
    .split('\n')
    .map(line => {
      // Headers
      if (line.startsWith('## ')) {
        return `<h2 class="text-2xl font-bold mt-8 mb-4">${line.slice(3)}</h2>`;
      }
      if (line.startsWith('### ')) {
        return `<h3 class="text-xl font-semibold mt-6 mb-3">${line.slice(4)}</h3>`;
      }
      // Bold text
      line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      // Lists
      if (line.startsWith('- ')) {
        return `<li class="ml-4">${line.slice(2)}</li>`;
      }
      // Numbered lists
      if (/^\d+\.\s/.test(line)) {
        return `<li class="ml-4">${line.replace(/^\d+\.\s/, '')}</li>`;
      }
      // Warning/emoji lines
      if (line.includes('🚩') || line.includes('⚠️')) {
        return `<p class="bg-destructive/10 p-3 rounded-lg my-2">${line}</p>`;
      }
      // Empty lines
      if (line.trim() === '') {
        return '';
      }
      // Regular paragraphs
      return `<p class="my-4">${line}</p>`;
    })
    .join('\n');
}

export default BlogArticle;
