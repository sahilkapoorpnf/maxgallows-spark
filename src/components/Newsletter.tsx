import { motion } from 'framer-motion';
import { Send, Check, Sparkles } from 'lucide-react';
import { useState } from 'react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

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
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 left-10 w-40 h-40 border border-primary/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 right-10 w-60 h-60 border border-secondary/20 rounded-full"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="container-custom relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-10"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider">Join 10,000+ Collectors</span>
          </motion.div>

          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6">
            JOIN THE <span className="text-gradient">WEIRD</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-lg mx-auto">
            Get notified about new drops, exclusive sales, and delightfully strange creations.
          </p>

          {/* Form */}
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 neon-glow"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                <Check className="w-8 h-8 text-accent-foreground" />
              </div>
              <p className="text-2xl font-display mb-2">Welcome to the weird side! 🎉</p>
              <p className="text-muted-foreground">Check your inbox for a special welcome gift.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
              <div className={`relative rounded-full p-2 transition-all duration-500 ${
                isFocused 
                  ? 'bg-gradient-to-r from-primary to-secondary p-[2px]' 
                  : 'bg-border p-[1px]'
              }`}>
                <div className="flex items-center bg-background rounded-full overflow-hidden">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required
                    className="flex-1 px-8 py-5 bg-transparent text-lg text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="m-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-shadow"
                  >
                    Subscribe
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
};
