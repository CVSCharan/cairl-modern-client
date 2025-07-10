import type { Webinar } from "../types/webinar";

export const WebinarsData: Webinar[] = [
  {
    id: "ai-education-initiatives",
    title: "CAIRL Learning Labs Session 1",
    topic: "AI Education and Innovation for India",
    date: "16th May 2025",
    description:
      "The kickoff session of the CAIRL Learning Lab Series introduced key initiatives to democratize AI education, empower veterans, and foster collaboration across academia, industry, and research. The session highlighted the role of AI in various sectors and strategies to mitigate generative AI errors.",
    imageUrl:
      "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752113957/CAiRL_event_16-05-2025_b1fdjb.png",
    type: "Webinar",
    location: "Virtual",
    videoUrl: "https://www.youtube.com/embed/tKbp0z2ylbI",
    speaker: {
      name: "Ram Dhan Yadav Katamaraja",
      title: "CEO & Founder Colaberry Inc | Refactored.ai | Co-Founder CAiRL",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752111460/RamDhan_uu7lq0.jpg",
    },
    highlights: [
      "Launch of the CAIRL Learning Lab Series focused on AI innovation and education",
      "Introduction to Cal's Veterans in Data Science initiative",
      "Discussion on reducing AI hallucinations using Retrieval-Augmented Generation (RAG)",
      "Exploration of AI's impact on industries including healthcare and climate",
      "Announcement of the CAIRL AI Podcast for daily AI insights",
      "Collaboration plans with academia and startup communities",
    ],
    aboutWebinar:
      "This inaugural session of the CAIRL Learning Lab Series began with a thoughtful introduction to Cal’s Veterans in AI initiative, highlighting how former military personnel are being supported in their transition to data science careers. Ram Dhan Yadav Katamaraja shared the mission of democratizing access to AI education and emphasized the need for inclusive innovation, particularly in emerging economies like India. The session also introduced the structure of the CAIRL Learning Labs — a series of weekly discussions on practical and visionary AI applications across sectors.\n\nA significant portion of the webinar focused on the real-world challenges of AI implementation, particularly around reducing hallucinations and confident errors in generative models. Ram explained how Retrieval-Augmented Generation (RAG) systems can help mitigate such issues and stressed the importance of human oversight. Participants were also introduced to the new CAIRL AI podcast, which aims to keep learners updated on global AI trends. The session concluded with collaborative opportunities, future topic planning, and an open invitation for academics, students, and startups to engage with the CAIRL ecosystem.",
  },
  {
    id: "ai-regulatory-writing",
    title: "CAIRL Learning Labs Session 2",
    topic: "Generative AI for Regulatory Medical Writing",
    date: "23rd May 2025",
    description:
      "This session explores how generative AI is streamlining the regulatory writing process in pharma, helping writers automate routine documentation tasks while maintaining scientific accuracy, data privacy, and compliance standards.",
    imageUrl:
      "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752114040/CAiRL_event_16-05-2025_1_rmgnae.png",
    type: "Webinar",
    location: "Virtual",
    videoUrl: "https://www.youtube.com/embed/W35iFvMJhbE",
    speaker: {
      name: "Guruprasad_Padmanabhan",
      title: "CEO, Sangnaan AI | Founder, ASTHRA AI",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752111891/Guruprasad_Padmanabhan_hzfdn8.jpg",
    },
    highlights: [
      "Introduction to generative AI in regulatory documentation",
      "Use of RAG architectures to reduce turnaround times",
      "Human oversight and accountability in AI-assisted writing",
      "Discussion on hallucinations, data privacy, and compliance",
      "Pilot projects with pharma companies for real-world validation",
    ],
    aboutWebinar:
      "In this focused session, Guru, CEO of Sangnaan AI, delved into the future of regulatory medical writing through the lens of generative AI. The webinar highlighted how AI can significantly reduce the time and effort required for creating regulatory documents while preserving the high levels of precision and compliance demanded by the pharmaceutical industry. Attendees learned how Retrieval-Augmented Generation (RAG) models could help streamline document creation, bringing down timelines from months to weeks, and how AI can assist with the mechanical aspects of writing, allowing professionals to concentrate on scientific and regulatory insights.\n\nGuru emphasized that AI is meant to augment, not replace, human writers. The conversation included insights into handling hallucinations, fine-tuning AI models, and implementing human-in-the-loop processes to ensure accuracy. Real-world pilots, data privacy strategies, and feedback-based improvements were discussed in detail. The session also provided actionable ideas for integrating AI tools like ChatGPT and Copilot into regulatory workflows and set the stage for deeper exploration in upcoming Learning Lab sessions focused on healthcare, compliance, and innovation.",
  },
  {
    id: "math-thinking-in-ai",
    title: "CAIRL Learning Labs Session 3",
    topic:
      "Mathematical Thinking in Machine Learning and Artificial Intelligence",
    date: "30th May 2025",
    description:
      "This session explores the mathematical foundations of machine learning and AI, highlighting how abstraction, reasoning, and representation shape human and machine learning systems. With real-world examples, it uncovers how models evolve, learn, and impact fields like drug discovery.",
    imageUrl:
      "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752114150/CAiRL_Event_30-05-2025_j6xcj5.png",
    type: "Webinar",
    location: "Virtual",
    videoUrl: "https://www.youtube.com/embed/SQ62uiR3oF0",
    speaker: {
      name: "Surya Putchala",
      title: "Chief (AI Strategy) & Generative AI Specialist - InvestMates",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752114377/Surya-P_kehzvi.jpg",
    },
    highlights: [
      "Exploration of mathematical evolution in AI and machine learning",
      "Understanding abstraction, models, and object recognition",
      "Comparison of human vs. machine learning mechanisms",
      "Discussion on AlphaFold and AI’s role in drug discovery",
      "Real-world clustering problems and model representation concepts",
    ],
    aboutWebinar:
      "In this engaging session, Surya, Chief Generative AI Specialist, guided participants through the mathematical and philosophical foundations of artificial intelligence. From the basics of curve fitting and model representation to deeper concepts like abstraction and epistemology, Surya emphasized how mathematical thinking underpins all major advancements in AI and machine learning. He highlighted the contrast between human cognitive recognition and computational methods, using familiar examples like fruit classification, cricket strategies, and image clustering to make complex ideas accessible.\n\nThe webinar also featured discussions on curve fitting, error functions, high-dimensional separation techniques, and real-world applications like customer satisfaction analysis and AI-driven drug discovery. A major highlight was the deep dive into AlphaFold’s transformative impact on pharma R&D and its potential to significantly reduce drug development timelines. Surya concluded by encouraging attendees to explore modern AI tools and educational resources to further their understanding, reinforcing the value of mathematical clarity in developing and deploying intelligent systems.",
  },
];
