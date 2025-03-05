import type { Metadata } from "next";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import AboutSection from "@/components/about-section";
import WhyChooseUs from "@/components/why-choose-us";
import GallerySection from "@/components/gallery-section";
import BlogSection from "@/components/blog-section";
import TestimonialSection from "@/components/testimonial-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Brick Property - Solusi Properti Terbaik di Indonesia",
  description: "Brick Property menyediakan layanan properti terbaik dengan harga terjangkau dan kualitas terpercaya di seluruh Indonesia.",
  keywords: "properti, rumah, apartemen, tanah, jual beli properti, sewa properti, investasi properti, brick property",
  openGraph: {
    title: "Brick Property - Solusi Properti Terbaik di Indonesia",
    description: "Brick Property menyediakan layanan properti terbaik dengan harga terjangkau dan kualitas terpercaya di seluruh Indonesia.",
    url: "https://brickproperty.id",
    siteName: "Brick Property",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brick Property",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <GallerySection />
      <BlogSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
