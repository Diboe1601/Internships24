import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { WhoItsForSection } from "@/components/home/WhoItsForSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title: "Internships24 | Internships, Learnerships & Graduate Jobs in SA",
    description: "Find internships, learnerships, bursaries and graduate opportunities in South Africa. Free, verified and updated daily.",
    canonical: "https://www.internships24.co.za/",
  });

  return (
    <Layout>
      <HeroSection />
      <WhatWeDoSection />
      <WhyChooseUsSection />
      <WhoItsForSection />
      <CategoriesSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;