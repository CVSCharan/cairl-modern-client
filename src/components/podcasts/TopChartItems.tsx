import { Pause, Play } from "lucide-react";

interface TopChartItemProps {
  rank: number;
  title: string;
  type: string;
  isActive?: boolean;
  audioUrl?: string;
  thumbnail?: string;
  isPlaying: boolean;
  onSelectTrack: () => void;
}

const TopChartItem: React.FC<TopChartItemProps> = ({
  rank,
  title,
  type,
  isActive = false,
  thumbnail,
  isPlaying,
  onSelectTrack,
}) => {
  return (
    <div
      className={`group bg-card border border-border/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
        isActive ? "ring-2 ring-primary/20 shadow-2xl" : ""
      }`}
      onClick={onSelectTrack}
    >
      <div className="flex items-center gap-6 p-6">
        {/* Rank Number */}
        <div className="flex-shrink-0 w-12 h-12 bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center">
          <span
            className={`text-lg font-bold ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {rank}
          </span>
        </div>

        {/* Thumbnail */}
        <div className="relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden shadow-lg">
          {thumbnail ? (
            <>
              <img
                src={thumbnail}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
              <Play className="w-6 h-6 text-primary/60" />
            </div>
          )}
        </div>

        {/* Track Info */}
        <div className="flex-1 min-w-0 space-y-2">
          <h3
            className={`text-lg font-bold leading-tight truncate ${
              isActive ? "text-foreground" : "text-foreground"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm truncate ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {type}
          </p>
        </div>

        {/* Play/Pause Button */}
        <div className="flex-shrink-0">
          <button
            className={`w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group/btn ${
              isActive && isPlaying
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-secondary text-foreground hover:bg-primary/90 hover:text-secondary"
            } transform hover:scale-110`}
            onClick={(e) => {
              e.stopPropagation();
              onSelectTrack();
            }}
          >
            {isPlaying && isActive ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current ml-0.5" />
            )}
          </button>
        </div>
      </div>

      {/* Active State Indicator */}
      {isActive && (
        <div className="h-1 bg-gradient-to-r from-primary to-primary/70 rounded-b-2xl" />
      )}
    </div>
  );
};

export default TopChartItem;
