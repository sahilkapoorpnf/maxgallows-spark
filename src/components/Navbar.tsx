import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Sparkles } from 'lucide-react';
import logo from '@/assets/max-gallows-logo.svg';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Displays', href: '#products' },
  { label: 'Decor', href: '#products' },
  { label: 'About', href: '#about' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-[60] overflow-hidden"
        style={{
          background: 'linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 50%, hsl(var(--primary)) 100%)',
        }}
      >
        <div className="marquee py-2">
          <div className="marquee-content">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="flex items-center gap-3 px-8 text-sm font-semibold text-primary-foreground whitespace-nowrap">
                <Sparkles className="w-4 h-4" />
                20% OFF NEW YEAR SALE
                <Sparkles className="w-4 h-4" />
                FREE SHIPPING ON ORDERS $50+
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-10 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass py-3' : 'bg-transparent py-5'
        }`}
      >
        <nav className="container-custom flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="relative z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={logo} alt="Max Gallows" className="h-10 md:h-14 invert brightness-200" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative px-5 py-2 text-sm uppercase tracking-widest font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-3 rounded-full bg-muted/50 hover:bg-muted transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center pulse-ring">
                0
              </span>
            </motion.button>

            <motion.a
              href="#products"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:flex btn-primary text-sm"
            >
              <span>Shop Now</span>
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-3 rounded-full bg-muted/50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
                animate={{ opacity: 1, clipPath: 'circle(150% at top right)' }}
                exit={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="fixed inset-0 top-10 bg-background/98 backdrop-blur-xl z-40 md:hidden"
              >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="text-4xl font-display font-bold text-foreground hover:text-gradient transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
};
