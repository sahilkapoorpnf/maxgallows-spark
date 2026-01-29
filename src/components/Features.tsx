import { motion } from 'framer-motion';
import { Palette, Package, Heart, Zap } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'CUSTOM COLORS',
    description: 'Mix and match your perfect combo from our palette of options.',
  },
  {
    icon: Package,
    title: '3D PRINTED',
    description: 'Every piece is precision-crafted using high-quality PLA.',
  },
  {
    icon: Heart,
    title: 'MADE WITH LOVE',
    description: 'Handmade in the USA by a fellow LEGO enthusiast.',
  },
  {
    icon: Zap,
    title: 'FAST SHIPPING',
    description: 'Quick turnaround because waiting is the worst.',
  },
];

export const Features = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group text-center p-8"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/20 transition-colors duration-300"
              >
                <feature.icon className="w-7 h-7 text-primary" />
              </motion.div>

              {/* Content */}
              <h3 className="font-display text-xl md:text-2xl mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
