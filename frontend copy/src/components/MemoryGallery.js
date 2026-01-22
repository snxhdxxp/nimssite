import { motion } from "framer-motion";
import { memories } from "../data";

export const MemoryGallery = () => {
  return (
    <section 
      data-testid="memory-section"
      className="py-24 md:py-32 bg-bg-subtle"
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
            Favorite Memories
          </h2>
          <p className="font-body text-base leading-relaxed text-text-muted max-w-2xl mx-auto">
            Moments frozen in time that I'll treasure forever
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotate: 0, y: 40 }}
              whileInView={{ opacity: 1, rotate: memory.rotation, y: 0 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={`memory-card-${index}`}
              className="bg-white p-4 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <img
                  src={memory.image}
                  alt={memory.caption || "Memory"}
                  className="w-full h-full object-cover"
                />
              </div>
              {memory.caption && (
                <p className="font-accent text-xl text-center text-text-muted">
                  {memory.caption}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
