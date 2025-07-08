import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CTA from "../components/CTA";
import PodcastCard from "../components/podcasts/PodcastCard";
import TopChartItem from "../components/podcasts/TopChartItems";
import AudioPlayer from "../components/podcasts/AudioPlayer";

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
    <main className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[70vh] w-full bg-background overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
        {/* Background Lamp Effect */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="absolute top-1/2 left-1/2 h-[20rem] w-[20rem] sm:h-[24rem] sm:w-[24rem] md:h-[28rem] md:w-[28rem] lg:h-[32rem] lg:w-[32rem] xl:h-[36rem] xl:w-[36rem] -translate-x-1/2 -translate-y-1/2">
            <div
              className="absolute h-full w-full rounded-full bg-primary/10 blur-3xl"
              style={{ transform: "scale(1.5)" }}
            />
            <div
              className="absolute h-full w-full"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(29, 78, 216, 0.2) 0%, transparent 60%)",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm md:text-base font-medium mb-4 sm:mb-6 md:mb-8 shadow-sm border border-border"
          >
            Podcasts
          </motion.h4>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-5 md:mb-6 leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight max-w-4xl"
          >
            Every Day is a Chance to{" "}
            <span className="text-primary">Learn New Things</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mx-auto leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed"
          >
            Discover insights from leading AI researchers, industry experts, and innovators shaping the future of artificial intelligence and technology.
          </motion.p>
        </div>
      </section>

      {/* Top Chart Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm border border-border"
            >
              Featured Content
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6"
            >
              Top <span className="text-primary">Chart</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg"
            >
              Our most popular and trending podcast episodes this week
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-4"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Podcasts Grid Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-sm border border-border"
            >
              Latest Episodes
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6"
            >
              Explore Our <span className="text-primary">Podcast Library</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg"
            >
              Deep dive into AI research, innovation, and the future of technology with our comprehensive podcast collection
            </motion.p>
          </motion.div>
          
          {/* Podcasts Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center text-sm text-muted-foreground">
          <p className="mb-4 text-lg font-semibold text-foreground">These podcasts are in collaboration with:</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <img src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176660/footer-logo_jgk1wb.png" alt="CAiRL Logo" className="h-12 w-auto object-contain" />
            <img src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750959808/Colaberry_logo_c6h8uc.png" alt="Colaberry Logo" className="h-12 w-auto object-contain" />
            <img src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1752014720/colaberry-school-of-data-analytics-logo_u6yvjh.jpg" alt="Colaberry School of Data Analytics Logo" className="h-12 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <CTA />
        </div>
      </section>

      {currentTrack && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
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
