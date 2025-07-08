import { motion } from "framer-motion";

const MOU = () => {
  return (
    <div
      id="mou"
      className="relative bg-secondary min-h-screen flex flex-col justify-center items-center py-10"
    >
      <div className="container mx-auto px-4 flex flex-col items-center gap-12 mt-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.h4
              initial={{ opacity: 0.5, y: -70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="inline-block px-6 py-3 rounded-full bg-background/70 text-primary text-sm font-medium mb-6 border border-primary/20"
            >
              Partnerships
            </motion.h4>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              MOUs and Strategic Partnerships
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              At CAIRL, we understand that collaboration is key to driving
              innovation and creating impactful AI solutions. We are proud to
              have formed several strategic partnerships and signed Memorandums
              of Understanding (MoUs) with leading organizations, institutions,
              and corporations to advance AI research, development, and
              application.
            </p>
            <button className="bg-primary text-background px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Know more
            </button>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245474/about_mou_img_ekci19.png"
              alt="MOU Partnerships"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
        {/* Partnership Benefits */}
        <div className="mt-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">
                Knowledge Exchange
              </h4>
              <p className="text-muted-foreground">
                Facilitating cross-institutional learning and research
                collaboration
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">
                Resource Sharing
              </h4>
              <p className="text-muted-foreground">
                Optimizing research capabilities through shared infrastructure
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">
                Innovation Acceleration
              </h4>
              <p className="text-muted-foreground">
                Faster development cycles through collaborative research efforts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MOU;
