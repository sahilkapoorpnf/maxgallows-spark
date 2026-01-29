import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';
import logo from '@/assets/max-gallows-logo.svg';

const footerLinks = [
  { label: 'Home', href: '#' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: ExternalLink, href: 'https://pinterest.com', label: 'Pinterest' },
  { icon: ExternalLink, href: 'https://etsy.com', label: 'Etsy' },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/30">
      <div className="container-custom section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src={logo} alt="Max Gallows" className="h-10 mb-4 invert" />
            <p className="text-muted-foreground text-sm mb-4">
              Display meets disgrace. Proudly weird since day one.
            </p>
            <p className="text-muted-foreground/60 text-xs italic">
              Stultus Stercore
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display text-lg mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display text-lg mb-4">CONNECT</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border/30 text-center text-muted-foreground/60 text-xs"
        >
          <p>© {new Date().getFullYear()} Max Gallows. All rights reserved.</p>
          <p className="mt-1">Designed with ❤️ and a questionable amount of coffee.</p>
        </motion.div>
      </div>
    </footer>
  );
};
