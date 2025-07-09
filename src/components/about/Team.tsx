import { useEffect } from "react";
import TeamSection from "./TeamSection";
import { motion } from "framer-motion";

const Team = () => {
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Remove the '#' from the hash
      const elementId = window.location.hash.substring(1);
      // Find the element by ID
      const element = document.getElementById(elementId);

      if (element) {
        // Smooth scroll to the element
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Update URL without jumping (optional)
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.hash
        );
      }
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <section className="relative w-full py-16">
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-35 pointer-events-none">
        <img
          src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750381712/Element-2_yonfix.png"
          alt="Background Element"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative container mx-auto px-4 z-20">
        <div className="w-full flex flex-col items-center justify-center mt-24 z-20">
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
            Leadership
          </motion.h4>

          <h1 className="text-4xl font-bold text-foreground mb-6">
            Board Members & Management Team
          </h1>
        </div>

        {/* Board Members */}
        <div
          id="board-members"
          className="z-20 pb-8 sm:pb-12 md:pb-16 lg:pb-20"
        >
          <TeamSection
            title=""
            members={[
              {
                name: "Mr. Rammohan Manamasa",
                role: "Founder & Chairman",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752090501/Mr._Rammohan_Manamasa-whitebg_vjelt7.png",
              },
              {
                name: "Mr. Ram Katamaraja",
                role: "Co-Founder",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245469/Mr._Ram_Katamaraja_tj5jfe.png",
              },
              {
                name: "Mr. Sarvesh Singh",
                role: "Director General",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245472/Mr._Sarvesh_Singh_rnmoam.png",
              },
            ]}
          />
        </div>

        <div className="flex flex-col justify-center items-center mt-24 z-20">
          {/* Vision Header */}
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
            Advisory Team
          </motion.h4>
        </div>

        {/* Strategic Advisors */}
        <div id="strategic-advisors" className="z-20">
          <TeamSection
            title="Strategic Advisors"
            members={[
              {
                name: "Prof. Pallu Reddanna",
                role: "President - FABA",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752090501/Prof._Pallu_Reddanna-whitebg_fusewk.png",
              },
              {
                name: "Dr. Ratnakar Palakodeti",
                role: "Secretary General - FABA",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752090500/Dr._Ratnakar_Palakodeti-whitebg_ptunzu.png",
              },
              {
                name: "Mr. Rahul Palth",
                role: "CEO-MATH (T-Hub)",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245471/Mr._Rahul_Paith_ohpxmc.png",
              },
            ]}
          />
        </div>

        {/* Academic Advisors */}
        <div id="academic-advisors" className="z-20">
          <TeamSection
            title="Academic Advisors"
            members={[
              {
                name: "Mr. Neil Gogte",
                role: "Founder & Director of Knitt, NGIT, KNEC, KSJC",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752090500/Mr._Neil_Gogte-whitebg_hwyl4d.png",
              },
              {
                name: "Dr. Prasad Null",
                role: "Physician Entrepreneur",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752090501/Dr._Prasad_Nuli-whitebg_bao47b.png",
              },
              {
                name: "Dr. Ravi Guijula",
                role: "PhD from IIT Hyderabad",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752090499/Dr._Ravi_Gujjula-whitebg_ovg5ck.png",
              },
            ]}
          />
        </div>

        {/* Industry Advisors */}
        <div id="industry-advisors" className="z-20">
          <TeamSection
            title="Industry Advisors"
            members={[
              {
                name: "Dr. Suhit Anantula",
                role: "Founder - The Helix Lab",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752090501/Dr._Suhit_Anantula-whitebg_sxvxrn.png",
              },
              {
                name: "Mr. Anurag Garg",
                role: "Global Engineering Executive & General Manager",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752090500/Mr._Anurag_Garg-whitebg_p6rb7l.png",
              },
              {
                name: "Dr. Suraj Bhansali",
                role: "Experienced Leader at GCC & CRO",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752090501/Dr._Suraj_Bhansali-whitebg_lqv3l8.png",
              },
            ]}
          />
        </div>

        {/* Technology Advisors */}
        <div id="technology-advisors" className="z-20">
          <TeamSection
            title="Technology Advisors"
            members={[
              {
                name: "Mr. Sharath Doddla",
                role: "Founder, CTO at ADQ Services",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752090501/Mr._Sharath_Doddla-whitebg_xmtdke.png",
              },
              {
                name: "Mr. Aswani Kumar Iraganaboina",
                role: "Founder & CEO of RunCode",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752090500/Mr._Aswani_Kumar_Iraganaboina-whitebg_n9pc8s.png",
              },
              {
                name: "Dr. Meenakshi S",
                role: "AUVNLP, Product Manager",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752090499/Dr._Meenakshi_S-whitebg_tlcjyl.png",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
