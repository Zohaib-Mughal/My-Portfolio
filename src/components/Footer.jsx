import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../data/social';

// Mapping your exported object into an array for easy rendering
const SOCIALS = [
  { name: 'GitHub', url: SOCIAL_LINKS.github },
  { name: 'LinkedIn', url: SOCIAL_LINKS.linkedin },
  { name: 'WhatsApp', url: SOCIAL_LINKS.whatsapp },
  { name: 'Email', url: SOCIAL_LINKS.email },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0f172a] px-6 py-12 text-white sm:px-10 md:px-20 lg:py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl"
      >
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <a 
              href="#home" 
              className="text-2xl font-extrabold tracking-tighter transition-opacity hover:opacity-80"
            >
              Zohaib<span className="text-gray-500">.</span>
            </a>
            <p className="mt-2 text-sm font-medium text-gray-400">
              © {currentYear} Zohaib Munir. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1.5 text-sm font-semibold tracking-wide text-gray-300 transition-colors hover:text-white"
              >
                {social.name}
                
                {/* Animated Arrow SVG */}
                <svg 
                  className="h-3.5 w-3.5 -translate-x-2 translate-y-2 text-gray-400 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-white group-hover:opacity-100" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            ))}
          </div>

        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;