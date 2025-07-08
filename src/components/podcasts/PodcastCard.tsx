import { Pause, Play } from "lucide-react";

interface PodcastCardProps {
  id: string;
  title: string;
  type: string;
  duration: string;
  imageUrl: string;
  isActive: boolean;
  isPlaying: boolean;
  onSelectTrack: () => void;
}

const PodcastCard: React.FC<PodcastCardProps> = ({
  id,
  title,
  type,
  duration,
  imageUrl,
  isActive,
  isPlaying,
  onSelectTrack,
}) => {
  return (
    <div
      id={`podcast-${id}`}
      className="group relative bg-secondary border border-primary rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
      onClick={onSelectTrack}
    >
      {/* Podcast Image with Duration Overlay */}
      <div className="relative aspect-video overflow-hidden bg-background group">
        {/* Image Wrapper for centering */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-3 right-3 bg-black/75 text-white text-xs font-medium px-2.5 py-1 rounded-md backdrop-blur-sm">
          {duration}
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/10">
          <div className="bg-white rounded-full p-3 shadow-lg transform scale-95 group-hover:scale-100 transition-transform duration-200">
            {isPlaying && isActive ? (
              <Pause className="w-5 h-5 text-gray-800" />
            ) : (
              <Play className="w-5 h-5 text-gray-800 ml-0.5" />
            )}
          </div>
        </div>
      </div>

      {/* Podcast Info */}
      <div className="p-6 flex flex-col items-center text-center space-y-3">
        {/* Type Badge */}
        <div className="flex items-center justify-center mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 uppercase tracking-wide">
            {type}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-foreground text-sm leading-tight mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
          {title}
        </h3>
      </div>

      {/* Active State Indicator */}
      {isActive && (
        <div className="absolute top-3 left-3 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
      )}
    </div>
  );
};

export default PodcastCard;
