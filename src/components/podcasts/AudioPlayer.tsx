
import {
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Rewind, 
  FastForward 
} from "lucide-react";
import {
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "../ui/dialog";
import { Slider } from "../ui/slider";

interface AudioPlayerProps {
  isPlaying: boolean;
  volume: number;
  progress: number;
  duration: number;
  currentTrack: {
    title: string;
    thumbnail?: string;
  } | null;
  onPlayPause: () => void;
  onVolumeChange: (volume: number) => void;
  onSeek: (progress: number) => void;
  onClose: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  isPlaying,
  volume,
  progress,
  duration,
  currentTrack,
  onPlayPause,
  onVolumeChange,
  onSeek,
  onClose,
}) => {
  if (!currentTrack) {
    return null;
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <Dialog open={!!currentTrack} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full bg-background p-6 rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-foreground">
            Now Playing
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-6 pt-4">
          {currentTrack.thumbnail && (
            <img
              src={currentTrack.thumbnail}
              alt={currentTrack.title}
              className="w-48 h-48 rounded-lg object-cover shadow-md"
            />
          )}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-foreground">
              {currentTrack.title}
            </h4>
          </div>
          <div className="w-full">
            <Slider
              value={[progress]}
              max={duration}
              step={1}
              onValueChange={([value]) => onSeek(value)}
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>{formatTime(progress)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6">
            <button onClick={() => onSeek(progress - 10)} className="text-muted-foreground hover:text-foreground">
              <Rewind className="w-6 h-6" />
            </button>
            <button
              onClick={onPlayPause}
              className="w-16 h-16 flex items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-transform transform hover:scale-110 shadow-lg"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 fill-current" />
              ) : (
                <Play className="w-8 h-8 fill-current" />
              )}
            </button>
            <button onClick={() => onSeek(progress + 10)} className="text-muted-foreground hover:text-foreground">
              <FastForward className="w-6 h-6" />
            </button>
          </div>
          <div className="flex items-center gap-4 w-full max-w-xs">
            <button onClick={() => onVolumeChange(volume > 0 ? 0 : 0.5)} className="text-muted-foreground hover:text-foreground">
              {volume === 0 ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
            <Slider
              value={[volume]}
              max={1}
              step={0.01}
              onValueChange={([value]) => onVolumeChange(value)}
              className="w-full"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AudioPlayer;
