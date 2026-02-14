import { useState, useRef } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

interface LandingPageProps {
  onStartMusic: () => void;
}

export function LandingPage({ onStartMusic }: LandingPageProps) {
  const navigate = useNavigate();
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleYesClick = () => {
    onStartMusic();
    navigate("/collection");
  };

  const handleNoHover = () => {
    if (!containerRef.current) return;
    
    // Calculate boundaries to keep button somewhat on screen but moving away
    const containerRect = containerRef.current.getBoundingClientRect();
    const maxMove = 150; // Max pixels to move
    
    // Generate random position
    const newX = (Math.random() - 0.5) * maxMove * 2;
    const newY = (Math.random() - 0.5) * maxMove * 2;
    
    setNoButtonPosition({ x: newX, y: newY });
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-[#F5F2EB] flex flex-col items-center justify-center p-4 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10 bg-[#FDFBF7] p-12 md:p-16 rounded-sm shadow-xl border border-stone-200 max-w-2xl w-full text-center relative"
      >
        {/* Envelope seal decoration */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-rose-800 rounded-full flex items-center justify-center shadow-lg border-4 border-[#F5F2EB]">
          <Heart className="w-6 h-6 text-[#F5F2EB] fill-[#F5F2EB]" />
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-8 mt-4"
        >
          <h1 className="font-['Great_Vibes'] text-6xl md:text-7xl text-stone-800 mb-2">
            Dear Shahman,
          </h1>
          
          <p className="font-['Crimson_Text'] text-2xl md:text-3xl text-stone-600 italic">
            Will you be my Valentine?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 min-h-[100px]">
            <button
              onClick={handleYesClick}
              className="px-8 py-3 bg-rose-800 text-[#F5F2EB] font-['Crimson_Text'] text-xl rounded hover:bg-rose-900 transition-all transform hover:scale-105 shadow-md border border-rose-900 cursor-pointer"
            >
              Yes, I will!
            </button>

            <motion.button
              animate={{ x: noButtonPosition.x, y: noButtonPosition.y }}
              onMouseEnter={handleNoHover}
              onClick={handleNoHover} // Also move on click just in case
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="px-8 py-3 bg-stone-200 text-stone-600 font-['Crimson_Text'] text-xl rounded hover:bg-stone-300 transition-colors border border-stone-300 cursor-pointer relative"
            >
              No thanks (how dare you)
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      
      <p className="absolute bottom-8 text-stone-400 font-['Crimson_Text'] italic text-sm">
        Say yes or else 🔪
      </p>
    </div>
  );
}
