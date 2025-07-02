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
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center mt-24 mb-8 z-20">
          {/* Vision Header */}
          <motion.h4
            initial={{ opacity: 0.5, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
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
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245473/Prof._Pallu_Reddanna_q6htli.png",
              },
              {
                name: "Dr. Ratnakar Palakodeti",
                role: "Secretary General - FABA",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245469/Dr._Ratnakar_Palakodeti_eqbgsd.png",
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
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245469/Mr._Neil_Gogte_h1wvou.png",
              },
              {
                name: "Dr. Prasad Null",
                role: "Physician Entrepreneur",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245469/Dr._Prasad_Nuli_xdu6ew.png",
              },
              {
                name: "Dr. Ravi Guijula",
                role: "PhD from IIT Hyderabad",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245470/Dr._Ravi_Gujjula_gtafxt.png",
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
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245471/Dr._Suhit_Anantula_vhfzlk.png",
              },
              {
                name: "Mr. Anurag Garg",
                role: "Global Engineering Executive & General Manager",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245470/Mr._Anurag_Garg_ldm2kn.png",
              },
              {
                name: "Dr. Suraj Bhansali",
                role: "Experienced Leader at GCC & CRO",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245473/Dr._Suraj_Bhansali_witjs7.png",
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
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245472/Mr._Sharath_Doddla_fleimj.png",
              },
              {
                name: "Mr. Aswani Kumar Iraganaboina",
                role: "Founder & CEO of RunCode",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245469/Mr._Aswani_Kumar_Iraganaboina_hx6afk.png",
              },
              {
                name: "Dr. Meenakshi S",
                role: "AUVNLP, Product Manager",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245470/Dr._Meenakshi_S_fnucbc.png",
              },
            ]}
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-24 z-20">
          <motion.h4
            initial={{ opacity: 0.5, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Leadership
          </motion.h4>

          <h1 className="text-4xl font-bold text-foreground mb-6">
            Board Members & Management Team
          </h1>
        </div>

        {/* Board Members */}
        <div id="board-members" className="z-20">
          <TeamSection
            title=""
            members={[
              {
                name: "Mr. Rammohan Manamasa",
                role: "Founder & Chairman",
                image:
                  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750245469/Mr._Rammohan_Manamasa_gqn4cl.png",
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
      </div>
    </section>
  );
};

export default Team;