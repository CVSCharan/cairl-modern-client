import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
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
    <div className="bg-background py-16 px-4 z-10">
      <div className="flex flex-col justify-center items-center max-w-6xl mx-auto">
        <motion.h4
          initial={{ opacity: 0.5, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="inline-block px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
        >
          Connect With Us
        </motion.h4>
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold text-foreground mb-1">
              Our Contact Information
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Have questions, ideas, or just want to connect?
            </p>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="group">
              <div className="bg-secondary border border-border/50 p-8 rounded-2xl h-full hover:shadow-xl transition-all duration-500 hover:border-primary/30 hover:-translate-y-2">
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
      </div>
      {/* Map Section */}
      <div className="rounded-lg overflow-hidden shadow-sm border border-border h-96 mb-16 max-w-6xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0618414487137!2d78.3766555750799!3d17.434551003999915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e37831f177%3A0x32d4499d34baaa78!2sT-Hub%20Phase%202!5e0!3m2!1sen!2sin!4v1719228980712!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="CAiRL at T-Hub Phase 2, Madhapur"
        />
      </div>
    </div>
  );
};

export default Contact;
