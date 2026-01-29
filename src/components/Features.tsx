import { motion } from 'framer-motion';
import { Palette, Package, Heart, Zap, Truck, Award } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'CUSTOM COLORS',
    description: '12+ color combos to match your vibe',
    color: 'from-primary to-orange-400',
  },
  {
    icon: Package,
    title: '3D PRINTED',
    description: 'Precision-crafted with premium PLA',
    color: 'from-secondary to-pink-400',
  },
  {
    icon: Heart,
    title: 'MADE WITH LOVE',
    description: 'By a fellow LEGO enthusiast',
    color: 'from-accent to-emerald-400',
  },
  {
    icon: Zap,
    title: 'FAST TURNAROUND',
    description: 'Because waiting is the worst',
    color: 'from-primary to-secondary',
  },
  {
    icon: Truck,
    title: 'FREE SHIPPING',
    description: 'On orders over $50',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Award,
    title: 'TOP QUALITY',
    description: 'Built to last a lifetime',
    color: 'from-amber-400 to-orange-500',
  },
];

export const Features = () => {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-6">
            Why Max Gallows?
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl">
            BUILT <span className="text-gradient">DIFFERENT</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group p-6 rounded-3xl bg-card/50 border border-border/30 hover:border-primary/50 transition-all duration-500"
            >
              {/* Glow on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
              
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="font-display text-lg md:text-xl mb-2 group-hover:text-gradient transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
