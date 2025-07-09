
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";

interface Webinar {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  type: string;
  location: string;
  videoUrl?: string;
  speaker?: {
    name: string;
    title: string;
    imageUrl: string;
  };
  highlights?: string[];
}

const allWebinars: Webinar[] = [
    {
      id: "ai-in-life-sciences",
      title: "CAIRL Learning Labs - AI in Life Sciences",
      date: "July 4, 2025",
      description: "Join us for an insightful session on AI applications in life sciences, featuring industry experts and hands-on learning experiences. This webinar covers the latest trends in AI-driven drug discovery, personalized medicine, and genomic analysis.",
      imageUrl: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751394883/Role_of_AIML_in_Life_Sciences_-_Raghavendra_f08iaa.png",
      type: "Webinar",
      location: "Virtual",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      speaker: {
          name: "Dr. Raghavendra Singh",
          title: "AI Research Lead, Life Sciences",
          imageUrl: "https://randomuser.me/api/portraits/men/34.jpg"
      },
      highlights: [
        "Expert insights on AI in drug discovery.",
        "Hands-on demo of AI tools for genomics.",
        "Future trends in personalized medicine.",
        "Ethical considerations and regulatory landscape.",
      ],
    },
    {
      id: "ai-in-design",
      title: "CAIRL Learning Labs - AI in Design",
      date: "June 20, 2025",
      description: "Exploring how AI is transforming the design industry, from generative design tools to AI-assisted creative processes. This session showcases real-world case studies and discusses the future of human-AI collaboration in design.",
      imageUrl: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751394494/Design_Meets_AI_Augmentation_-_ep6_s4uwqj.png",
      type: "Webinar",
      location: "Virtual",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      speaker: {
          name: "Jane Doe",
          title: "Principal Designer, Creative AI",
          imageUrl: "https://randomuser.me/api/portraits/women/45.jpg"
      },
      highlights: [
        "Showcase of AI-powered design tools",
        "Case studies from leading design firms",
        "Interactive session on AI-assisted creativity",
        "Ethical considerations in AI-generated design",
      ],
    },
    {
      id: "ai-in-pharma",
      title: "CAIRL Learning Labs - AI in Pharma",
      date: "June 27, 2025",
      description: "Exploring AI applications in pharmaceutical research and drug discovery with industry leaders. This webinar provides a deep dive into how AI is accelerating the development of new drugs and improving clinical trial outcomes.",
      imageUrl: "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751394493/AI_for_Pharma_-_ep7_et1sqw.png",
      type: "Webinar",
      location: "Virtual",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      speaker: {
          name: "John Smith",
          title: "Director of R&D, PharmaTech",
          imageUrl: "https://randomuser.me/api/portraits/men/46.jpg"
      },
      highlights: [
        "Deep dive into AI-driven drug discovery",
        "Case studies from leading pharma companies",
        "Hands-on session with AI tools for molecular analysis",
        "The role of AI in clinical trial optimization.",
      ],
    },
  ];


const WebinarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [webinar, setWebinar] = useState<Webinar | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedWebinars, setRelatedWebinars] = useState<Webinar[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    setTimeout(() => {
      const currentWebinar = allWebinars.find((w) => w.id === id) || null;
      setWebinar(currentWebinar);
      if (currentWebinar) {
        const related = allWebinars.filter((w) => w.id !== currentWebinar.id).slice(0, 3);
        setRelatedWebinars(related);
      }
      setIsLoading(false);
    }, 500);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!webinar) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Webinar not found</h2>
          <p className="text-muted-foreground">The webinar you're looking for doesn't exist or has been removed.</p>
          <Link to="/happenings">
            <Button variant="outline" className="mt-6">Go Back to Happenings</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src={webinar.imageUrl} 
          alt={webinar.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-4"
          >
            {webinar.type}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white text-center max-w-4xl"
          >
            {webinar.title}
          </motion.h1>
        </div>
      </div>

      {/* Info Bar */}
      <div className="bg-card py-4 border-b border-border sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4">
            {webinar.speaker && (
                <div className="flex items-center gap-4">
                <img 
                    src={webinar.speaker.imageUrl} 
                    alt={webinar.speaker.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div>
                    <p className="text-foreground font-semibold">{webinar.speaker.name}</p>
                    <p className="text-sm text-muted-foreground">{webinar.speaker.title}</p>
                </div>
                </div>
            )}
            <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <span className="text-sm font-medium">{webinar.date}</span>
                </div>
                <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span className="text-sm font-medium">{webinar.location}</span>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2">
                {webinar.videoUrl && (
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-6">Webinar Recording</h2>
                        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl border border-border">
                            <iframe
                                src={webinar.videoUrl}
                                title="Webinar Video Player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                )}

                <div>
                    <h2 className="text-3xl font-bold text-foreground mb-6">About this Webinar</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{webinar.description}</p>
                </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1">
                <div className="sticky top-24 bg-card p-6 rounded-2xl shadow-xl border border-border">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Key Highlights</h3>
                    {webinar.highlights && (
                        <ul className="space-y-4">
                            {webinar.highlights.map((highlight, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <span className="text-muted-foreground">{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
      </div>

      {/* Related Webinars */}
      {relatedWebinars.length > 0 && (
        <div className="bg-card py-16 mt-12">
            <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Related Webinars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedWebinars.map((related) => (
                <Link to={`/webinar/${related.id}`} key={related.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg aspect-[16/10] mb-4 shadow-lg">
                    <img 
                        src={related.imageUrl} 
                        alt={related.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                        {related.type}
                        </span>
                    </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {related.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{related.date}</span>
                    </div>
                </Link>
                ))}
            </div>
            </div>
        </div>
      )}
    </main>
  );
};

export default WebinarDetails;
