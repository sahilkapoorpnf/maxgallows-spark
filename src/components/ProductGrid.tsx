import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ProductCard } from './ProductCard';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    title: 'HEART DISPLAY',
    description: 'Desk decor for people who communicate affection with tiny plastic people.',
    image: 'https://www.maxgallows.com/img/minifig-heart-display/lego-minifig-heart-display.avif',
  },
  {
    title: 'DESK ORGANIZER',
    description: 'Keep your workspace tidy and show off your favorite minifigs in one sleek setup.',
    image: 'https://www.maxgallows.com/img/organizer/lego-minifig-desk-organizers-compared.jpg',
  },
  {
    title: 'BOTANICAL VASE',
    description: 'A display vase that holds your LEGO® flowers and six tiny companions.',
    image: 'https://www.maxgallows.com/img/vase/lego-minifigure-vase-botanical-display-single-vase.jpg',
  },
  {
    title: 'MAGNETIC DISPLAY',
    description: 'Stick your minifigs where they belong — anywhere metal.',
    image: 'https://www.maxgallows.com/img/magnet-display/magnetic-lego-minifigure-display-hex-wall-mount-primary.avif',
  },
  {
    title: 'BRICKHEADZ STAND',
    description: 'Show off your square-headed squad with tiered visibility.',
    image: 'https://www.maxgallows.com/img/brickheadz/brickheadz-display-stand-front-loaded.jpg',
  },
  {
    title: 'HEX DISPLAY',
    description: 'Give your collectibles the pedestal they deserve.',
    image: 'https://www.maxgallows.com/img/brickheadz-hex-display/brickheadz-hex-display-set.webp',
  },
  {
    title: 'MODULAR DISPLAY',
    description: 'Stackable modular cases that expand with your collection.',
    image: 'https://www.maxgallows.com/img/modular-display/modular-lego-minifigure-display-stackable-group-combo.jpg',
  },
  {
    title: 'BOOKENDS',
    description: 'Shelf life meets shelf style. Keep books upright and minifigs on display.',
    image: 'https://www.maxgallows.com/img/bookends/lego-minifigure-bookends-display-dvd-collection.webp',
  },
];

export const ProductGrid = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section id="products" ref={sectionRef} className="section-padding relative overflow-hidden noise">
      {/* Background Elements */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ y: bgY }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none"
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
        >
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-6">
              The Collection
            </span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9]">
              CHOOSE YOUR<br />
              <span className="text-gradient">ADVENTURE</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            Every piece is crafted for those who appreciate the absurd beauty of organized chaos.
          </p>
        </motion.div>

        {/* Product Grid - Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {products.slice(0, 4).map((product, index) => (
            <ProductCard
              key={product.title}
              {...product}
              index={index}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {products.slice(4, 8).map((product, index) => (
            <ProductCard
              key={product.title}
              {...product}
              index={index + 4}
              delay={(index + 4) * 0.1}
            />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-3 px-8 py-4 rounded-full border-2 border-border hover:border-primary text-foreground hover:text-primary transition-all duration-300"
          >
            <span className="font-semibold uppercase tracking-wider">View All Products</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
