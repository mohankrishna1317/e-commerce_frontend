import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-4 bg-gradient-to-br from-primary via-river to-secondary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        {/* Main Quote */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-display text-3xl md:text-4xl lg:text-5xl italic font-semibold mb-6 text-balance">
            "Mulakallanka is not just a village,<br className="hidden md:block" /> it's a feeling."
          </p>
          <div className="w-24 h-1 bg-primary-foreground/30 mx-auto rounded-full" />
        </motion.div>

        {/* Village Info */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold mb-2">Mulakallanka</h3>
            <p className="font-display text-xl text-primary-foreground/80 italic mb-3">మూలకల్లంక</p>
            <p className="font-body text-primary-foreground/70 text-sm">
              A 300-year-old island village in East Godavari, Andhra Pradesh
            </p>
          </div>

          <div className="text-center">
            <p className="font-display text-lg font-semibold mb-3">Quick Links</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['About', 'History', 'Nature', 'Culture', 'Gallery', 'Location'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-body text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="font-display text-lg font-semibold mb-2">Est. ~1720</p>
            <p className="font-body text-primary-foreground/70 text-sm mb-4">
              Three centuries of heritage, tradition, and peace
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors font-body text-sm"
            >
              Back to Top ↑
            </button>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="font-body text-primary-foreground/60 text-sm text-center md:text-left">
              Designed with{' '}
              <Heart className="w-4 h-4 inline-block text-destructive animate-pulse" />{' '}
              for Mulakallanka
            </p>

            <p className="font-body text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Mulakallanka Village. Preserving heritage, embracing future.
            </p>
          </motion.div>
        </div>

        {/* Decorative Wave */}
        <div className="mt-12 flex justify-center gap-3 opacity-30">
          <span className="text-2xl">🌊</span>
          <span className="text-2xl">🌴</span>
          <span className="text-2xl">🏡</span>
          <span className="text-2xl">🌴</span>
          <span className="text-2xl">🌊</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
