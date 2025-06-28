import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Resources = () => {
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
    <main className="min-h-screen bg-transparent flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="bg-transparent flex flex-col justify-center items-center text-white py-20 mt-16">
        <h4 className="inline-block bg-[#E5F5FC] text-[#005BA9] px-4 py-2 rounded-full mb-8">
          Resources
        </h4>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl max-w-3xl mx-auto">
            Fueling Innovation with Knowledge, Tools & Infrastructure
          </p>
          <h1 className="text-4xl text-[#0D2E37] font-bold mb-8">
            Resources at CAiRL
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            At CAiRL, we empower the AI ecosystem with curated content,
            datasets, computing power, and thought leadership—designed for
            researchers, startups, enterprises, and policymakers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* AI Use Cases & Implementation Section */}
        <div
          id="ai-use-case"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <div>
            <h2 className="text-3xl font-bold text-[#005BA9] mb-6">
              AI Use Cases & Implementation
            </h2>
            <p className="text-gray-700 mb-6">
              Real-world success stories, case studies & sector-specific guides
              showcasing AI in action—across:
            </p>
            {/* Domain Tags */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                "Healthcare",
                "Lifesciences",
                "Education",
                "Agriculture",
                "Finance",
                "Energy",
                "Biotech (with 1000+ mapped use cases)",
              ].map((domain, idx) => (
                <span
                  key={idx}
                  className="border bg-[#F2F8FF] border-gray-400 text-gray-800 px-4 py-1 rounded-full text-sm"
                >
                  {domain}
                </span>
              ))}
            </div>
            <a
              href="/events"
              className="px-6 py-3 bg-[#005BA9] text-white rounded-lg font-medium hover:bg-[#004a8a] transition-colors"
            >
              View more
            </a>
          </div>
          <div className="rounded-xl h-full min-h-[300px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750789703/resources-img-1_gg2dsv.png"
              alt="CAiRL Events"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Datasets for Innovation Section */}
        <div
          id="datasets"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <div className="order-last lg:order-first rounded-xl h-full min-h-[300px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750789703/resources-img-2_cwcxni.png"
              alt="CAiRL Webinars"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#005BA9] mb-6">
              Datasets for Innovation
            </h2>
            <p className="text-gray-700 mb-6">
              Tap into curated, AI-ready datasets:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="bg-[#005BA9] text-white rounded-full w-5 h-5 flex items-center justify-center mt-1 mr-3">
                  •
                </span>
                <span className="text-gray-700">
                  ADEx (Telangana Agriculture Database)
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-[#005BA9] text-white rounded-full w-5 h-5 flex items-center justify-center mt-1 mr-3">
                  •
                </span>
                <span className="text-gray-700">
                  Sector-Specific Datasets: Healthcare, Energy, Finance & more .
                </span>
              </li>
            </ul>
            <p className="font-semibold text-gray-700 mb-4">
              **Access is free or low-cost under a sustainable subscription
              model.
            </p>
            <a
              href="/webinars"
              className="px-6 py-3 bg-[#005BA9] text-white rounded-lg font-medium hover:bg-[#004a8a] transition-colors"
            >
              View more
            </a>
          </div>
        </div>

        {/* Affordable AI Computing Section */}
        <div
          id="affordable-ai-computing"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-3xl font-bold text-[#005BA9] mb-6">
              Affordable AI Computing
            </h2>
            <p className="text-gray-700 mb-6">
              Accelerate AI development with cloud access via:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="bg-[#005BA9] text-white rounded-full w-5 h-5 flex items-center justify-center mt-1 mr-3">
                  •
                </span>
                <span className="text-gray-700">Microsoft Azure AI</span>
              </li>
              <li className="flex items-start">
                <span className="bg-[#005BA9] text-white rounded-full w-5 h-5 flex items-center justify-center mt-1 mr-3">
                  •
                </span>
                <span className="text-gray-700">AWS AI/ML Services</span>
              </li>
              <li className="flex items-start">
                <span className="bg-[#005BA9] text-white rounded-full w-5 h-5 flex items-center justify-center mt-1 mr-3">
                  •
                </span>
                <span className="text-gray-700">NVIDIA AI Cloud</span>
              </li>
            </ul>
            <p className="font-semibold text-gray-700 mb-4">
              **Discounted access for social good projects
              <br />
              **Managed by CAiRL’s non-profit model to ensure sustainability
            </p>
            <a
              href="/visual-journey"
              className="px-6 py-3 bg-[#005BA9] text-white rounded-lg font-medium hover:bg-[#004a8a] transition-colors"
            >
              Know more
            </a>
          </div>
          <div className="rounded-xl h-full max-h-[450px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750789704/resources-img-3_dihgt8.png"
              alt="CAiRL Visual Journey"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#F0F7FF] py-24 mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#005BA9] mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter or follow us online to stay ahead in AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005BA9]"
            />
            <button className="px-6 py-3 bg-[#005BA9] text-white rounded-lg font-medium hover:bg-[#004a8a] transition-colors whitespace-nowrap">
              Submit
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Resources;
