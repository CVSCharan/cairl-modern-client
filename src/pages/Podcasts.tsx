import { useState, useEffect, useRef } from "react";
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
    <main className="min-h-screen bg-background flex flex-col pt-8">
      {/* Hero Section */}
      <section className="bg-card pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-8">
              Podcasts
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 max-w-xl mx-auto">
              Everyday is Chance to Learn New Things
            </h1>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Lorem ipsum dolor sit et amet, consectetur adipiscing elit.
              Viverra tempor nunc dolor aliquam placerat porttitor.
            </p>
          </div>
        </div>
      </section>

      {/* Top Chart Section */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Top Chart</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {topCharts.map((item, index) => (
              <TopChartItem
                key={index}
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
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts Grid Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Podcasts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcasts.map((podcast) => (
              <PodcastCard
                key={podcast.id}
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
            ))}
          </div>
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
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 mt-16 pb-28">
        <CTA />
      </div>

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
    </main>
  );
};

export default Podcasts;
