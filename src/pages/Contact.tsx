import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
});

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email and we'll respond as soon as possible.",
    value: "internships24.official@gmail.com",
    href: "mailto:internships24.official@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "We serve the entire South African community.",
    value: "South Africa",
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "We aim to respond to all enquiries within:",
    value: "1-2 Business Days",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitResult, setSubmitResult] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const fd = new FormData(form);
      fd.append("access_key", "2bc06493-5008-4fef-9580-e964e72c01cb");
      fd.append("from_name", "Internships24 Website");
      fd.append("replyto", formData.email);
      fd.append("subject", formData.subject ? `New message: ${formData.subject}` : "New Contact Submission");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });

      const data = await response.json();
      if (data.success) {
        setSubmitResult("Success!");
        setIsSubmitted(true);
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
      } else {
        setSubmitResult("Error");
        toast({
          title: "Submission Error",
          description: data.message || "Please try again later.",
        });
      }
    } catch (err) {
      setSubmitResult("Error");
      toast({
        title: "Network Error",
        description: "Could not submit the form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-primary section-padding">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Have questions or feedback? We&apos;d love to hear from you. Get in touch 
              and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="card-elevated p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {info.description}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-accent font-medium hover:underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-foreground font-medium">
                          {info.value}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-elevated p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for contacting us. We&apos;ll get back to you within 1-2 business days.
                    </p>
                    <Button variant="accent" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Sello Mpho"
                          value={formData.name}
                          onChange={handleChange}
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive">{errors.name}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="sello@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleChange}
                        className={errors.subject ? "border-destructive" : ""}
                      />
                      {errors.subject && (
                        <p className="text-sm text-destructive">{errors.subject}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your enquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message}</p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    {submitResult && (
                      <p className="text-sm text-muted-foreground mt-2">{submitResult}</p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
