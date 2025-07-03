const MOU = () => {
  return (
    <main className="min-h-screen bg-background isolate">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <section className="bg-white py-12 px-6 md:px-20">
          <div className="text-center mb-10">
            <button className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm mb-2">
              Our Contributions
            </button>
            <h1 className="text-2xl md:text-3xl font-semibold">
              MoUs & Strategic Partnerships
            </h1>
            <p className="text-sm mt-2 text-gray-600">
              Collaborating with leading institutions to shape the future of
              responsible AI in India.
            </p>
          </div>

          {/* T-Hub MATH Section */}
          <div className="mb-16">
            <h2 className="text-lg md:text-xl font-semibold text-blue-800">
              MoU with T-Hub MATH
            </h2>
            <p className="font-semibold mt-2">About T-Hub MATH</p>
            <p className="text-sm text-gray-700 mt-1 max-w-4xl">
              T-Hub MATH (Machine Learning and AI Technology Hub) is a flagship
              AI innovation ecosystem established by T-Hub and the Department of
              Science & Technology, Government of India. It supports deeptech
              startups, facilitates AI research, and fosters strategic industry
              collaboration.
            </p>

            <p className="font-semibold mt-4">
              CAiRL’s Strategic Partnership
            </p>
            <p className="text-sm text-gray-700 mt-1 max-w-4xl">
              Our MoU with T-Hub MATH enables CAiRL to co-create an
              innovation-driven environment for AI startups and researchers. We
              collaborate on hackathons, CoE development, and mentorship
              programs. This partnership amplifies our mission to accelerate
              ethical, real-world AI adoption and nurtures the next generation
              of AI leaders.
            </p>

            <p className="italic text-sm mt-3">
              Want to co-host innovation challenges or access incubation
              support?
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded mt-2">
              Partner with CAiRL
            </button>
          </div>

          {/* FABA Section */}
          <div className="mb-16">
            <h2 className="text-lg md:text-xl font-semibold text-blue-800">
              MoU with FABA (Federation of Asian Biotech Associations)
            </h2>
            <p className="font-semibold mt-2">About FABA</p>
            <p className="text-sm text-gray-700 mt-1 max-w-4xl">
              FABA is a pioneering platform advancing biotechnology, healthcare,
              and life sciences through multi-stakeholder collaboration. With
              global reach and scientific depth, FABA is committed to
              accelerating research-led innovation in the bioeconomy.
            </p>

            <p className="font-semibold mt-4">
              CAiRL’s Strategic Partnership
            </p>
            <p className="text-sm text-gray-700 mt-1 max-w-4xl">
              CAiRL’s partnership with FABA positions us at the intersection of
              AI and biotech innovation. Together, we’re exploring AI
              applications in genomics, drug discovery, and clinical
              diagnostics. This collaboration fuels our 1000+ AI Use Cases in
              Life Sciences initiative, and helps design AI training programs
              aligned with biopharma needs.
            </p>

            <p className="italic text-sm mt-3">
              Are you building AI in life sciences? Let’s co-create the future.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded mt-2">
              Join Our Research Network
            </button>
          </div>

          {/* Academic Institutions */}
          <div className="mb-16">
            <h2 className="text-lg md:text-xl font-semibold text-blue-800">
              Academic Institutions
            </h2>
            <p className="font-semibold mt-2">
              CAiRL’s Academic Engagement Model
            </p>
            <p className="text-sm text-gray-700 mt-1 max-w-4xl">
              We co-develop AI curricula, drive interdisciplinary research, and
              support PhD projects. Our AI Bootcamps, Faculty Development
              Programs, and AI Fridays enable universities to integrate
              responsible AI into core learning. This collaboration also
              connects students with real-world industry challenges through
              hackathons and innovation labs.
            </p>

            <p className="font-semibold mt-4">About the Collaboration</p>
            <p className="text-sm text-gray-700 mt-1 max-w-4xl">
              CAiRL partners with leading academic institutions such as IIT
              Hyderabad, IIIT Hyderabad, and other top universities to
              strengthen India’s AI education and research backbone.
            </p>

            <p className="italic text-sm mt-3">
              If you’re an educator or researcher looking to scale your AI
              impact, CAiRL is your platform.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded mt-2">
              Collaborate with Us
            </button>
          </div>

          {/* Government Engagements */}
          <div className="mb-16">
            <h2 className="text-lg md:text-xl font-semibold text-blue-800">
              Government Engagements
            </h2>
            <p className="font-semibold mt-2">About the Engagement</p>
            <p className="text-sm text-gray-700 mt-1 max-w-4xl">
              CAiRL works closely with the Telangana Government and national
              agencies to align AI innovation with public policy, digital
              transformation, and societal development.
            </p>

            <p className="font-semibold mt-4">Driving AI for Public Good</p>
            <p className="text-sm text-gray-700 mt-1 max-w-4xl">
              From policy co-creation, ethics-driven frameworks, to grassroots
              applications in agri-tech and health-tech, CAiRL enables
              government bodies to harness AI responsibly. Our access to public
              datasets, like Telangana’s ADEx platform, and our focus on AI for
              Social Good make CAiRL a trusted enabler of impact-first AI
              programs.
            </p>

            <p className="italic text-sm mt-3">
              Are you a policymaker or public agency exploring AI?
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded mt-2">
              Partner with CAiRL for Strategic AI Implementation
            </button>
          </div>

          {/* Why it Matters */}
          <div className="mb-16 text-center">
            <h2 className="text-xl font-semibold">
              Why These Partnerships Matter
            </h2>
            <p className="text-sm mt-3 text-gray-700 max-w-3xl mx-auto">
              These MoUs and strategic collaborations are not just symbolic —
              they form the backbone of CAiRL’s mission to build India’s most
              ethical, inclusive, and scalable AI ecosystem. By working with
              leaders across innovation, research, and governance, we enable
              meaningful, measurable outcomes that benefit both society and the
              economy.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MOU;
