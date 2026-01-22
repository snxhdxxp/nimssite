import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { compliments } from "../data";

export const ComplimentGenerator = () => {
  const [currentCompliment, setCurrentCompliment] = useState(null);
  const [usedIndices, setUsedIndices] = useState([]);

  const generateCompliment = () => {
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#8DA399', '#E6B8B8', '#D4AF37', '#FFFFFF']
    });

    // Get next compliment
    let availableIndices = compliments.map((_, i) => i).filter(i => !usedIndices.includes(i));
    
    // Reset if all used
    if (availableIndices.length === 0) {
      availableIndices = compliments.map((_, i) => i);
      setUsedIndices([]);
    }

    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    setUsedIndices([...usedIndices, randomIndex]);
    setCurrentCompliment(compliments[randomIndex]);
  };

  return (
    <section 
      data-testid="compliment-section"
      className="py-24 md:py-32 bg-bg-subtle relative overflow-hidden"
    >
      {/* Radial gradient background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(230, 184, 184, 0.3) 0%, rgba(249, 249, 247, 0) 70%)"
        }}
      />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-text mb-4">
            Need a Smile?
          </h2>
          <p className="font-body text-base leading-relaxed text-text-muted">
            Click the button for a little reminder of how amazing you are
          </p>
        </motion.div>

        <div className="bg-white/80 backdrop-blur-2xl border border-white/50 rounded-3xl p-12 shadow-glass">
          <div className="min-h-[200px] flex items-center justify-center mb-8">
            <AnimatePresence mode="wait">
              {currentCompliment ? (
                <motion.div
                  key={currentCompliment}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p 
                    data-testid="compliment-text"
                    className="font-body text-2xl md:text-3xl text-text leading-relaxed"
                  >
                    {currentCompliment}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <Sparkles className="text-secondary-400 mx-auto mb-4" size={48} />
                  <p className="font-body text-lg text-text-muted">
                    Click below to receive your compliment
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="text-center">
            <motion.button
              data-testid="compliment-btn"
              onClick={generateCompliment}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-body text-lg rounded-full shadow-soft hover:shadow-hover transition-all"
            >
              Click for a smile 😊
              <Sparkles size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
