import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CardData } from "@/app/data/cards";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface PostcardProps {
  card: CardData;
  index: number;
}

export function Postcard({ card, index }: PostcardProps) {
  // Random slight rotation for rustic "pile of cards" feel
  const randomRotate = index % 2 === 0 ? 1 : -1; 
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05, 
        rotate: 0, 
        zIndex: 10,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
      }}
      className="relative group cursor-pointer"
      style={{ rotate: `${randomRotate}deg` }}
    >
      <Link to={`/message/${card.id}`} className="block">
        <div className="bg-stone-100 p-3 pb-8 shadow-md border border-stone-200 transform transition-transform duration-300">
          {/* Card Image Area */}
          <div className="relative aspect-[3/2] overflow-hidden bg-stone-200 mb-4 border border-stone-300 sepia-[.3]">
             <ImageWithFallback 
                src={card.image} 
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          </div>

          {/* Card Content (Handwritten style) */}
          <div className="text-center space-y-2 px-2">
            <h3 className="font-['Crimson_Text'] text-2xl text-stone-800 italic font-bold tracking-wide">
              {card.title}
            </h3>
            <p className="font-['Crimson_Text'] text-stone-600 text-lg italic">
              {card.previewText}
            </p>
            <div className="w-16 h-px bg-stone-300 mx-auto mt-4" />
          </div>

          {/* Stamp/Postmark imitation */}
          <div className="absolute top-4 right-4 w-12 h-12 border-2 border-stone-400/50 rounded-full flex items-center justify-center rotate-12 opacity-70">
             <span className="text-[8px] font-serif text-stone-500 uppercase text-center leading-tight">
               Love<br/>Mail<br/>2026
             </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
