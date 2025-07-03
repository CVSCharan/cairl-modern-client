import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <section
      className="bg-transparent min-h-screen w-full flex flex-col justify-center items-center"
      id="contact"
    >
      <div className="bg-secondary w-full py-8 md:py-12 px-6 md:px-8 rounded-3xl max-w-6xl mx-auto flex flex-col items-center">
        <motion.h4
          initial={{ opacity: 0.5, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="inline-block px-4 py-2 rounded-full bg-background text-foreground text-sm md:text-base font-medium mb-6 md:mb-8"
        >
          Contact
        </motion.h4>

        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
            Connect with us
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Have questions, ideas, or just want to connect?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 my-12">
          {/* Phone */}
          <div className="bg-background p-6 md:p-8 rounded-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-3"
            >
              <Phone className="text-primary w-6 h-6" />
            </motion.div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
              Phone
            </h3>
            <p className="text-muted-foreground mb-1 text-sm md:text-base">
              +91-9391335191
            </p>
            <p className="text-muted-foreground text-xs md:text-sm">
              Monday - Friday, 09:00 AM - 06:00PM
            </p>
          </div>

          {/* Email */}
          <div className="bg-background p-6 md:p-8 rounded-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-3"
            >
              <Mail className="text-primary w-6 h-6" />
            </motion.div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
              Email
            </h3>
            <p className="text-muted-foreground mb-1 text-sm md:text-base">
              info@cairl.org
            </p>
            <p className="text-muted-foreground text-xs md:text-sm">
              We'll respond as soon as possible
            </p>
          </div>

          {/* Location */}
          <div className="bg-background p-6 md:p-8 rounded-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-3"
            >
              <MapPin className="text-primary w-6 h-6" />
            </motion.div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
              Location
            </h3>
            <p className="text-muted-foreground mb-1 text-sm md:text-base">
              T-Hub, 2.0, Inorbit Mall Rd,
              <br />
              Vittal Rao Nagar, Madhapur,
              <br />
              Hyderabad, Telangana 500081
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <Link
            to="/engage-with-us"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full font-medium flex items-center text-sm md:text-base"
          >
            Know more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
