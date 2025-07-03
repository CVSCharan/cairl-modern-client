import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Transformation from "../components/landing/Transformation";
import Events from "../components/landing/Events";
import CTA from "../components/CTA";
import Contact from "../components/landing/Contact";

const Landing = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 space-y-8">
        <Hero />

        <section>
          <About />
        </section>

        <Transformation />

        <Events />

        <section>
          <CTA />
        </section>

        <Contact />
      </div>
    </main>
  );
};

export default Landing;
