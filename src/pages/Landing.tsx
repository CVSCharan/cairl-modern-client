import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Transformation from "../components/landing/Transformation";
import Events from "../components/landing/Events";
import CTA from "../components/CTA";
import Contact from "../components/landing/Contact";

const Landing = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="pb-20">
        <Hero />
      </section>

      <section className="py-10">
        <About />
      </section>

      <section className="py-10">
        <Transformation />
      </section>

      <section className="py-10">
        <Events />
      </section>

      <section className="py-10">
        <CTA />
      </section>

      <section className="py-10">
        <Contact />
      </section>
    </main>
  );
};

export default Landing;
