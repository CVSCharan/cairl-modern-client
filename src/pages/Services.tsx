import { useEffect } from "react";
import CTA from "../components/CTA";
import { motion } from "framer-motion";
import SEOMetadata from "../components/seo/SEOMetadata";

const Services = () => {
  useEffect(() => {
    // Disable scroll restoration so we can manually control it
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    setTimeout(() => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }, 100); // small delay to ensure DOM is rendered
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <SEOMetadata
        title="CAiRL Services - AI Transformation, Education, and Innovation"
        description="Explore the services offered by CAiRL, including AI bootcamps, innovation challenges, startup support, and social impact initiatives. Driving responsible AI transformation."
        keywords="AI services, AI transformation, AI education, AI innovation, startup support, CAiRL"
        ogTitle="CAiRL Services - AI Transformation, Education, and Innovation"
        ogDescription="Explore the services offered by CAiRL, including AI bootcamps, innovation challenges, startup support, and social impact initiatives. Driving responsible AI transformation."
        ogImage="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750332593/services-landing-img_vubko6.jpg"
        ogUrl={window.location.href}
        twitterTitle="CAiRL Services - AI Transformation, Education, and Innovation"
        twitterDescription="Explore the services offered by CAiRL, including AI bootcamps, innovation challenges, startup support, and social impact initiatives. Driving responsible AI transformation."
        twitterImage="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750332593/services-landing-img_vubko6.jpg"
      />
      <div className="relative w-full">
        {/* Professional subtle background */}
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-35 pointer-events-none">
          <img
            src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750381598/Element-1_tsbawm.png"
            alt="Background Element"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 pt-8 px-4 md:px-6">
          {/* Professional Header Section */}
          <div className="text-center mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0.5, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="inline-block px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
            >
              Our Services
            </motion.div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Driving responsible AI transformation through education,
              innovation, and collaboration.
            </h1>
          </div>

          {/* Professional Hero Image */}
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1753022918/Services-banner-img_wox86s.png"
              alt="CAiRL Services"
              className="w-full h-[450px] object-cover rounded-2xl"
            />
          </div>

          {/* Services Section */}
          <section className="space-y-20 mt-24">
            {/* Capacity Building & Knowledge Empowerment */}
            <div id="knowledge-empowerment" className="scroll-mt-20">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Capacity Building & Knowledge Empowerment
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: "AI Bootcamps & Workshops",
                    desc: "Fast-paced, hands-on learning programs designed to build foundational and advanced AI skills across domains.",
                    image:
                      "https://res.cloudinary.com/dnyouhvwj/image/upload/v1753022901/Services-AI_Bootcamps_Workshops_alx4na.png",
                  },
                  {
                    title: "Courses",
                    desc: "Custom-designed training sessions on cutting-edge AI topics delivered by expert practitioners and researchers.",
                    image:
                      "https://res.cloudinary.com/dnyouhvwj/image/upload/v1753022899/Services-Courses_bvnxyc.png",
                  },
                  {
                    title: "Center of Excellence",
                    desc: "Guidance and strategic support to set up AI-focused Centers of Excellence in research institutions and enterprises.",
                    image:
                      "https://res.cloudinary.com/dnyouhvwj/image/upload/v1753022914/Services-CenterofExcellence_tcyvqk.png",
                  },
                  {
                    title: "AI Tech Conferences & Summits",
                    desc: "Annual flagship events that bring together AI thinkers, makers, and leaders to shape the future of responsible innovation.",
                    image:
                      "https://res.cloudinary.com/dnyouhvwj/image/upload/v1753022917/Services-AITechConferences_Summits_rcpnpc.png",
                  },
                ].map((item, idx) => (
                  <ServiceCard
                    key={idx}
                    title={item.title}
                    desc={item.desc}
                    image={item.image}
                  />
                ))}
              </div>
            </div>

            {/* Innovation & Startup Support */}
            <div id="innovation" className="scroll-mt-20">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Innovation & Startup Support
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Hackathons & Innovation Challenges",
                    desc: "Solve real-world challenges through domain-specific AI hackathons and competitions co-hosted with partners.",
                    image:
                      "https://res.cloudinary.com/dnyouhvwj/image/upload/v1753022905/Services-Hackathons_InnovationChallenges_xj9ovn.png",
                  },
                  {
                    title: "Startup Incubators & Innovation Hubs",
                    desc: "Structured support for early-stage AI startups with mentorship, infrastructure, access to compute, and industry networks.",
                    image:
                      "https://res.cloudinary.com/dnyouhvwj/image/upload/v1753022893/Services-StartupIncubators_nnovationHubs_idqjuk.png",
                  },
                  {
                    title: "Joint Research Collaborations",
                    desc: "Collaborate with CAiRL to co-develop research, whitepapers, and deployable AI solutions across sectors.",
                    image:
                      "https://res.cloudinary.com/dnyouhvwj/image/upload/v1753022900/Services-JointResearchCollaborations_ndla5f.png",
                  },
                ].map((item, idx) => (
                  <ServiceCard
                    key={idx}
                    title={item.title}
                    desc={item.desc}
                    image={item.image}
                  />
                ))}
              </div>
            </div>

            {/* Ecosystem Building & Social Impact */}
            <div id="eco-system" className="scroll-mt-20">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Ecosystem Building & Social Impact
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {[
                  {
                    title: "AI for Social Good & Rural Outreach",
                    desc: "Bringing AI to underserved communities by supporting initiatives in agriculture, public health, and education that create real social impact.",
                    image:
                      "https://res.cloudinary.com/dnyouhvwj/image/upload/v1753022916/Services-AIforSocialGood_RuralOutreach_e85egz.png",
                  },
                  {
                    title: "Liaising & Policy Engagement",
                    desc: "Connecting corporates, startups, academia, and policymakers to co-create AI frameworks, influence policy, and build sustainable ecosystems.",
                    image:
                      "https://res.cloudinary.com/dnyouhvwj/image/upload/v1753022925/Services-Liaising_PolicyEngagement_yhesfl.png",
                  },
                ].map((item, idx) => (
                  <ServiceCard
                    key={idx}
                    title={item.title}
                    desc={item.desc}
                    image={item.image}
                  />
                ))}
              </div>
            </div>
          </section>

          <div className="my-28">
            <CTA />
          </div>
        </div>
      </div>
    </main>
  );
};

const ServiceCard = ({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: string;
}) => (
  <div className="bg-card rounded-xl shadow-md border border-border overflow-hidden hover:shadow-xl transition-all">
    <div className="h-40 bg-muted overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-5">
      <h3 className="text-lg font-semibold text-card-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{desc}</p>
      {/* <button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm px-4 py-2 rounded-full font-medium">
        Know more
      </button> */}
    </div>
  </div>
);

export default Services;
