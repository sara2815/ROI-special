import { useParams, Link, Navigate } from "react-router-dom";
import { CARDS } from "@/app/data/cards";
import { ArrowLeft, Quote } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function MessageView() {
  const { id } = useParams();
  const card = CARDS.find((c) => c.id === id);

  if (!card) {
    return <Navigate to="/collection" replace />;
  }

  return (
    <div className="min-h-screen bg-[#F5F2EB] flex items-center justify-center p-6 md:p-12">
      <div className="max-w-5xl w-full mx-auto relative">
        <Link 
          to="/collection" 
          className="absolute top-0 left-0 -mt-12 md:-mt-16 flex items-center gap-2 text-stone-500 hover:text-rose-800 transition-colors font-['Crimson_Text'] italic text-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Collection
        </Link>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#FDFBF7] shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row border border-stone-200"
        >
          {/* Image Side */}
          <div className="md:w-1/2 relative bg-stone-200 overflow-hidden min-h-[300px] md:min-h-[500px]">
            <div className="absolute inset-0 sepia-[.2] contrast-[0.9]">
               <ImageWithFallback 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover"
               />
            </div>
            <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply pointer-events-none" />
          </div>

          {/* Text Side (Letter) */}
          <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
            {/* Paper texture overlay simulation with CSS if image fails */}
            <div className="absolute top-8 right-8 text-stone-300">
               <Quote className="w-12 h-12 md:w-20 md:h-20 opacity-20 rotate-12" />
            </div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3, duration: 0.8 }}
               className="space-y-6 relative z-10"
            >
              <div className="flex justify-between items-baseline border-b border-stone-300 pb-4 mb-6">
                 <span className="font-serif text-stone-400 italic text-sm">{card.date}</span>
                 <div className="w-16 h-20 border border-dotted border-stone-300 flex items-center justify-center bg-stone-100/50 rotate-3">
                    <div className="w-12 h-16 border border-stone-300 rounded-sm bg-stone-200/50" />
                 </div>
              </div>

              <h2 className="font-['Great_Vibes'] text-5xl md:text-6xl text-stone-800 mb-6">
                {card.title}
              </h2>

              <div className="font-['Crimson_Text'] text-xl md:text-2xl leading-relaxed text-stone-700 whitespace-pre-wrap">
                {card.fullMessage}
              </div>

              <div className="pt-12 flex justify-end">
                <div className="transform -rotate-6">
                  <span className="font-['Great_Vibes'] text-4xl text-rose-900/80 border-b border-stone-300 pb-1">
                    With Love
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
