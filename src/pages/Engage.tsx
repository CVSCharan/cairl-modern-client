import { useEffect } from "react";

const Engage = () => {
  const membershipPlans = [
    {
      name: "Platinum",
      price: "₹10,000",
      popular: false,
      features: [
        "Lifetime Access",
        "50% Discount on Events, Training & Certifications",
        "VIP access, long-term savings, priority invites",
      ],
    },
    {
      name: "Gold",
      price: "₹2,500",
      popular: true,
      features: [
        "Annual Access",
        "25% Discount on Events, Training & Certifications",
        "Great for active professionals and educators",
      ],
    },
    {
      name: "Silver",
      price: "₹1,500",
      popular: false,
      features: [
        "6 months Access",
        "15% Discount on Events, Training & Certifications",
        "Ideal for learners and short-term contributors",
      ],
    },
    {
      name: "Bronze",
      price: "₹1,000",
      popular: false,
      features: [
        "3 months Access",
        "10% Discount on Events, Training & Certifications",
        "Entry-level access to workshops and events",
      ],
    },
  ];

  useEffect(() => {
    // Force scroll to top on component mount
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // "smooth" for animation
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <main className="relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-14">
        {/* Engage With Us Header */}
        <div className="text-center flex flex-col items-center mb-16">
          <h4 className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-8">
            Engage
          </h4>
          <h1 className="text-4xl font-bold text-foreground mb-8 max-w-4xl">
            Engage With Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Join our collaborative ecosystem to drive AI innovation and create
            meaningful impact together.
          </p>
        </div>

        {/* Engagement Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-accent rounded-full p-3 w-16 h-16 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750369409/streamline_collaborations-idea_rmal0h.svg"
                  alt="Collaboration icon"
                  className="h-8 w-8"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Collaboration
            </h3>
            <p className="text-muted-foreground">
              Partner with leading researchers, academics, and industry experts
              to drive AI innovation.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-sm border border-border text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-accent rounded-full p-3 w-16 h-16 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750369409/hugeicons_ai-innovation-02_byogte.svg"
                  alt="Innovation icon"
                  className="h-8 w-8"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Innovation
            </h3>
            <p className="text-muted-foreground">
              Access cutting-edge research, state-of-the-art facilities, and
              collaborative opportunities.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-sm border border-border text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-accent rounded-full p-3 w-16 h-16 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750369409/fluent_arrow-growth-20-filled_ycou4n.svg"
                  alt="Growth icon"
                  className="h-8 w-8"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Growth
            </h3>
            <p className="text-muted-foreground">
              Expand your knowledge and impact through our comprehensive
              programs and initiatives.
            </p>
          </div>
        </div>

        {/* Why Engage with CAiRL Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Why Engage with CAiRL?
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            CAiRL provides leading research, development and innovation
            opportunities through innovative education, development, and
            industry partnerships to advance AI solutions for social good and
            economic growth.
          </p>
        </div>
      </div>

      <div className="relative bg-transparent text-center flex flex-col items-center">
        {/* Membership Plans Section */}
        <div className="w-full bg-card pb-16 pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <div className="text-center mb-16">
              <h4 className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-8">
                Plans
              </h4>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Membership Plans
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the plan that best fits your needs and goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {membershipPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-card rounded-xl p-6 border-2 ${
                    plan.popular ? "border-primary" : "border-border"
                  } relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-3xl font-bold text-primary mb-4">
                      {plan.price}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>

            {/* Community Plan Card */}
            <div className="my-16 max-w-3xl mx-auto">
              <div className="bg-transparent rounded-xl p-6 border-2 border-dashed border-gray-300 flex flex-col lg:flex-row items-center justify-between">
                <div className="flex items-center gap-4 mb-4 lg:mb-0">
                  <div className="text-3xl font-bold text-foreground">₹0</div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Community
                    </h3>
                    <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        It's completely Free
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Access to resources, blogs, newsletters, free events &
                        recorded courses
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Discounts on webinars & workshops
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-secondary text-center flex flex-col items-center">
        {/* Top wavy border */}
        <div className="absolute top-0 left-0 right-0 w-full h-12 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#1E293B "
              fill-opacity="1"
              d="M0,96L34.3,85.3C68.6,75,137,53,206,74.7C274.3,96,343,160,411,197.3C480,235,549,245,617,224C685.7,203,754,149,823,154.7C891.4,160,960,224,1029,218.7C1097.1,213,1166,139,1234,117.3C1302.9,96,1371,128,1406,144L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </div>
        {/* Partner With Us Section */}
        <div className="bg-transparent py-20 px-4">
          <div className="max-w-7xl mx-auto text-center mb-12 mt-16">
            <h4 className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-8">
              Partner
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Partner With Us
            </h2>
            <p className="text-muted-foreground text-lg">
              Collaborate on co-branded research, policy work, education
              programs, hackathons, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {/* Who Should Partner */}
            <div className="border-2 border-primary rounded-2xl p-6 shadow-md flex flex-col h-full">
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                Who Should Partner?
              </h3>
              <div className="bg-[#EAF6FE] rounded-lg p-4 flex-1 flex items-center">
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-base">
                  <li>Academic institutions</li>
                  <li>Think tanks & policy units</li>
                  <li>AI startups & incubators</li>
                  <li>Corporate R&D divisions</li>
                  <li>Government agencies</li>
                </ul>
              </div>
            </div>

            {/* Benefits of Partnership */}
            <div className="border-2 border-primary rounded-2xl p-6 shadow-md flex flex-col h-full">
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                Benefits of Partnership
              </h3>
              <div className="bg-[#EAF6FE] rounded-lg p-4 flex-1 flex items-center">
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-base">
                  <li>Co-develop programs and research</li>
                  <li>Conduct joint hackathons and workshops</li>
                  <li>Access curated talent and innovation labs</li>
                  <li>Get visibility across CAiRL platforms and events</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
              Start a Partnership
            </button>
          </div>
        </div>
      </div>

      {/* Sponsor an Initiative Section */}
      <div className="bg-transparent py-20 px-4 mb-28">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h4 className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-8">
            Sponsor
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sponsor an Initiative
          </h2>
          <p className="text-muted-foreground text-lg">
            Empower impactful programs, research, and talent by sponsoring
            initiatives at CAiRL.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {/* Why Sponsor? */}
          <div className="border-2 border-[#0071CE] rounded-2xl p-6 shadow-md flex flex-col h-full">
            <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
              Why Sponsor?
            </h3>
            <div className="bg-[#EAF6FE] rounded-lg p-4 flex-1 flex items-center">
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-base">
                <li>Support grassroots innovation and research</li>
                <li>Promote inclusive AI education and awareness</li>
                <li>Enable events, challenges, and open projects</li>
                <li>Accelerate social impact and community growth</li>
              </ul>
            </div>
          </div>

          {/* Sponsor Benefits */}
          <div className="border-2 border-[#0071CE] rounded-2xl p-6 shadow-md flex flex-col h-full">
            <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
              Benefits for Sponsors
            </h3>
            <div className="bg-[#EAF6FE] rounded-lg p-4 flex-1 flex items-center">
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-base">
                <li>Brand recognition and visibility at CAiRL events</li>
                <li>Opportunities to network with researchers & leaders</li>
                <li>Access to exclusive CAiRL reports & outcomes</li>
                <li>Showcase commitment to responsible AI development</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
            Become a Sponsor
          </button>
        </div>
      </div>
    </main>
  );
};

export default Engage;
