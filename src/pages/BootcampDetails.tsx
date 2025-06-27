import { useEffect } from "react";
import { Link } from "react-router-dom";

const BootcampDetails = () => {
  useEffect(() => {
    // Force scroll to top on component mount
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <main className="min-h-screen bg-[#F6F6F6] flex flex-col">
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">
                  AI & Machine Learning Bootcamp
                </h1>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    Online
                  </span>
                  <span>•</span>
                  <span>10 May 2024 - 16 August 2024</span>
                </div>
                <p className="text-gray-700 mb-6">
                  Master the art of creating AI and Machine Learning solutions,
                  solve real-world problems, and develop a strong foundation in
                  AI concepts. Join our 12-week intensive bootcamp and become a
                  part of the AI revolution.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/apply-now"
                    className="bg-[#0066CC] hover:bg-[#004A8F] text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
                  >
                    Apply Now
                  </Link>
                  <Link
                    to="/bootcamp-brochure"
                    className="border border-[#0066CC] text-[#0066CC] hover:bg-blue-50 font-medium py-2 px-6 rounded-md transition-colors duration-300"
                  >
                    View Detailed Brochure
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750185490/cloud-computing_qlbzxs.png"
                  alt="AI & Machine Learning Bootcamp"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About the Bootcamp */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6">
              About the Bootcamp
            </h2>
            <p className="text-gray-700 mb-6">
              CAiRL's AI and Machine Learning Bootcamp is a comprehensive
              program designed to equip you with the knowledge and skills needed
              to thrive in the AI industry. The bootcamp is structured as a
              12-week intensive learning experience with practical hands-on
              training, expert-led workshops, and real-world projects. You'll
              learn to use cutting-edge tools and frameworks for building
              portfolio-ready AI applications that showcase your expertise to
              potential employers.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-8">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center p-6 bg-[#F6F6F6] rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  AI-Focused Curriculum
                </h3>
                <p className="text-center text-gray-600 text-sm">
                  Designed by industry experts
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-[#F6F6F6] rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Community Support
                </h3>
                <p className="text-center text-gray-600 text-sm">
                  Network with peers and mentors
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-[#F6F6F6] rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Career Sessions</h3>
                <p className="text-center text-gray-600 text-sm">
                  Job placement assistance
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-[#F6F6F6] rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Certifications</h3>
                <p className="text-center text-gray-600 text-sm">
                  Industry-recognized credentials
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Overview */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-8">
              Curriculum Overview
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">
                  Week 1-3: Fundamentals of AI
                </h3>
                <p className="text-gray-700 mb-2">
                  Python, Data Analysis, Statistics
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">
                  Week 4-6: Machine Learning
                </h3>
                <p className="text-gray-700 mb-2">
                  Supervised Learning, Neural Networks
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">
                  Week 7-9: Deep Learning & Natural Language Processing
                </h3>
                <p className="text-gray-700 mb-2">
                  Transformers, LLMs, Computer Vision, Generative AI
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">
                  Week 10-12: Capstone Project & Career Preparation
                </h3>
                <p className="text-gray-700 mb-2">
                  Building a Portfolio-Ready Project, Interview Prep
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Software and Tools */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6">
              Software and Tools
            </h2>
            <p className="text-gray-700 mb-6">
              Throughout the bootcamp, you'll gain hands-on experience with
              industry-leading AI tools and frameworks, including PyTorch,
              TensorFlow, HuggingFace, scikit-learn, and more. You'll also learn
              to work with cloud platforms like AWS and Azure for deploying AI
              models.
            </p>
          </div>
        </section>

        {/* Instructors */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-8">
              Instructors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750185490/instructor-1_yvfvqm.jpg"
                    alt="Neil Armstrong"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">Neil Armstrong</h3>
                <p className="text-gray-600 text-sm">AI Research Lead</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750185490/instructor-2_yvfvqm.jpg"
                    alt="Olivia Spencer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">Olivia Spencer</h3>
                <p className="text-gray-600 text-sm">Machine Learning Expert</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750185490/instructor-3_yvfvqm.jpg"
                    alt="Ethan Nguyen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">Ethan Nguyen</h3>
                <p className="text-gray-600 text-sm">Data Science Specialist</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment Section */}
        <section className="py-12 md:py-16 bg-[#F0F7FF]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
                Enroll Now
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                To apply for the AI & Machine Learning Bootcamp, you need to
                complete an online application and pass a simple assessment.
                Early applications close on July 31st, 2024.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="background"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Background
                  </label>
                  <select
                    id="background"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select your background</option>
                    <option value="student">Student</option>
                    <option value="professional">Working Professional</option>
                    <option value="career-changer">Career Changer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0066CC] hover:bg-[#004A8F] text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
                >
                  Apply Now
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-8">
              Pricing
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">
                  AI & Machine Learning Bootcamp
                </h3>
                <div className="text-4xl font-bold text-[#0066CC] mb-2">
                  ₹75,000
                </div>
                <p className="text-gray-600 text-sm">
                  *Flexible payment options available
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>12-week intensive program</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Access to all course materials and resources</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>1:1 mentorship with AI industry experts</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Certificate of completion</span>
                </li>
              </ul>
              <Link
                to="/apply-now"
                className="block w-full bg-[#0066CC] hover:bg-[#004A8F] text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 text-center"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-8 text-center">
              What they say about us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-[#F6F6F6] p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750185490/testimonial-1_yvfvqm.jpg"
                      alt="Stephanie"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Stephanie</h3>
                    <p className="text-sm text-gray-600">
                      Bootcamp Graduate 2023
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Our weekly meetings became more efficient and productive. The
                  AI-powered tools and techniques I learned at the bootcamp have
                  transformed how our team works together."
                </p>
              </div>
              <div className="bg-[#F6F6F6] p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750185490/testimonial-2_yvfvqm.jpg"
                      alt="Deepanshu"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Deepanshu</h3>
                    <p className="text-sm text-gray-600">Data Scientist</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The best investment I made for my career. I went from being
                  an analyst to a full-fledged data scientist in just 3 months
                  after completing the bootcamp."
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default BootcampDetails;
