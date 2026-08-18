import { FaFacebook, FaLinkedin, FaInstagram, FaEnvelope,FaWhatsapp } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import { SOCIAL_LINKS } from '../data/social';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#1a1a1a] px-6 py-12 text-center text-white">
      <button
        onClick={scrollToTop}
        className="mx-auto mb-8 flex flex-col items-center gap-1 text-xs font-bold tracking-widest text-gray-300 hover:text-white transition-colors"
      >
        <FiArrowUp size={18} />
        BACK TO TOP
      </button>

      <div className="mb-8 flex items-center justify-center gap-5">
        {/* <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="flex h-10 w-10 items-center justify-center rounded border border-white/20 hover:bg-white/10 transition-colors"
        >
          <FaFacebook size={16} />
        </a> */}
        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-10 w-10 items-center justify-center rounded border border-white/20 hover:bg-white/10 transition-colors"
        >
          <FaLinkedin size={16} />
        </a>
        {/* <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-10 w-10 items-center justify-center rounded border border-white/20 hover:bg-white/10 transition-colors"
        >
          <FaInstagram size={16} />
        </a> */}
        <a
          href={SOCIAL_LINKS.email}
          aria-label="Email"
          className="flex h-10 w-10 items-center justify-center rounded border border-white/20 hover:bg-white/10 transition-colors"
        >
          <FaEnvelope size={16} />
        </a>
        <a
          href={SOCIAL_LINKS.whatsapp}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
  className="flex h-10 w-10 items-center justify-center rounded border border-white/20 hover:bg-white/10 transition-colors"
>
  <FaWhatsapp size={16} />
</a>
      </div>

      <p className="text-xs text-gray-500">
        <span className="font-semibold text-gray-300">© {new Date().getFullYear()} Zohaib Munir</span>{' '}
        All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;