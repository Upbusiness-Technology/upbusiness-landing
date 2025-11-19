import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Benefits />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
