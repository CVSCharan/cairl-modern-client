import CTA from "../components/CTA";
import { motion } from "framer-motion";
import SEOMetadata from "../components/seo/SEOMetadata";
import useSmoothScroll from "../hooks/useSmoothScroll";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const serviceSections = [
  {
    category: "Capacity Building & Knowledge Empowerment",
    services: [
      {
        id: "bootcamps",
        title: "AI Bootcamps",
        description:
          "Fast-paced, hands-on learning programs designed to build foundational and advanced AI skills across domains.",
        bullets: [
          "Build foundational and advanced AI skills.",
          "Hands-on learning across various domains.",
          "Designed for professionals and students.",
        ],
        image:
          "https://res.cloudinary.com/dnyouhvwj/image/upload/v1753022901/Services-AI_Bootcamps_Workshops_alx4na.png",
        reverse: false,
      },
      {
        id: "courses",
        title: "Courses & Workshops",
        description:
          "Custom-designed training sessions on cutting-edge AI topics delivered by expert practitioners and researchers.",
        bullets: [
          "Custom-designed training sessions.",
          "Focus on cutting-edge AI topics.",
          "Delivered by expert practitioners.",
        ],
        image:
          "https://res.cloudinary.com/dnyouhvwj/image/upload/v1753022899/Services-Courses_bvnxyc.png",
        reverse: true,
      },
      {
        id: "coe",
        title: "Center of Excellence Setup",
        description:
          "Guidance and strategic support to set up AI-focused Centers of Excellence in research institutions and enterprises.",
        bullets: [
          "Strategic guidance for setting up CoEs.",
          "Support for research institutions and enterprises.",
          "Build a focused AI innovation hub.",
        ],
        image:
          "https://res.cloudinary.com/dnyouhvwj/image/upload/v1753022914/Services-CenterofExcellence_tcyvqk.png",
        reverse: false,
      },
      {
        id: "summits",
        title: "AI Tech Conferences & Summits",
        description:
          "Annual flagship events that bring together AI thinkers, makers, and leaders to shape the future of responsible innovation.",
        bullets: [
          "Flagship events for AI leaders.",
          "Shape the future of responsible AI.",
          "Networking with thinkers and makers.",
        ],
        image:
          "https://res.cloudinary.com/dnyouhvwj/image/upload/v1753022917/Services-AITechConferences_Summits_rcpnpc.png",
        reverse: true,
      },
    ],
  },
  {
    category: "Innovation & Startup Support",
    services: [
      {
        id: "hackathons",
        title: "Hackathons & Innovation Challenges",
        description:
          "Solve real-world challenges through domain-specific AI hackathons and competitions co-hosted with partners.",
        bullets: [
          "Solve real-world challenges.",
          "Domain-specific AI competitions.",
          "Co-hosted with industry partners.",
        ],
        image:
          "https://res.cloudinary.com/dnyouhvwj/image/upload/v1753022905/Services-Hackathons_InnovationChallenges_xj9ovn.png",
        reverse: false,
      },
      {
        id: "hubs",
        title: "Startup Incubators & Innovation Hubs",
        description:
          "Structured support for early-stage AI startups with mentorship, infrastructure, access to compute, and industry networks.",
        bullets: [
          "Support for early-stage AI startups.",
          "Mentorship, infrastructure, and compute access.",
          "Connect with industry networks.",
        ],
        image:
          "https://res.cloudinary.com/dnyouhvwj/image/upload/v1753022893/Services-StartupIncubators_nnovationHubs_idqjuk.png",
        reverse: true,
      },
      {
        id: "research",
        title: "Joint Research Collaborations",
        description:
          "Collaborate with CAiRL to co-develop research, whitepapers, and deployable AI solutions across sectors.",
        bullets: [
          "Co-develop research and whitepapers.",
          "Create deployable AI solutions.",
          "Collaborate across various sectors.",
        ],
        image:
          "https://res.cloudinary.com/dnyouhvwj/image/upload/v1753022900/Services-JointResearchCollaborations_ndla5f.png",
        reverse: false,
      },
    ],
  },
  {
    category: "Ecosystem Building & Social Impact",
    services: [
      {
        id: "social-good",
        title: "AI for Social Good & Rural Outreach",
        description:
          "Bringing AI to underserved communities by supporting initiatives in agriculture, public health, and education that create real social impact.",
        bullets: [
          "Bring AI to underserved communities.",
          "Support initiatives in agriculture, health, and education.",
          "Create tangible social impact.",
        ],
        image:
          "https://res.cloudinary.com/dnyouhvwj/image/upload/v1753022916/Services-AIforSocialGood_RuralOutreach_e85egz.png",
        reverse: true,
      },
      {
        id: "policy",
        title: "Liaising & Policy Engagement",
        description:
          "Connecting corporates, startups, academia, and policymakers to co-create AI frameworks, influence policy, and build sustainable ecosystems.",
        bullets: [
          "Connect stakeholders to co-create AI frameworks.",
          "Influence AI policy and regulations.",
          "Build a sustainable AI ecosystem.",
        ],
        image:
          "https://res.cloudinary.com/dnyouhvwj/image/upload/v1753022925/Services-Liaising_PolicyEngagement_yhesfl.png",
        reverse: false,
      },
    ],
  },
];

const Services = () => {
  useSmoothScroll();

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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain"
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
              Services
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
          <div id="services-list" className="space-y-16 md:space-y-24 mt-24">
            {serviceSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {section.category}
                  </h2>
                </div>
                <div className="space-y-16 md:space-y-24">
                  {section.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      id={service.id}
                      className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={fadeInUp}
                      transition={{ duration: 0.8 }}
                    >
                      <div
                        className={`grid grid-cols-1 md:grid-cols-3 gap-8 items-center ${
                          service.reverse ? "md:grid-flow-col-dense" : ""
                        }`}
                      >
                        <div
                          className={`md:col-span-1 ${
                            service.reverse ? "md:col-start-3" : ""
                          }`}
                        >
                          <div className="bg-background/50 rounded-xl h-full flex items-center justify-center p-6">
                            <img
                              className="max-h-80 w-auto object-contain p-4 transition-all hover:scale-105"
                              src={service.image}
                              alt={service.title}
                            />
                          </div>
                        </div>

                        <div className="p-8 md:col-span-2">
                          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                            {service.title}
                          </h2>
                          <div className="space-y-6">
                            <div>
                              <p className="text-muted-foreground mb-4">
                                {service.description}
                              </p>
                              <ul className="space-y-4 mb-6">
                                {service.bullets.map((point, i) => (
                                  <li key={i} className="flex gap-3">
                                    <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                                    <span className="text-muted-foreground">
                                      {point}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="my-28">
            <CTA />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
