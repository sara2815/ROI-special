import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Home } from "@/app/pages/Home";
import { MessageView } from "@/app/pages/MessageView";
import { LandingPage } from "@/app/pages/LandingPage";
import { MusicController } from "@/app/components/MusicController";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Router>
      {/* 
        MusicController handles playing music based on the current route.
        To change the music for specific pages, edit the MUSIC_TRACKS object in:
        src/app/components/MusicController.tsx
      */}
      <MusicController isPlaying={isPlaying} />
      
      <Routes>
        <Route path="/" element={<LandingPage onStartMusic={() => setIsPlaying(true)} />} />
        <Route path="/collection" element={<Home />} />
        <Route path="/message/:id" element={<MessageView />} />
      </Routes>
    </Router>
  );
}

export default App;
