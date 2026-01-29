import { motion } from 'framer-motion';
import { Star, ChevronRight, Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

const colorOptions = [
  { name: 'Black/White', primary: 'bg-black', secondary: 'bg-white border-2 border-border' },
  { name: 'Black/Red', primary: 'bg-black', secondary: 'bg-red-500' },
  { name: 'Black/Blue', primary: 'bg-black', secondary: 'bg-blue-500' },
  { name: 'Black/Green', primary: 'bg-black', secondary: 'bg-green-500' },
  { name: 'White/Black', primary: 'bg-white border-2 border-border', secondary: 'bg-black' },
  { name: 'Custom', primary: 'bg-gradient-to-br from-primary to-secondary', secondary: 'bg-gradient-to-br from-accent to-cyan-400' },
];

export const FeaturedProduct = () => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Featured Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-sm font-semibold uppercase tracking-wider">
            <Star className="w-4 h-4 text-primary fill-primary" />
            Featured Product
            <Star className="w-4 h-4 text-primary fill-primary" />
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-square rounded-[3rem] overflow-hidden glass-card group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://www.maxgallows.com/img/minifig-heart-display/lego-minifig-heart-display.avif"
                alt="Heart Display"
                className="w-full h-full object-cover"
              />
              
              {/* Sale Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -12 }}
                whileInView={{ scale: 1, rotate: -12 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                className="absolute top-8 left-8 px-6 py-3 rounded-2xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold text-lg shadow-lg shadow-primary/30"
              >
                20% OFF
              </motion.div>

              {/* Like Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsLiked(!isLiked)}
                className={`absolute top-8 right-8 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isLiked ? 'bg-red-500' : 'bg-background/80 backdrop-blur-sm'
                }`}
              >
                <Heart className={`w-6 h-6 ${isLiked ? 'text-white fill-white' : 'text-foreground'}`} />
              </motion.button>
            </div>

            {/* Floating Reviews Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              animate={{ y: [0, -10, 0] }}
              className="absolute -bottom-8 -right-8 md:right-8 p-6 rounded-3xl glass-card neon-glow"
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm font-semibold">Customer Favorite</p>
              <p className="text-xs text-muted-foreground">Over 500+ sold</p>
            </motion.div>

            {/* Decorative Blob */}
            <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full blur-3xl floating" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-4">
                HEART <span className="text-gradient">DISPLAY</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Desk decor for people who communicate affection with tiny plastic people. 
                Perfect for couples, best friends, or anyone who speaks fluent LEGO.
              </p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4">
              <span className="font-display text-5xl text-gradient">$25.60</span>
              <span className="text-2xl text-muted-foreground line-through">$32.00</span>
              <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-semibold">
                Save $6.40
              </span>
            </div>

            {/* Color Options */}
            <div>
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider font-medium">
                Color Combo: <span className="text-foreground">{colorOptions[selectedColor].name}</span>
              </p>
              <div className="flex flex-wrap gap-3">
                {colorOptions.map((color, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedColor(i)}
                    className={`relative w-12 h-12 rounded-full overflow-hidden transition-all duration-300 ${
                      selectedColor === i ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''
                    }`}
                  >
                    <div className={`absolute inset-0 left-0 w-1/2 ${color.primary}`} />
                    <div className={`absolute inset-0 right-0 left-1/2 ${color.secondary}`} />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Size Options */}
            <div>
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider font-medium">Size</p>
              <div className="flex gap-3">
                {['Standard (4 Figs)', 'Compact (2 Figs)'].map((size, i) => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-6 py-3 rounded-full border-2 text-sm font-medium transition-all duration-300 ${
                      i === 0 
                        ? 'border-primary bg-primary/10 text-primary' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary flex-1 group"
              >
                <span className="flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-outline flex items-center justify-center gap-2"
              >
                View Details
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
