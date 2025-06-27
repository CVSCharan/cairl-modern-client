import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    linkedin: "",
    engagement: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Thank you for your message. We'll get back to you soon!");
    setFormData({
      fullName: "",
      email: "",
      organization: "",
      linkedin: "",
      engagement: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Background Element - Now covers header to form */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-45 pointer-events-none">
        <img
          src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750188690/Element_hvtzp4.png"
          alt="Background Element"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-12">
        <section className="animate-fadeIn">
          {/* Contact Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-[#E5F5FC] text-[#005BA9] text-sm font-medium mb-4">
              Contact
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Reach out to us for collaboration, inquiries, or to learn more
              about our AI initiatives.
            </p>
          </div>
        </section>

        <section className="animate-fadeIn [animation-delay:200ms]">
          {/* Contact Form */}
          <div className="bg-secondary rounded-2xl shadow-sm border border-gray-100 p-8 mb-16 max-w-4xl mx-auto relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background/40 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background/40 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background/40 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="ACME"
                  />
                </div>

                <div>
                  <label
                    htmlFor="linkedin"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    LinkedIn Profile
                  </label>
                  <input
                    type="text"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background/40 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="linkedin.com/in/..."
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="engagement"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Type of Engagement*
                </label>
                <div className="relative">
                  <select
                    id="engagement"
                    name="engagement"
                    value={formData.engagement}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background/40 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 appearance-none"
                  >
                    <option value="" disabled>
                      Select One
                    </option>
                    <option value="collaboration">Collaboration</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-background/40 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us briefly about your interest"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#005BA9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="animate-fadeIn [animation-delay:300ms]">
          {/* Contact Info Cards */}
          <div className="py-16 px-4 bg-transparent z-10" id="contact">
            <div className="flex flex-col justify-center items-center max-w-6xl mx-auto">
              <a
                href="#about-us"
                className="bg-[#E5F5FC] text-[#005BA9] px-4 py-2 rounded-full"
              >
                Contact
              </a>
              <div className="flex justify-between items-center mb-4 mt-8">
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-3xl font-bold text-foreground">
                    Connect with us
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    Have questions, ideas, or just want to connect?
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                {/* Phone */}
                <div className="bg-secondary p-6 md:p-8 rounded-xl">
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Phone className="text-primary-foreground w-5 h-5" />
                  </div>
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
                <div className="bg-secondary p-6 md:p-8 rounded-xl">
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Mail className="text-primary-foreground w-5 h-5" />
                  </div>
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
                <div className="bg-secondary p-6 md:p-8 rounded-xl">
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="text-primary-foreground w-5 h-5" />
                  </div>
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
            </div>
          </div>
        </section>

        <section className="animate-fadeIn [animation-delay:400ms]">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100 h-96 mb-16">
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
        </section>
      </div>
    </main>
  );
};

export default Contact;
