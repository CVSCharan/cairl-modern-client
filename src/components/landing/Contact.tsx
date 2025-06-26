import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  return (
    <div className="py-12 md:py-16 px-4 bg-transparent mt-12 md:mt-16 mb-8" id="contact">
      <div className="max-w-6xl mx-auto">
        <a
          href="#about-us"
          className="bg-[#E5F5FC] text-[#005BA9] px-4 py-2 rounded-full text-sm md:text-base"
        >
          Contact
        </a>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-4 mt-6 md:mt-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Connect with us
            </h2>
            <p className="text-sm text-muted-foreground">
              Have questions, ideas, or just want to connect?
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-full font-medium flex items-center text-sm md:text-base"
          >
            Know more
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {/* Phone */}
          <div className="bg-secondary p-6 md:p-8 rounded-xl">
            <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Phone className="text-primary-foreground w-5 h-5" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground mb-1 text-sm md:text-base">+91-9391335191</p>
            <p className="text-muted-foreground text-xs md:text-sm">
              Monday - Friday, 09:00 AM - 06:00PM
            </p>
          </div>

          {/* Email */}
          <div className="bg-secondary p-6 md:p-8 rounded-xl">
            <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Mail className="text-primary-foreground w-5 h-5" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground mb-1 text-sm md:text-base">info@cairl.org</p>
            <p className="text-muted-foreground text-xs md:text-sm">
              We'll respond as soon as possible
            </p>
          </div>

          {/* Location */}
          <div className="bg-secondary p-6 md:p-8 rounded-xl">
            <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MapPin className="text-primary-foreground w-5 h-5" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground mb-1 text-sm md:text-base">
              T-Hub, 2.0, Inorbit Mall Rd,
              <br />
              Vittal Rao Nagar, Madhapur,
              <br />
              Hyderabad, Telangana 500081
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
