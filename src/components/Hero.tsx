import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Star, Zap } from 'lucide-react';
import { useRef } from 'react';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  return (
    <section ref={containerRef} className="relative min-h-[120vh] flex items-center justify-center overflow-hidden pt-[9rem]">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Hero Image with Parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroBg}
          alt="Max Gallows Display"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-10 md:left-20 w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary/30 to-secondary/20 blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/4 right-10 md:right-20 w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-accent/20 to-primary/10 blur-3xl"
      />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 container-custom text-center px-4">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-gradient mb-10"
        >
          <Star className="w-4 h-4 text-primary fill-primary" />
          <span className="text-sm font-semibold tracking-wider uppercase">Proudly Weird Since Day One</span>
          <Star className="w-4 h-4 text-primary fill-primary" />
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] leading-[0.85] tracking-tight"
          >
            <span className="block">DISPLAY</span>
            <span className="block text-gradient">DECOR</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl mt-4 font-sans font-light text-muted-foreground tracking-widest">
              & MORE
            </span>
          </motion.h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mt-10 mb-12 leading-relaxed"
        >
          Where display meets disgrace. LEGO-compatible stands and decor you definitely 
          <span className="text-primary font-medium"> won't find anywhere else</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#products"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary group"
          >
            <span className="flex items-center gap-2">
              Explore Collection
              <Zap className="w-4 h-4 group-hover:animate-bounce-slow" />
            </span>
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-outline"
          >
            Learn Our Story
          </motion.a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-20"
        >
          {[
            { value: '100%', label: 'Weird' },
            { value: '3D', label: 'Printed' },
            { value: 'USA', label: 'Made' },
            { value: '50+', label: 'Products' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-3xl md:text-4xl text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#features"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-medium">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 rounded-full bg-primary"
            />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
};
