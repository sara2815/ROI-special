import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";

const MUSIC_TRACKS: Record<string, string> = {
  "/": "/audio/song_1.mp3",
  "/collection": "/audio/song_2.mp3",

  "/message/1": "/audio/song_1.mp3",
  "/message/2": "/audio/song_2.mp3",
  "/message/3": "/audio/song_3.mp3",
  "/message/4": "/audio/song_4.mp3",
  "/message/long-day": "/audio/song_5.mp3",
  default: "/audio/song_1.mp3",
};

interface MusicControllerProps {
  isPlaying: boolean;
}

export function MusicController({ isPlaying }: MusicControllerProps) {
  const location = useLocation();
  const [url, setUrl] = useState(MUSIC_TRACKS.default);

  useEffect(() => {
    const path = location.pathname;
    const specificTrack = MUSIC_TRACKS[path];
    setUrl(specificTrack ?? MUSIC_TRACKS.default);
  }, [location.pathname]);

  if (!isPlaying) return null;

  return (
    <div className="hidden">
      <ReactPlayer
        url={url}
        playing={isPlaying}
        loop
        volume={0.4}
        width="0"
        height="0"
      />
    </div>
  );
}
