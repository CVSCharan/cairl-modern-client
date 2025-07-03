import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Transformation from "../components/landing/Transformation";
import Events from "../components/landing/Events";
import CTA from "../components/CTA";
import Contact from "../components/landing/Contact";

const Landing = () => {
  return (
    <main className="min-h-screen bg-background">
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
    </main>
  );
};

export default Landing;
