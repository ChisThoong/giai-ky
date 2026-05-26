import { SiteHeader } from "@/components/landing/site-header";
import { HeroSection } from "@/components/landing/hero-section";
import { TrustBar } from "@/components/landing/trust-bar";
import { ProductCategoriesSection } from "@/components/landing/product-categories-section";
import { CategorySection } from "@/components/landing/category-section";
import { FeaturedProducts } from "@/components/landing/featured-products";
import { BrandStory } from "@/components/landing/brand-story";
import { CommitmentsSection } from "@/components/landing/commitments-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { BlogSection } from "@/components/landing/blog-section";
import { ConsultationCta } from "@/components/landing/consultation-cta";
import { SiteFooter } from "@/components/landing/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBar />
        {/* <ProductCategoriesSection /> */}
        <CategorySection />
        <FeaturedProducts />
        <BrandStory />
        <CommitmentsSection />
        <TestimonialsSection />
        <BlogSection />
        <ConsultationCta />
      </main>
      <SiteFooter />
    </>
  );
}
