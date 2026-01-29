import { motion } from 'framer-motion';
import { Star, ChevronRight } from 'lucide-react';

export const FeaturedProduct = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden glass-card">
              <img
                src="https://www.maxgallows.com/img/minifig-heart-display/lego-minifig-heart-display.avif"
                alt="Featured Heart Display"
                className="w-full h-full object-cover"
              />
              
              {/* Sale Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                className="absolute top-6 left-6 px-4 py-2 rounded-full bg-primary text-primary-foreground font-bold text-sm animate-glow-pulse"
              >
                20% OFF
              </motion.div>
            </div>

            {/* Floating Element */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 p-4 rounded-2xl glass-card"
            >
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Customer Favorite</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              Featured Product
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              HEART DISPLAY
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Desk decor for people who communicate affection with tiny plastic people. 
              Perfect for couples, best friends, or anyone who speaks fluent LEGO.
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-display text-4xl text-primary">$25.60</span>
              <span className="text-xl text-muted-foreground line-through">$32.00</span>
            </div>

            {/* Options Preview */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-3">Available in 12+ color combos</p>
              <div className="flex gap-2">
                {['bg-black', 'bg-white', 'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-pink-500'].map((color, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${color} border-2 border-border/50 hover:scale-110 transition-transform cursor-pointer`}
                  />
                ))}
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
                  +6
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              Shop Now
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
