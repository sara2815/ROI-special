import { useEffect, useState, useRef } from "react";
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
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4;
    audio.loop = true;

    // If URL changed, update src
    if (audio.src !== window.location.origin + url) {
      audio.src = url;
    }

    if (isPlaying) {
      void audio.play().catch(() => {
        // Autoplay may be blocked; user will have to interact to start audio
      });
    } else {
      audio.pause();
    }
  }, [url, isPlaying]);

  // Keep an invisible audio element in the DOM
  return (
    <div className="hidden">
      <audio ref={audioRef} />
    </div>
  );
}
