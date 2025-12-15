import { Link } from "react-router-dom";
import { Briefcase, Mail, MapPin } from "lucide-react";

const footerLinks = {
  explore: [
    { name: "Internships", href: "/blog" },
    { name: "Learnerships", href: "/blog" },
    { name: "Graduate Programmes", href: "/blog" },
    { name: "Bursaries", href: "/blog" },
    { name: "Career Tips", href: "/blog" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Get Started", href: "/get-started" },
    { name: "Blog", href: "/blog" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Disclaimer", href: "/disclaimer" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Briefcase className="h-5 w-5" />
              </div>
              <span className="font-heading text-xl font-bold">
                Internships<span className="text-accent">24</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Helping South African graduates and students find verified internships, 
              learnerships, and career opportunities.
            </p>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>South Africa</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:internships24.office@gmail.com" className="hover:text-accent transition-colors">
                  internships24.office@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/50 text-center mb-4">
            Internships24 is an independent informational website. We are not a recruitment agency 
            and do not guarantee job placements. All opportunities shared are for informational purposes only.
          </p>
          <p className="text-sm text-primary-foreground/70 text-center">
            © {new Date().getFullYear()} Internships24. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
