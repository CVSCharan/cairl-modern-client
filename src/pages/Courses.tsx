import CTA from "../components/CTA";
import { motion } from "framer-motion";
import SEOMetadata from "../components/seo/SEOMetadata";
import useSmoothScroll from "../hooks/useSmoothScroll";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const courses = [
  {
    id: "data-analytics",
    title: "Data Analytics Program",
    description:
      "This program is for beginners and teaches the fundamentals of Data Analytics and SQL. You will learn effective tools and strategies to become a data-driven decision maker.",
    bullets: [
      "Fundamentals of Data Analytics and SQL.",
      "For beginners.",
      "12-week program.",
      "Become a data-driven decision maker.",
    ],
    image:
      "https://res.cloudinary.com/dnyouhvwj/image/upload/v1753389769/DataAnalytics_pyiclv.png",
    reverse: false,
  },
  {
    id: "data-science",
    title: "Data Science, AI, and Machine Learning Program",
    description:
      "This program helps you attain essential skills to embark on a career as a data scientist and delve into the thriving realms of AI and machine learning. You will learn the theory and application of data science.",
    bullets: [
      "Essential skills for a data scientist career.",
      "Learn theory and application of data science.",
      "Covers AI and machine learning.",
      "Three 8-week courses.",
    ],
    image:
      "https://res.cloudinary.com/dnyouhvwj/image/upload/v1753389766/DataScience_utg2uu.png",
    reverse: true,
  },
  {
    id: "job-readiness",
    title: "Job Readiness Program",
    description:
      "This program is designed to make you job-ready. It includes hands-on projects, mentorship from experts, virtual discussions, AI-enhanced mock interviews, and personalized resume support.",
    bullets: [
      "Hands-on projects and expert mentorship.",
      "AI-enhanced mock interviews.",
      "Personalized resume support.",
      "6 to 12-month program.",
    ],
    image:
      "https://res.cloudinary.com/dnyouhvwj/image/upload/v1753389772/JobReadiness_uyeoyd.png",
    reverse: false,
  },
];

const Courses = () => {
  useSmoothScroll();

  return (
    <main className="min-h-screen bg-background">
      <SEOMetadata
        title="Courses - CAiRL"
        description="Explore courses at CAiRL. Find intensive training programs in AI, machine learning, data science, and more."
        keywords="AI courses, AI workshops, machine learning training, data science courses, CAiRL events"
        ogTitle="Courses - CAiRL"
        ogDescription="Explore courses at CAiRL. Find intensive training programs in AI, machine learning, data science, and more."
        ogUrl={window.location.href}
        twitterTitle="Courses - CAiRL"
        twitterDescription="Explore courses at CAiRL. Find intensive training programs in AI, machine learning, data science, and more."
      />
      <div className="relative w-full">
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-35 pointer-events-none">
          <img
            src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750381598/Element-1_tsbawm.png"
            alt="Background Element"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 pt-8 px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0.5, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="inline-block px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
            >
              Courses
            </motion.div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Explore Our Courses
            </h1>
          </div>

          <div id="courses-list" className="space-y-16 md:space-y-24 mt-24">
            {courses.map((course, courseIndex) => (
              <motion.div
                key={courseIndex}
                id={course.id}
                className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
              >
                <div
                  className={`grid grid-cols-1 md:grid-cols-3 gap-8 items-center ${
                    course.reverse ? "md:grid-flow-col-dense" : ""
                  }`}
                >
                  <div
                    className={`md:col-span-1 ${
                      course.reverse ? "md:col-start-3" : ""
                    }`}
                  >
                    <div className="bg-background/50 rounded-xl h-full flex items-center justify-center p-6">
                      <img
                        className="max-h-80 w-auto object-contain p-4 transition-all hover:scale-105"
                        src={course.image}
                        alt={course.title}
                      />
                    </div>
                  </div>

                  <div className="p-8 md:col-span-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                      {course.title}
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <p className="text-muted-foreground mb-4">
                          {course.description}
                        </p>
                        <ul className="space-y-4 mb-6">
                          {course.bullets.map((point, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="my-28">
            <CTA />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Courses;
