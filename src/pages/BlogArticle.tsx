import { Layout } from "@/components/layout/Layout";
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts";
import { getLearnershipsData } from "@/data/learnerships";
import { useSEO } from "@/hooks/useSEO";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const navigate = useNavigate();

  // ✅ Must be before early return to follow Rules of Hooks
  useSEO({
    title: post ? `${post.title} | Internships24` : "Blog | Internships24",
    description: post ? post.excerpt : "Read career tips, internship and learnership guides for South African graduates.",
    canonical: post ? `https://www.internships24.co.za/blog/${post.slug}` : "https://www.internships24.co.za/blog",
  });

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const isTopInternshipsGuide = post.slug === "top-internships-graduates-south-africa-2026";
  const isLatestLearnerships = post.slug === "latest-learnerships-south-africa";
  
  const learnershipsData = isLatestLearnerships ? getLearnershipsData() : [];
  
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
          <p><strong>About:</strong> Visa South Africa, intern roles usually sit within company settings - think tech, money matters, or office operations. The full picture for 2026 might still be missing some pieces.</p>
          <div>
            <p className="font-semibold">Expected Requirements (typical):</p>
            <ul className="list-disc ml-5">
              <li>Last year of study counts too, if you are working toward a degree in something like computer tech, money matters, selling stuff, or company operations. </li>
              <li>Sitting quietly helps you hear what matters. A clear head spots patterns others miss.</li>
              <li>Has legal permission to work within South Africa.</li>
              <li>A resume often shows up alongside a cover note plus academic records. Usually these documents get requested together.
            </li>
            </ul>
          </div>
          <p className="text-muted-foreground">Note: When Visa posts jobs officially, exact qualifications and tasks will show up there instead. Specifics come later through their proper channels rather than here. Details like role fits and responsibilities appear only when openings go live. What you need matches what they publish at launch time. Official listings carry the real requirements once available.</p>
        </div>
      ),
    },
    {
      title: "SA Government: Internship 2026",
      key: "sa-govt",
      details: (
        <div className="space-y-4">
          <p><strong>About:</strong> Government offices in South Africa, like Health or Home Affairs, offer internships and training while you work. These chances pop up in places such as Public Works, the Police, and local councils too. Each department handles its own version of these learning paths. Some start fresh each season, others keep going year-round. You might find one near where you live. Training happens right inside the job setting across multiple services.
</p>
          <div>
            <p className="font-semibold">General Requirements:</p>
            <ul className="list-disc ml-5">
              <li>South African citizen, unemployed.</li>
              <li>A diploma or degree, minimum requirement for internship roles.</li>
              <li>Start off by filling out the Z83 form. Then attach your updated resume.</li>
              <li>Include copies of official papers, stamped by a commissioner.</li>
              <li>Most folks fall between eighteen and thirty five, though some teams adjust slightly depending on role.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Common Fields Available:</p>
            <ul className="list-disc ml-5">
              <li>Human Resources, Finance and Supply Chain </li>
              <li>ICT/Admin</li>
              <li>Public Management and Policy</li>
              <li>Engineering & Technical (some SOEs like Eskom, SANRAL)</li>
              <li>Environmental and Social Sciences</li>
              <li>Municipal services (water, sanitation, planning)</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Benefits:</p>
            <p>A set routine on the job, most often including a fixed payment each month.</p>
          </div>
        </div>
      ),
    },
    {
      title: "Mercedes-Benz: Graduate Internships 2026",
      key: "mercedes-benz",
      details: (
        <div className="space-y-4">
          <p><strong>About:</strong> Mercedes-Benz South Africa brings graduates into real work at a top-tier car maker through its 2026 development path. While learning on site, participants gain hands-on skills within an established global brand known for engineering. Instead of just theory, the programme focuses on doing, placing newcomers directly where vehicles come to life. Through guided support, young professionals grow alongside seasoned teams shaping future mobility. Because every role connects to actual projects, trainees see how their efforts move forward with production.</p>
          <div>
            <p className="font-semibold">Requirements:</p>
            <ul className="list-disc ml-5">
              <li>South African citizen.</li>
              <li>Finished a higher education course - either a diploma at level six, a degree, or an advanced diploma ranked seven on the national framework.</li>
              <li>Achieve at least a 65 percent on average across your academic program.</li>
              <li>Graduated within the past 3 years.</li>
              <li>Besides your resume, toss in a verified copy of your high school diploma along with any higher education qualifications. Your national ID should be part of the pile too. Tertiary level transcripts need to show up, officially stamped. Leave nothing out - every document matters just as much as the next.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Eligible Fields:</p>
            <ul className="list-disc ml-5">
              <li>Information Technology and Computer Science</li>
              <li>Accounting and Financial Management</li>
              <li>Business/Marketing/Project Management</li>
              <li>Logistics and Supply Chain</li>
              <li>Data Science and Analytics</li>
              <li>Social Sciences and Organisational Studies</li>
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
          <p><strong>About:</strong> Pernod Ricard South Africa runs a year-long YES internship for grads. This one zeroes in on how businesses operate. Each role ties into real work, not just theory. Think twelve months of learning by doing. The programme kicks off once a year. It targets recent graduates wanting hands-on experience. Business functions form the core - nothing vague, nothing stretched. Real tasks. Real exposure. A chance to grow where decisions matter.</p>
          <div>
            <p className="font-semibold">Requirements:</p>
            <ul className="list-disc ml-5">
              <li>Completed Bachelor's degree or higher in relevant area.</li>
              <li>Words flow clear when speaking, plus thoughts land just right on paper. </li>
              <li>Confident using Excel, also comfortable with Word. Slides made in PowerPoint come together without trouble. </li>
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
              <li>Sticking with every assessment until it's fully done. Workplace logbooks get filled out step by step, without skipping parts.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Skills & Competencies:</p>
            <ul className="list-disc ml-5">
              <li>Fine tools spinning under steady eyes. Machines hum while hands check each part's shape. </li>
              <li>Working together means watching out for one another. When people pay attention, accidents happen less often. </li>
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
              <li>Close to R96 000 per year.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Requirements:</p>
            <ul className="list-disc ml-5">
              <li>A solid background in civil engineering at level six or higher helps, especially if it focuses on handling assets. Alternatively, a public administration degree at level seven works too - when tied to research and innovation.</li>
              <li>A résumé sits beside a letter of introduction, an official identity document. Academic records appear next, along with proof they’re verified.</li>
              <li>Able to relocate to Pretoria.</li>
            </ul>
          </div>
        </div>
      ),
    },
  ] : learnershipsData;

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
  const lines = content.split('\n');
  const result: string[] = [];
  const chunkSize = 8;
  const flushBuffer = (buf: string[]) => {
    if (buf.length === 0) return;
    const joined = buf.join(' ');
    result.push(`<p class="my-4">${joined}</p>`);
    buf.length = 0;
  };
  let i = 0;
  let paragraphBuffer: string[] = [];
  while (i < lines.length) {
    let line = lines[i];
    if (line.startsWith('## ')) {
      flushBuffer(paragraphBuffer);
      result.push(`<h2 class="text-2xl font-bold mt-8 mb-4">${line.slice(3)}</h2>`);
      i++;
      continue;
    }
    if (line.startsWith('### ')) {
      flushBuffer(paragraphBuffer);
      result.push(`<h3 class="text-xl font-semibold mt-6 mb-3">${line.slice(4)}</h3>`);
      i++;
      continue;
    }
    if (line.includes('🚩') || line.includes('⚠️')) {
      flushBuffer(paragraphBuffer);
      result.push(`<p class="bg-destructive/10 p-3 rounded-lg my-2">${line}</p>`);
      i++;
      continue;
    }
    if (line.includes('[Click here to apply !!!]')) {
      flushBuffer(paragraphBuffer);
      const url = line.match(/\((.*?)\)/)?.[1] || '#';
      result.push(`<div class="my-6"><a href="${url}" target="_blank" rel="noopener noreferrer" class="inline-block bg-accent text-accent-foreground px-6 py-3 rounded-lg font-bold hover:bg-accent/90 transition-colors shadow-lg animate-pulse">Click here to apply !!!</a></div>`);
      i++;
      continue;
    }
    if (line.trim() === '') {
      flushBuffer(paragraphBuffer);
      i++;
      continue;
    }
    const isDash = (s: string) => s.startsWith('- ');
    const isNumbered = (s: string) => /^\d+\.\s/.test(s);
    if (isDash(line) || isNumbered(line)) {
      flushBuffer(paragraphBuffer);
      const items: string[] = [];
      while (i < lines.length && (isDash(lines[i]) || isNumbered(lines[i]))) {
        const raw = lines[i].replace(/^\d+\.\s/, '').replace(/^- /, '');
        const bolded = raw.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').trim();
        const sentence = /[.!?]$/.test(bolded) ? bolded : `${bolded}.`;
        items.push(sentence);
        i++;
      }
      for (let start = 0; start < items.length; start += chunkSize) {
        const chunk = items.slice(start, start + chunkSize).join(' ');
        result.push(`<p class="my-4">${chunk}</p>`);
      }
      continue;
    }
    const processed = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    paragraphBuffer.push(processed);
    if (paragraphBuffer.length === chunkSize) {
      flushBuffer(paragraphBuffer);
    }
    i++;
  }
  flushBuffer(paragraphBuffer);
  return result.join('\n');
}

export default BlogArticle;
