import { Layout } from "@/components/layout/Layout";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, User, Share2 } from "lucide-react";
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

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
                {/* Share */}
                <div className="card-elevated p-6">
                  <h3 className="font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    Share This Article
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Found this helpful? Share it with others who might benefit from this information.
                  </p>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="card-elevated p-6">
                    <h3 className="font-heading font-bold text-foreground mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((related) => (
                        <Link
                          key={related.id}
                          to={`/blog/${related.slug}`}
                          className="block group"
                        >
                          <h4 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2">
                            {related.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            {related.readTime}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="card-elevated p-6 bg-accent/5">
                  <h3 className="font-heading font-bold text-foreground mb-2">
                    Ready to Start?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn how to apply for opportunities safely.
                  </p>
                  <Button variant="accent" size="sm" asChild className="w-full">
                    <Link to="/get-started">Get Started</Link>
                  </Button>
                </div>
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
