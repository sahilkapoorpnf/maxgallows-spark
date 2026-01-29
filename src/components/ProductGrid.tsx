import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';

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
    title: 'POST-IT ORGANIZER',
    description: 'The desk organizer that understands you collect things on purpose.',
    image: 'https://www.maxgallows.com/img/post-it-organizer/post-it-note-desk-organizer-pen-pencil-holder-minifigure-display.avif',
  },
  {
    title: 'BRICKHEADZ STAND',
    description: 'Show off your square-headed squad with tiered visibility and clean styling.',
    image: 'https://www.maxgallows.com/img/brickheadz/brickheadz-display-stand-front-loaded.jpg',
  },
  {
    title: 'HEX DISPLAY STANDS',
    description: 'Give your collectibles the pedestal they deserve.',
    image: 'https://www.maxgallows.com/img/brickheadz-hex-display/brickheadz-hex-display-set.webp',
  },
  {
    title: 'MODULAR DISPLAY',
    description: 'Stackable modular cases that expand with your collection.',
    image: 'https://www.maxgallows.com/img/modular-display/modular-lego-minifigure-display-stackable-group-combo.jpg',
  },
];

export const ProductGrid = () => {
  return (
    <section id="products" className="section-padding bg-background noise">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Our Collection
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-4">
            CHOOSE YOUR ADVENTURE
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every piece is crafted for those who appreciate the absurd beauty of organized chaos.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              {...product}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
