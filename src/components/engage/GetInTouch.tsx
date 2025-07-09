import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const GetInTouch = () => {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    linkedin: "",
    engagement: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setIsSubmitted(false);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.currentTarget,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result.text);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        organization: "",
        linkedin: "",
        engagement: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setError("Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="get-in-touch" className="w-full bg-secondary py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
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
            Get in Touch
          </motion.h4>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Reach out for collaboration, inquiries, or to learn more about our
            AI initiatives.
          </p>
        </div>
        <div className="bg-card rounded-2xl shadow-sm border border-border p-8">
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md">
              Thank you for your message! We will get back to you soon.
            </div>
          )}
          {error && (
            <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-md">
              {error}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-background/40 border border-border rounded-md focus:ring-primary focus:border-primary"
                  placeholder="John Doe"
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
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-background/40 border border-border rounded-md focus:ring-primary focus:border-primary"
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
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-background/40 border border-border rounded-md focus:ring-primary focus:border-primary"
                  placeholder="ACME Inc"
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
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-background/40 border border-border rounded-md focus:ring-primary focus:border-primary"
                  placeholder="linkedin.com/in/yourprofile"
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
                  required
                  value={formData.engagement}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-background/40 border border-border rounded-md focus:ring-primary focus:border-primary appearance-none"
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
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-background/40 border border-border rounded-md focus:ring-primary focus:border-primary"
                placeholder="Tell us briefly about your interest"
              />
            </div>

            <div className="w-full flex justify-center items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-foreground ${
                  isSubmitting ? "bg-gray-400" : "bg-secondary"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
              >
                {isSubmitting ? "Sending..." : "Submit"}
                {!isSubmitting && (
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
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
