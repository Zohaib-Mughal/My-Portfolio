import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position to trigger the glassmorphic background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom smooth scroll handler
  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu when a link is clicked
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 py-4 shadow-sm backdrop-blur-md' // Glassmorphic state
          : 'bg-transparent py-6' // Initial transparent state
      }`}
    >
      <div className="mx-auto flex max-w-8xl items-center justify-between px-6 sm:px-10 md:px-20">
        
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, '#home')}
          className="text-xl font-extrabold tracking-tighter text-black transition-opacity hover:opacity-70"
        >
          Zohaib<span className="text-gray-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-sm font-semibold tracking-wide text-gray-600 transition-colors hover:text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="flex flex-col items-center justify-center gap-1.5 p-2 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
              isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
              isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full border-t border-gray-100 bg-white shadow-lg md:hidden"
          >
            <ul className="flex flex-col px-6 py-4 sm:px-10">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="block border-b border-gray-50 py-4 text-sm font-semibold tracking-wide text-gray-600 transition-colors hover:text-black"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;