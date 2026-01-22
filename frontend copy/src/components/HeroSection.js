import { motion } from "framer-motion";
import { Heart, ArrowDown } from "lucide-react";

const FloatingHeart = ({ delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{ 
      opacity: [0, 1, 0],
      y: -100,
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      repeatDelay: 2,
      ease: "easeOut"
    }}
    className="absolute"
    style={{
      left: `${Math.random() * 80 + 10}%`,
      bottom: '10%'
    }}
  >
    <Heart className="text-secondary-400 fill-secondary-400" size={20} />
  </motion.div>
);

export const HeroSection = () => {
  return (
    <section 
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F9F9F7 0%, #E5EBE9 100%)"
      }}
    >
      {/* Floating hearts */}
      {[...Array(5)].map((_, i) => (
        <FloatingHeart key={i} delay={i * 0.8} />
      ))}

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-accent text-2xl md:text-3xl text-secondary-600 mb-6">
            For Nims
          </div>
          
          <h1 
            data-testid="hero-heading"
            className="font-heading text-5xl md:text-7xl font-medium tracking-tight leading-tight text-text mb-6"
          >
            A Collection of Moments,<br />
            Memories & Love
          </h1>
          
          <p className="font-body text-lg md:text-xl leading-relaxed text-text-muted max-w-2xl mx-auto mb-12">
            This space is dedicated to celebrating everything that makes you extraordinary. 
            Every smile, every moment, every reason I'm grateful for you.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        data-testid="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-primary-500" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};
