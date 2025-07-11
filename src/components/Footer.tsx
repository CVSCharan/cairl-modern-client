import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer
      className="relative text-foreground py-12 overflow-hidden"
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
          {/* Logo */}
          <div className="md:col-span-3">
            <div className="flex flex-col space-y-4">
              <img
                src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176660/footer-logo_jgk1wb.png"
                alt="CAiRL Logo"
                className="h-20 w-20"
              />
              <p className="text-sm text-gray-300 max-w-sm">
                Empowering collaborative research and innovation in AI.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/cairl_2025?igsh=MTcyY3cxM285Ymt1OQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-foreground"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/collaborative-ai-research-labs-foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-foreground"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                {/* <a href="#" className="text-gray-300 hover:text-foreground">
                  <FaTwitter className="w-5 h-5" />
                </a> */}
                <a
                  href="https://youtube.com/@cairl.2025?si=MJ49FJN09Zi207Os"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-foreground"
                >
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Events & News */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Events & News</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      to="/happenings"
                      className="text-foreground/80 hover:text-foreground relative group"
                    >
                      <span>Events</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/happenings"
                      className="text-foreground/80 hover:text-foreground relative group"
                    >
                      <span>Happenings</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/happenings#timeline"
                      className="text-foreground/80 hover:text-foreground relative group"
                    >
                      <span>Timeline</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us#faqs"
                      className="text-foreground/80 hover:text-foreground relative group"
                    >
                      <span>FAQs</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* About Us Column */}
              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      to="/about-us"
                      className="text-foreground/80 hover:text-foreground relative group"
                    >
                      <span>Who We Are</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us#team"
                      className="text-foreground/80 hover:text-foreground relative group"
                    >
                      <span>Our Team</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us#mission"
                      className="text-foreground/80 hover:text-foreground relative group"
                    >
                      <span>Mission & Vision</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mous"
                      className="text-foreground/80 hover:text-foreground relative group"
                    >
                      <span>MOUs & Partnerships</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Programs & Services */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Programs & Services
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      to="/services"
                      className="text-foreground/80 hover:text-foreground relative group"
                    >
                      <span>Our Services</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/focus-groups"
                      className="text-foreground/80 hover:text-foreground relative group"
                    >
                      <span>Focus Groups</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/research-and-innovation"
                      className="text-foreground/80 hover:text-foreground relative group"
                    >
                      <span>Research & Innovation</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/resources"
                      className="text-foreground/80 hover:text-foreground relative group"
                    >
                      <span>Resources</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>
                    <span className="font-semibold text-foreground">
                      Phone:
                    </span>{" "}
                    +91 9391335191
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">
                      Email:
                    </span>{" "}
                    info@cairl.org
                  </p>
                  <address>
                    <span className="font-semibold text-foreground">
                      Address:
                    </span>
                    <br />
                    T-Hub 2.0, Inorbit Mall Rd,
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
        <div className="mt-12 pt-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 Collaborative AI Research Labs Foundation. All rights
            reserved.
          </p>
        </div>

        {/* Powered By */}
        <div className="mt-6 text-center">
          <motion.h4
            initial={{ opacity: 0.5, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
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
