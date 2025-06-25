import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Transformation from "../components/landing/Transformation";
import Events from "../components/landing/Events";
import CTA from "../components/CTA";
import Contact from "../components/landing/Contact";

const Landing = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <section className="animate-fadeIn">
          <Hero />
        </section>

        <section className="animate-fadeIn [animation-delay:200ms]">
          <About />
        </section>

        <section className="animate-fadeIn [animation-delay:300ms]">
          <Transformation />
        </section>

        <section className="animate-fadeIn [animation-delay:400ms]">
          <Events />
        </section>

        <section className="animate-fadeIn [animation-delay:500ms] bg-secondary rounded-xl shadow-lg p-6 md:p-8">
          <CTA />
        </section>

        <section className="animate-fadeIn [animation-delay:600ms]">
          <Contact />
        </section>
      </div>
    </main>
  );
};

export default Landing;
