import { motion } from "framer-motion";

const Journey = () => {
  return (
    <div className="text-center flex flex-col items-center my-12 mt-24">
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
        CAiRL's Journey
      </motion.h4>
      <h1 className="text-4xl font-bold text-foreground mb-12 w-full md:w-[700px]">
        Bridging Innovation and Impact
      </h1>

      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 md:p-12 shadow-lg">
          <div className="space-y-8">
            {[
              "Founded with a mission to harness AI's transformative power for meaningful change across industries and communities",
              "Established in Hyderabad as a hub for collaboration, innovation, and ethical AI development",
              "Unites stakeholders from academia, industry, and government to address pressing global challenges",
              "Believes in AI's potential for positive societal impact when developed responsibly and inclusively",
              "Committed to advancing cutting-edge, scalable, and ethical AI technologies",
              "Works across healthcare, agriculture, biopharma, education, and other critical sectors",
              "Focuses on AI solutions that create tangible differences in the world",
            ].map((content, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 group hover:translate-x-2 transition-transform duration-300"
              >
                <div className="flex-shrink-0 w-3 h-3 bg-primary rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                <div className="flex-1">
                  <p className="text-muted-foreground leading-relaxed text-left text-lg font-medium">
                    {content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
