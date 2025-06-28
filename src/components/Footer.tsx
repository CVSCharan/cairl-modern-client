import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer
      className="relative text-white py-12 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176571/footer-bg-img_ogqwyc.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-4">
            <div className="flex flex-col space-y-4">
              <img
                src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176660/footer-logo_jgk1wb.png"
                alt="CAiRL Logo"
                className="h-24 w-24"
              />
              <p className="text-sm text-gray-300">
                Subscribe to our newsletter or follow us online to stay ahead in
                AI.
              </p>

              <div className="flex mt-4">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="bg-white/10 border-gray-500 text-white placeholder-gray-400 py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-primary rounded-l-md"
                />
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors font-semibold">
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Events & News */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Events & News</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/events"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/happenings"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Happenings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/webinars"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Webinars
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us#faqs"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* About Us Column */}
              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/about-us"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Who We Are
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us#team"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us#mission"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Mission & Vision
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us#mou"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      MOUs & Partnerships
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/visual-journey"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Visual Journey
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Programs & Services */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Programs & Services
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/services"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ai-bootcamps"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      AI Bootcamps
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/focus-groups"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Focus Groups
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/research-innovation"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Research & Innovation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/resources"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Resources
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Contact
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p>
                    <span className="font-semibold text-white">Phone:</span> +91
                    9391335191
                  </p>
                  <p>
                    <span className="font-semibold text-white">Email:</span>{" "}
                    info@cairl.org
                  </p>
                  <address className="not-prose">
                    <span className="font-semibold text-white">Address:</span>
                    <br />
                    T-Hub, 2.0, Inorbit Mall Rd,
                    <br />
                    Vittal Rao Nagar, Madhapur,
                    <br />
                    Hyderabad, Telangana 500081
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            Copyright © 2024. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Powered By */}
        <div className="mt-6 text-center">
          <motion.h4
            initial={{ opacity: 0.5, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-sm text-gray-400"
          >
            Powered by
          </motion.h4>
          <img
            src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750959808/Colaberry_logo_c6h8uc.png"
            alt="Colaberry Logo"
            className="h-8 mx-auto mt-2 rounded-lg"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
