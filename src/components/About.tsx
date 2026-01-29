import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="flex justify-center mb-12"
          >
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-glow-lg">
                <Quote className="w-10 h-10 text-primary-foreground" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 w-full h-full"
              >
                <Sparkles className="absolute -top-2 left-1/2 w-6 h-6 text-primary" />
                <Sparkles className="absolute top-1/2 -right-2 w-4 h-4 text-secondary" />
                <Sparkles className="absolute -bottom-2 left-1/2 w-5 h-5 text-accent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Main Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <p className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight mb-8">
              MAX GALLOWS IS WHERE{' '}
              <span className="text-gradient">DISPLAY MEETS DISGRACE</span>
            </p>
          </motion.blockquote>

          {/* Latin Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center text-2xl md:text-3xl text-muted-foreground italic mb-12 font-light"
          >
            Stultus Stercore
          </motion.p>

          {/* Description Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            {[
              {
                title: 'The Vision',
                description: 'Every piece is designed to make you smile, organize your chaos, and display your collection with weird pride.',
              },
              {
                title: 'The Craft',
                description: 'Precision 3D printed in the USA using premium PLA. Each piece is quality checked before shipping.',
              },
              {
                title: 'The Vibe',
                description: 'For collectors who know their minifigs are tiny works of art that deserve a proper stage.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl glass-card border-gradient group"
              >
                <h3 className="font-display text-2xl mb-4 group-hover:text-gradient transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
