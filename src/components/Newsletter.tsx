import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container-custom relative z-10"
      >
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Stay Updated
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            JOIN THE WEIRD
          </h2>
          <p className="text-muted-foreground mb-8">
            Get notified about new drops, sales, and delightfully strange creations.
          </p>

          {/* Form */}
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-2xl bg-primary/10 border border-primary/30"
            >
              <p className="text-lg font-medium text-primary">
                Welcome to the weird side! 🎉
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Subscribe
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
};
