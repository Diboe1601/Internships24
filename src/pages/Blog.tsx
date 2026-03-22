import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { blogPosts, categories } from "@/data/blogPosts";
import { useSEO } from "@/hooks/useSEO";

const Blog = () => {
  useSEO({
    title: "Career Resources & Opportunities | Internships24",
    description: "Internship and learnership guides, tips and career resources for South African graduates and job seekers. Updated regularly.",
    canonical: "https://www.internships24.co.za/blog",
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-primary section-padding">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground mb-6">
              Career Resources & Opportunities
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Right here at Internships24, you’ll find a central spot built just for South Africans stepping into work life. 
              Whether still studying, recently done with school, or searching for what comes next, this is where useful career details gather. One location. Clear answers. No confusion. 
              Everything aimed at helping learners and new professionals move forward without guesswork.
              <br /><br />
              From tips on applications to listings for internships, we share what matters. Hunting a graduate role? We’ve got details that fit where you are. 
              Even if classes keep you busy now, useful advice waits whenever you’re ready. Learnerships, bursaries - spot them early through our updates. Clarity comes from knowing next steps, not just hoping. Success often follows those who act with direction, not just effort. No jargon, no noise - just clear paths forward. Finding entry level roles feels easier when options appear in one place. 
              Preparation changes outcomes more than luck does. Stress fades when choices become clearer.
              <br /><br />
              Thinking about jobs in South Africa shapes every word here. Clarity comes first, so ideas stay clear. What matters fits local needs without extra noise. 
              Ideas work in real situations because they connect to actual steps people can take.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-background">
        <div className="container-main">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent first:bg-accent first:text-accent-foreground"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="card-elevated overflow-hidden group animate-fade-up block"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <article className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <span className="text-accent group-hover:translate-x-1 transition-transform inline-flex items-center text-sm font-medium">
                      Read Full Article
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Career Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Stay Updated With New Opportunities
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every now and then, fresh openings appear - internships, training paths, roles for recent grads. 
              Stay close to this spot online, visit again soon, maybe save it, just in case something big shows up tomorrow.
              <br /><br />
              Starting feels tricky when directions seem unclear. Our support steps in right there. It walks beside you through each part of applying. 
              Knowing what is needed becomes easier with this help. Chances go up when confusion fades away.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/get-started">
                Learn How to Apply
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
