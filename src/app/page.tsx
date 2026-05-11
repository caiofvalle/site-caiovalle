import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Gallery />
        <div className="section-divider" />
        <Events />
        <div className="section-divider" />
        <About />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
