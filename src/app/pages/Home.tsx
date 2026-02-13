import { CARDS } from "@/app/data/cards";
import { Postcard } from "@/app/components/Postcard";
import { Heart } from "lucide-react";
import { motion } from "motion/react";

export function Home() {
  return (
    <div className="min-h-screen bg-[#F5F2EB] text-stone-800 p-8 md:p-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 text-rose-800/80 mb-4"
          >
            <div className="h-px w-12 bg-rose-800/30" />
            <Heart className="w-5 h-5 fill-rose-800/20" />
            <div className="h-px w-12 bg-rose-800/30" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Great_Vibes'] text-6xl md:text-8xl text-stone-800 tracking-wide"
          >
            Open when
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-['Crimson_Text'] text-stone-600 text-xl max-w-lg mx-auto italic"
          >
            Open when
          </motion.p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4 justify-items-center">
          {CARDS.map((card, index) => (
            <Postcard key={card.id} card={card} index={index} />
          ))}
        </div>

        <footer className="mt-24 text-center font-['Crimson_Text'] text-stone-500 text-lg italic space-y-4">
          <p>By the coolest person </p>
          <a href="/" className="inline-block text-sm text-stone-400 hover:text-rose-800 transition-colors border-b border-transparent hover:border-rose-800">
            Once more! (start from the beginning)
          </a>
        </footer>
      </div>
    </div>
  );
}
