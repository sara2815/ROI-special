import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";

// Configuration for music tracks (local MP3 files placed in `public/audio`)
// Names expected: song_1.mp3, song_2.mp3, song_3.mp3
const MUSIC_TRACKS: Record<string, string> = {
  // Default / landing page
  "/": "/audio/song_1.mp3",

  // Collection / home
  "/collection": "/audio/song_2.mp3",

  // Default fallback
  default: "/audio/song_1.mp3",
};

interface MusicControllerProps {
  isPlaying: boolean;
}

export function MusicController({ isPlaying }: MusicControllerProps) {
  const location = useLocation();
  const [url, setUrl] = useState(MUSIC_TRACKS.default);

  useEffect(() => {
    // Check if the current path has a specific track assigned
    const path = location.pathname;
    // Message pages share the same track (uses song_3)
    if (path.startsWith("/message")) {
      setUrl("/audio/song_3.mp3");
      return;
    }

    const specificTrack = MUSIC_TRACKS[path];
    setUrl(specificTrack ?? MUSIC_TRACKS.default);
  }, [location]);

  if (!isPlaying) return null;

  return (
    <div className="hidden">
      <ReactPlayer
        url={url}
        playing={isPlaying}
        loop={true}
        volume={0.4}
        width="0"
        height="0"
      />
    </div>
  );
}
