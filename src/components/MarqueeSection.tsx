import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const MarqueeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['-25%', '0%']);

  const phrases = [
    'PROUDLY WEIRD',
    '✦',
    'DANGEROUSLY ORGANIZED',
    '✦',
    'DISPLAY MEETS DISGRACE',
    '✦',
    'LEGO COMPATIBLE',
    '✦',
    '3D PRINTED',
    '✦',
    'MADE IN USA',
    '✦',
  ];

  return (
    <section ref={containerRef} className="py-24 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      {/* First Marquee - Left */}
      <motion.div style={{ x: x1 }} className="flex gap-8 mb-8">
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex gap-8 shrink-0">
            {phrases.map((phrase, i) => (
              <span
                key={i}
                className={`text-6xl md:text-8xl lg:text-9xl font-display whitespace-nowrap ${
                  phrase === '✦' 
                    ? 'text-gradient' 
                    : 'text-foreground/10 hover:text-foreground/30 transition-colors duration-500'
                }`}
              >
                {phrase}
              </span>
            ))}
          </div>
        ))}
      </motion.div>

      {/* Second Marquee - Right (Reverse) */}
      <motion.div style={{ x: x2 }} className="flex gap-8">
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex gap-8 shrink-0">
            {[...phrases].reverse().map((phrase, i) => (
              <span
                key={i}
                className={`text-6xl md:text-8xl lg:text-9xl font-display whitespace-nowrap ${
                  phrase === '✦' 
                    ? 'text-gradient' 
                    : 'text-muted-foreground/20 hover:text-muted-foreground/40 transition-colors duration-500'
                }`}
              >
                {phrase}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
};
