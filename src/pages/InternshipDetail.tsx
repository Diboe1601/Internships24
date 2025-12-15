import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getInternshipByKey } from "@/data/internships";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const InternshipDetail: React.FC = () => {
  const { key: rawKey } = useParams();
  const navigate = useNavigate();

  // Normalize known aliases to avoid 404 on mismatched keys
  const key = rawKey === "sa-government" ? "sa-govt" : rawKey;

  const internship = key ? getInternshipByKey(key) : undefined;

  if (!internship) {
    return (
      <div className="container-main section-padding">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/blog/top-internships-graduates-south-africa-2026">Internships Guide</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mt-6 rounded-xl border bg-card p-6">
          <h1 className="text-2xl font-bold">Internship Not Found</h1>
          <p className="mt-2 text-muted-foreground">We couldn't find the internship you're looking for. It may have been moved or the link is incorrect.</p>
          <div className="mt-4 flex gap-3">
            <Button variant="default" onClick={() => navigate(-1)}>Go Back</Button>
            <Button variant="outline" asChild>
              <Link to="/blog/top-internships-graduates-south-africa-2026">Back to Guide</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-main section-padding">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/blog/top-internships-graduates-south-africa-2026">Internships Guide</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>{internship.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-6 grid gap-6 md:grid-cols-[2fr_1fr]">
        <article className="card-elevated p-6">
          <h1 className="text-3xl font-bold tracking-tight">{internship.title}</h1>
          <div className="prose prose-neutral dark:prose-invert mt-6 max-w-none">
            {internship.details}
          </div>
          <div className="mt-8 flex gap-3">
            <Button variant="default" onClick={() => navigate(-1)}>Go Back</Button>
            <Button variant="outline" asChild>
              <Link to="/blog/top-internships-graduates-south-africa-2026">Back to Guide</Link>
            </Button>
          </div>
        </article>


      </div>
    </div>
  );
};

export default InternshipDetail;