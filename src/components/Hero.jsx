import { useEffect, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp  } from 'react-icons/fa';
import heroImg from '../assets/images/hero.png';
import { SOCIAL_LINKS } from '../data/social';

const HERO_TITLES = [
  'Full-Stack Developer',
  'React.js Developer',
  'MERN Stack Specialist',
  'React Native Developer',
];

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setFade(false);
      const timeout = setTimeout(() => {
        setCurrentTitleIndex(prev => (prev + 1) % HERO_TITLES.length);
        setFade(true);
      }, 500);
      return () => clearTimeout(timeout);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className="relative flex min-h-dvh w-full flex-col overflow-hidden bg-black
      bg-[linear-gradient(170deg,black_60%,#e5e5e5_5%)]
        md:flex-row md:bg-[linear-gradient(105deg,#e5e5e5_50%,black_50%)]"
    >
      {/* Photo — full-bleed on mobile (behind glass overlay), right half on desktop */}
      <section className="absolute inset-0 z-0 flex items-center justify-center md:relative md:w-1/2 md:order-2">
        <img
          src={heroImg}
          alt="Zohaib Munir"
          className="h-full w-100 object-cover object-center md:h-full md:object-cover mt-20"
        />
      </section>

      {/* Mobile glass overlay so text is readable over the photo */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[55%]
          bg-gradient-to-t from-black via-black/85 to-transparent md:hidden"
      />

      {/* Text block — bottom-anchored over the glass on mobile, left panel on desktop */}
      <section
        className="absolute inset-x-0 bottom-0 z-20 flex flex-row justify-between items-center gap-4 px-6 pb-10
          sm:px-8 sm:pb-14 md:flex-col
          md:static md:w-1/2 md:order-1 md:h-auto md:justify-center md:px-16 md:pb-0 md:text-black"
      >
        <div>
        <p className="text-base text-gray-300 md:text-gray-600">Hi, I am</p>

        <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl md:text-black lg:text-6xl">
          Zohaib Munir
        </h1>

        <h2
          className={`text-lg font-semibold text-gray-300 transition-opacity duration-500 ease-in-out
            sm:text-xl md:text-2xl md:text-gray-600
            ${fade ? 'opacity-100' : 'opacity-0'}`}
        >
          {HERO_TITLES[currentTitleIndex]}
        </h2>
        </div>
        {/* Social icons — mirrors the Figma's icon row under the name */}
        <div className="mt-2 flex flex-col md:flex-row items-center md:gap-10 gap-4">
        <a
          href={SOCIAL_LINKS.email}
          aria-label="Email"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:bg-black/10 md:text-black md:hover:bg-black/20"
        >
          <FaEnvelope size={16} />
        </a>
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:bg-black/10 md:text-black md:hover:bg-black/20"
        >
          <FaGithub size={16} />
        </a>
        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:bg-black/10 md:text-black md:hover:bg-black/20"
        >
          <FaLinkedin size={16} />
        </a>
        <a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:bg-black/10 md:text-black md:hover:bg-black/20"
      >
        <FaWhatsapp size={16} />
      </a>
      </div>
        </section>
        </header>
  );
};

export default Hero;