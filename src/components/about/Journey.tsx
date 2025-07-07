import { motion } from "framer-motion";

const Journey = () => {
  return (
    <div className="text-center flex flex-col items-center my-12 mt-24">
      <motion.h4
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-base mb-8"
      >
        Our Journey
      </motion.h4>
      <h1 className="text-4xl font-bold text-foreground mb-8 w-full md:w-[700px]">
        Bridging Innovation and Impact
      </h1>
      <p className="about-text text-justify w-full text-muted-foreground">
        The Collaborative AI Research Labs Foundation (CAiRL) was founded with a
        clear and focused mission: to harness the transformative power of
        artificial intelligence (AI) to drive meaningful change across
        industries and communities. Established in Hyderabad, CAiRL serves as a
        hub for collaboration, innovation, and ethical development in the AI
        space, uniting key stakeholders from academia, industry, and government
        to address some of the world’s most pressing challenges.
      </p>
      <p className="about-text text-justify w-full text-muted-foreground">
        At CAiRL, we believe that AI has the potential to create a positive
        societal impact when developed responsibly and inclusively. Our
        foundation is committed to advancing AI technologies that are not only
        cutting-edge but also scalable, ethical, and aligned with the betterment
        of society. We work across a wide range of sectors including healthcare,
        agriculture, biopharma, education, and more, driving forward AI
        solutions that make a tangible difference in the world.
      </p>
    </div>
  );
};

export default Journey;