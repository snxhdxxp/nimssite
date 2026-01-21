import { motion } from "framer-motion";
import { Heart, Sparkles, Star, Smile, Book, Sun } from "lucide-react";
import { admirationPoints } from "../data";

const iconMap = {
  Heart,
  Sparkles,
  Star,
  Smile,
  Book,
  Sun
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

export const AdmirationGrid = () => {
  return (
    <section 
      data-testid="admiration-section"
      className="py-24 md:py-32 bg-bg"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-text mb-4">
            Things I Admire About You
          </h2>
          <p className="font-body text-base leading-relaxed text-text-muted max-w-2xl mx-auto">
            Just a few of the countless reasons you're amazing
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {admirationPoints.map((point, index) => {
            const Icon = iconMap[point.icon];
            return (
              <motion.div
                key={index}
                variants={item}
                data-testid={`admiration-card-${index}`}
                className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 shadow-soft hover:shadow-hover"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-4">
                  <Icon className="text-primary-500" size={28} />
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-medium text-text mb-3">
                  {point.title}
                </h3>
                <p className="font-body text-base leading-relaxed text-text-muted">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
