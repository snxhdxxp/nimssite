import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { quotes } from "../data";

export const QuoteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section 
      data-testid="quotes-section"
      className="py-24 md:py-32 bg-bg relative overflow-hidden"
      style={{
        backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')"
      }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-text mb-4">
            Quotes That Remind Me of You
          </h2>
          <p className="font-body text-base leading-relaxed text-text-muted max-w-2xl mx-auto">
            Words that capture what my heart feels
          </p>
        </motion.div>

        <div className="relative">
          <div className="min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Quote className="text-secondary-400 mx-auto mb-6" size={48} />
                <blockquote 
                  data-testid="quote-text"
                  className="font-heading italic text-3xl md:text-5xl text-text mb-6 leading-tight"
                >
                  "{quotes[currentIndex].text}"
                </blockquote>
                <cite 
                  data-testid="quote-author"
                  className="font-body text-base text-text-light not-italic"
                >
                  — {quotes[currentIndex].author}
                </cite>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              data-testid="quote-prev-btn"
              onClick={previous}
              className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center hover:bg-primary-600 transition-all hover:scale-105 active:scale-95"
              aria-label="Previous quote"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  data-testid={`quote-dot-${index}`}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-primary-500 w-8" 
                      : "bg-primary-200"
                  }`}
                  aria-label={`Go to quote ${index + 1}`}
                />
              ))}
            </div>

            <button
              data-testid="quote-next-btn"
              onClick={next}
              className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center hover:bg-primary-600 transition-all hover:scale-105 active:scale-95"
              aria-label="Next quote"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
