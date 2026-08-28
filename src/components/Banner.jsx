import { motion } from 'framer-motion';
import BracketLink from './ui/BracketLink';

const Banner = () => {
  // Staggered reveal for the text content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0f172a] px-6 py-20 text-white sm:px-10 md:px-20 md:py-28">
      
      {/* Subtle ambient glow for a modern tech vibe */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Animated background watermark word */}
      <motion.span
        initial={{ opacity: 0, scale: 0.8, x: 100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none text-[12rem] font-black leading-none text-gray-800 sm:text-[16rem] md:text-[24rem]"
      >
        ZM
      </motion.span>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative z-10 mx-auto max-w-3xl lg:mx-0"
      >
        <motion.h2 
          variants={itemVariants}
          className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
        >
          BUILT FOR <span className="bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent">PRODUCTION.</span>
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="mb-10 text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl md:leading-relaxed"
        >
          I don't just build features that work in a demo — I build things meant to survive
          real traffic. During my time at Mercurial Minds, I engineered a JWT-secured user management module
          serving 1,000+ active users, and integrated a weather API handling 1,000+ requests a
          month with zero failed retrievals. I care about the boring, reliable stuff as much as
          the interesting parts.
        </motion.p>

        <motion.div variants={itemVariants}>
          {/* Updated href to match the ID we set in Portfolio.jsx */}
          <BracketLink href="#portfolio">READ MORE</BracketLink>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;