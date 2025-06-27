import FAQs from "../components/about/FAQs";
import Mission from "../components/about/Mission";
import Vision from "../components/about/Vision";
import Team from "../components/about/Team";
import { useEffect } from "react";
import { Separator } from "../components/ui/separator";

const About = () => {
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Remove the '#' from the hash
      const elementId = window.location.hash.substring(1);
      // Find the element by ID
      const element = document.getElementById(elementId);

      if (element) {
        // Smooth scroll to the element
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Update URL without jumping (optional)
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.hash
        );
      }
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="relative w-full">
        {/* Background Element - Now covers header to form */}
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-35 pointer-events-none">
          <img
            src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750381598/Element-1_tsbawm.png"
            alt="Background Element"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-8 relative z-20">
          {/* About Header */}
          <div className="text-center flex flex-col items-center mb-12">
            <h4 className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </h4>
            <h1 className="text-4xl font-bold text-foreground mb-4 w-[700px]">
              India’s Collaborative AI Ecosystem for Social Good, Research &
              Innovation
            </h1>
          </div>
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750244957/about_img_1_b5biqp.png"
              alt="About CAiRL"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
          {/* Our Journey Section */}
          <div className="text-center flex flex-col items-center my-12 mt-24">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Journery
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-8 w-[700px]">
              Bridging Innovation and Impact
            </h1>
            <p className="about-text text-justify w-full text-muted-foreground">
              The Collaborative AI Research Labs Foundation (CAiRL) was founded
              with a clear and focused mission: to harness the transformative
              power of artificial intelligence (AI) to drive meaningful change
              across industries and communities. Established in Hyderabad, CAiRL
              serves as a hub for collaboration, innovation, and ethical
              development in the AI space, uniting key stakeholders from
              academia, industry, and government to address some of the world’s
              most pressing challenges.
            </p>
            <p className="about-text text-justify w-full text-muted-foreground">
              At CAiRL, we believe that AI has the potential to create a
              positive societal impact when developed responsibly and
              inclusively. Our foundation is committed to advancing AI
              technologies that are not only cutting-edge but also scalable,
              ethical, and aligned with the betterment of society. We work
              across a wide range of sectors including healthcare, agriculture,
              biopharma, education, and more, driving forward AI solutions that
              make a tangible difference in the world.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-12" />

      {/* Mission Section */}
      <Mission />

      <Separator className="my-12" />

      <div className="relative w-full">
        <div className="relative z-20">
          {/* Vision Section */}
          <Vision />

          {/* Team Section */}
          <Team />
        </div>
      </div>

      <Separator className="my-12" />

      {/* MOU Section */}
      <div id="mou" className="relative bg-card pt-46 lg:pt-52 pb-10">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 mt-12">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h4 className="inline-block px-4 py-2 rounded-full bg-[#E5F5FC] text-[#005BA9] text-sm font-medium mb-4">
              MOUs
            </h4>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              MOUs and Strategic Partnerships
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              At CAIRL, we understand that collaboration is key to driving
              innovation and creating impactful AI solutions. We are proud to
              have formed several strategic partnerships and signed Memorandums
              of Understanding (MoUs) with leading organizations, institutions,
              and corporations to advance AI research, development, and
              application.
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Know more
            </button>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245474/about_mou_img_ekci19.png"
              alt="MOU Partnerships"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <Separator className="my-12" />

      {/* FAQs Section */}
      <div id="faqs">
        <FAQs />
      </div>
    </main>
  );
};

export default About;
