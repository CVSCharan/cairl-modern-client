import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import CTA from "../components/CTA";
import PodcastCard from "../components/podcasts/PodcastCard";
import TopChartItem from "../components/podcasts/TopChartItems";
import AudioPlayer from "../components/podcasts/AudioPlayer";
import NewsLetters from "../components/NewsLetters";

const Podcasts = () => {
  const [currentTrack, setCurrentTrack] = useState<{
    title: string;
    audioUrl: string;
    thumbnail?: string;
  } | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => setProgress(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    // Disable scroll restoration so we can manually control it
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    setTimeout(() => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }, 100); // small delay to ensure DOM is rendered
  }, []);

  const handleSelectTrack = (track: {
    title: string;
    audioUrl: string;
    thumbnail?: string;
  }) => {
    if (currentTrack?.audioUrl === track.audioUrl) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      setCurrentTrack(track);
      audioRef.current.src = track.audioUrl;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else if (currentTrack) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    const updatedVolume = Math.max(0, Math.min(1, newVolume));
    setVolume(updatedVolume);
    audioRef.current.volume = updatedVolume;
  };

  const handleSeek = (newProgress: number) => {
    audioRef.current.currentTime = newProgress;
    setProgress(newProgress);
  };

  const handleClosePlayer = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    setCurrentTrack(null);
  };

  const topCharts = [
    {
      rank: 1,
      title: "BharatGen: India's Multilingual AI Leap Toward Tech Sovereignty",
      type: "AI in India",
      audioUrl:
        "https://res.cloudinary.com/dnyouhvwj/video/upload/v1752004688/bharatgen-india-s-multilingual-ai-leap-toward-tech-sovereignty-24th-june-2025_ko0ajf.mp3",
      thumbnail:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752006647/podcast-thumbnail_fjzb1h.webp",
      date: "24th June 2025",
    },
    {
      rank: 2,
      title: "Google AI Mode: Reinventing Search with Intelligent Depth",
      type: "AI in Search",
      audioUrl:
        "https://res.cloudinary.com/dnyouhvwj/video/upload/v1752004672/google-ai-mode-reinventing-search-with-intelligent-depth-25th-june-2025_ooghfz.mp3",
      thumbnail:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752006647/podcast-thumbnail_fjzb1h.webp",
      date: "25th June 2025",
    },
    {
      rank: 3,
      title: "Boosting Language Model Reasoning: New Research, Real Results",
      type: "AI Research",
      audioUrl:
        "https://res.cloudinary.com/dnyouhvwj/video/upload/v1752004645/boosting-language-model-reasoning-new-research-real-results-23rd-june-2025_ovdr3h.mp3",
      thumbnail:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752006647/podcast-thumbnail_fjzb1h.webp",
      date: "23rd June 2025",
    },
  ];

  const podcasts = [
    {
      id: "pod1",
      title:
        "AlphaEvolve: Gemini's Algorithm Discovery Agent by Google DeepMind",
      type: "AI Research",
      duration: "17:45",
      audioUrl:
        "https://res.cloudinary.com/dnyouhvwj/video/upload/v1752009796/alphaevolve-gemini-s-algorithm-discovery-agent-by-google-deepmind-7th-july-2025_ghgmjk.mp3",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752006647/podcast-thumbnail_fjzb1h.webp",
      date: "7th July 2025",
    },
    {
      id: "pod2",
      title:
        "Agentic AI at Work: MIT's Vision for Smarter Enterprise Workflows",
      type: "Future of Work",
      duration: "22:33",
      audioUrl:
        "https://res.cloudinary.com/dnyouhvwj/video/upload/v1752009800/agentic-ai-at-work-mit-s-vision-for-smarter-enterprise-workflows-2nd-july-2025_darxwq.mp3",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752006647/podcast-thumbnail_fjzb1h.webp",
      date: "2nd July 2025",
    },
    {
      id: "pod3",
      title: "AI's Role: Amplifying Human Mentorship, Not Replacing It",
      type: "AI & Society",
      duration: "19:22",
      audioUrl:
        "https://res.cloudinary.com/dnyouhvwj/video/upload/v1752009801/ai-s-role-amplifying-human-mentorship-not-replacing-it-8th-july-2025_twqumx.mp3",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752006647/podcast-thumbnail_fjzb1h.webp",
      date: "8th July 2025",
    },
    {
      id: "pod4",
      title: "Magenta Realtime: Google's Open-Source Leap into Live AI Music",
      type: "Creative AI",
      duration: "27:04",
      audioUrl:
        "https://res.cloudinary.com/dnyouhvwj/video/upload/v1752009802/magenta-realtime-google-s-open-source-leap-into-live-ai-music-4th-july-2025_r5vlgi.mp3",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752006647/podcast-thumbnail_fjzb1h.webp",
      date: "4th July 2025",
    },
    {
      id: "pod5",
      title:
        "Building India's AI Ecosystem: A Learning Lab Initiative by CAIRL",
      type: "AI in India",
      duration: "15:35",
      audioUrl:
        "https://res.cloudinary.com/dnyouhvwj/video/upload/v1752009802/building-india-s-ai-ecosystem-a-learning-lab-initiative-by-cairl-30th-june-2025_yhyayv.mp3",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752006647/podcast-thumbnail_fjzb1h.webp",
      date: "30th June 2025",
    },
    {
      id: "pod6",
      title:
        "Medical Superintelligence: Microsoft's AI Revolution in Diagnostics",
      type: "AI in Healthcare",
      duration: "31:08",
      audioUrl:
        "https://res.cloudinary.com/dnyouhvwj/video/upload/v1752009807/medical-superintelligence-microsoft-s-ai-revolution-in-diagnostics-3rd-july-2025_skdsqo.mp3",
      imageUrl:
        "https://res.cloudinary.com/dnyouhvwj/image/upload/v1752006647/podcast-thumbnail_fjzb1h.webp",
      date: "3rd July 2025",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="w-full bg-secondary">
        {/* Hero Section */}
        <div className="flex flex-col justify-center items-center text-foreground pb-8 sm:pb-10 lg:pb-12 pt-8">
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
            Podcasts
          </motion.h4>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl text-foreground font-bold mb-8">
              Every Day is a Chance to Learn New Things
            </h1>
            <p className="text-lg sm:text-xl max-w-xl md:max-w-3xl mx-auto text-muted-foreground">
              Discover insights from leading AI researchers, industry experts,
              and innovators shaping the future of artificial intelligence and
              technology.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-8">
          {/* Top Chart Section */}
          <div id="top-charts" className="mb-16 md:mb-20">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Top Chart
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
              Our most popular and trending podcast episodes this week
            </p>
            <div className="max-w-4xl mx-auto space-y-4">
              {topCharts.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <TopChartItem
                    rank={item.rank}
                    title={item.title}
                    type={item.type}
                    isActive={currentTrack?.audioUrl === item.audioUrl}
                    audioUrl={item.audioUrl}
                    thumbnail={item.thumbnail}
                    isPlaying={
                      isPlaying && currentTrack?.audioUrl === item.audioUrl
                    }
                    onSelectTrack={() => handleSelectTrack(item)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* All Podcasts Section */}
      <div
        id="all-podcasts"
        className="relative min-h-screen flex flex-col justify-center items-center text-foreground py-16 sm:py-20 lg:py-24"
      >
        {/* Background Element */}
        <div className="absolute top-20 left-0 w-full h-full z-0 opacity-55 pointer-events-none">
          <img
            src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750554423/Topology-1_bphtdf.png"
            alt="Background Element"
            className="absolute top-20 left-0 min-w-[400px] min-h-[400px] object-contain"
          />
        </div>
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
          Latest Episodes
        </motion.h4>
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Explore Our Podcast Library
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
          Deep dive into AI research, innovation, and the future of technology
          with our comprehensive podcast collection
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {podcasts.map((podcast, index) => (
            <motion.div
              key={podcast.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <PodcastCard
                id={podcast.id}
                title={podcast.title}
                type={podcast.type}
                duration={podcast.duration}
                imageUrl={podcast.imageUrl}
                isActive={currentTrack?.audioUrl === podcast.audioUrl}
                isPlaying={
                  isPlaying && currentTrack?.audioUrl === podcast.audioUrl
                }
                onSelectTrack={() =>
                  handleSelectTrack({
                    title: podcast.title,
                    audioUrl: podcast.audioUrl,
                    thumbnail: podcast.imageUrl,
                  })
                }
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Collaboration Section */}
      <section className="py-12 md:py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center text-sm text-muted-foreground">
          <p className="mb-4 text-lg font-semibold text-foreground">
            These podcasts are in collaboration with:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <img
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176660/footer-logo_jgk1wb.png"
              alt="CAiRL Logo"
              className="h-12 w-auto object-contain"
            />
            <img
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750959808/Colaberry_logo_c6h8uc.png"
              alt="Colaberry Logo"
              className="h-12 w-auto object-contain"
            />
            <img
              src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1752014720/colaberry-school-of-data-analytics-logo_u6yvjh.jpg"
              alt="Colaberry School of Data Analytics Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <CTA />
        </div>
      </section>

      <NewsLetters />

      {currentTrack && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          <AudioPlayer
            isPlaying={isPlaying}
            volume={volume}
            progress={progress}
            duration={duration}
            currentTrack={currentTrack}
            onPlayPause={handlePlayPause}
            onVolumeChange={handleVolumeChange}
            onSeek={handleSeek}
            onClose={handleClosePlayer}
          />
        </motion.div>
      )}
    </main>
  );
};

export default Podcasts;
