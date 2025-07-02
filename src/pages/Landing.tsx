import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Transformation from "../components/landing/Transformation";
import Events from "../components/landing/Events";
import CTA from "../components/CTA";
import Contact from "../components/landing/Contact";

const Landing = () => {
  return (
    <main className="bg-background">
      {/* Hero section - full width with proper spacing */}
      <section className="w-full">
        <Hero />
      </section>
      
      {/* About section */}
      <section className="w-full py-20 md:py-24 lg:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <About />
        </div>
      </section>
      
      {/* Transformation section - with background color for visual separation */}
      <section className="w-full py-20 md:py-24 lg:py-28 bg-background/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Transformation />
        </div>
      </section>
      
      {/* Events section */}
      <section className="w-full py-20 md:py-24 lg:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Events />
        </div>
      </section>
      
      {/* CTA section - full width for impact */}
      <section className="w-full py-20 md:py-24 lg:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <CTA />
        </div>
      </section>
      
      {/* Contact section */}
      <section className="w-full py-20 md:py-24 lg:py-28">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Contact />
        </div>
      </section>
    </main>
  );
};

export default Landing;
