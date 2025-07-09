import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      primary: "+91-9391335191",
      secondary: "Monday - Friday, 09:00 AM - 06:00 PM",
      description: "Speak directly with our team",
      action: "Call Now",
      href: "tel:+91-9391335191",
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@cairl.org",
      secondary: "We'll respond within 24 hours",
      description: "Send us your questions or proposals",
      action: "Send Email",
      href: "mailto:info@cairl.org",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "T-Hub 2.0, Inorbit Mall Rd",
      secondary: "Vittal Rao Nagar, Madhapur, Hyderabad, Telangana 500081",
      description: "Meet us at our innovation hub",
      action: "Get Directions",
      href: "https://www.google.com/maps/dir/?api=1&destination=T-Hub+2.0,+Inorbit+Mall+Rd,+Vittal+Rao+Nagar,+Madhapur,+Hyderabad,+Telangana+500081",
    },
  ];

  return (
    <section
      className="bg-transparent min-h-screen w-full flex flex-col justify-center items-center py-16"
      id="contact"
    >
      <div className="bg-secondary/50 backdrop-blur-sm border border-border/50 w-full py-16 px-6 md:px-8 rounded-3xl max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0.5, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="inline-block px-6 py-3 rounded-full bg-background/70 text-primary text-sm font-medium mb-6 border border-primary/20"
          >
            Contact Us
          </motion.h4>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Let's Connect
          </h2>

          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI? We're here to help you
            navigate the future of technology. Reach out to discuss
            partnerships, collaborations, or any questions you might have.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="group">
              <div className="bg-card border border-border/50 p-8 rounded-2xl h-full hover:shadow-xl transition-all duration-500 hover:border-primary/30 hover:-translate-y-2">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <method.icon className="text-primary w-8 h-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {method.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-foreground font-semibold">
                      {method.primary}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {method.secondary}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <a
                      href={method.href}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors duration-300 group/btn"
                    >
                      {method.action}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <MessageCircle className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Ready to Get Started?
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Whether you're looking to implement AI solutions, explore
                partnerships, or simply have questions about our services, we're
                here to help you succeed.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Quick Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span>Expert Guidance</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-2">
                  Business Inquiries
                </h4>
                <p className="text-muted-foreground text-sm">
                  Partnership opportunities, consulting services, and enterprise
                  solutions
                </p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-2">
                  Technical Support
                </h4>
                <p className="text-muted-foreground text-sm">
                  Implementation guidance, troubleshooting, and technical
                  consultations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/engage-with-us#get-in-touch"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
