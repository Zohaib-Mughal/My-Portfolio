  import { motion } from 'framer-motion';
  // import BracketLink from './ui/BracketLink'; // Assuming you use this for your CTA
  import heroImage from '../assets/images/hero.png';
  import { FaWhatsapp, FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
  import { SOCIAL_LINKS } from '../data/social';
  
  
  // Mapping your exported object into an array for easy rendering
  const SOCIALS = [
    { name: 'GitHub', url: SOCIAL_LINKS.github, icon: <FaGithub size={22} />, glowClass: 'bg-black' },
    { name: 'LinkedIn', url: SOCIAL_LINKS.linkedin, icon: <FaLinkedinIn size={22}/>, glowClass: 'bg-[#0A66C2]'  },
    { name: 'WhatsApp', url: SOCIAL_LINKS.whatsapp, icon: <FaWhatsapp size={22}/>, glowClass: 'bg-[#25D366]'},
    { name: 'Email', url: SOCIAL_LINKS.email, icon: <FaEnvelope size={22}/>, glowClass: 'bg-[#EA4335]' },
  ];

  const Hero = () => {
    // Animation variants for staggered children
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2, // Delay between each element appearing
          delayChildren: 0.1,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }, // Smooth easing
      },
    };

    return (
      <section 
        id="home" 
        className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 pt-20 sm:px-10 md:px-20"
      >
        <div className="mx-auto flex max-w-8xl flex-col-reverse items-center justify-between gap-12 lg:flex-row">
          
          {/* Left Column: Text Content */}
          <motion.div 
            className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p 
              variants={itemVariants}
              className="mb-3 text-sm font-semibold tracking-widest text-gray-500 uppercase"
            >
              Full-Stack Developer
            </motion.p>
            
            <motion.h1 
              variants={itemVariants}
              className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
            >
              Hi, I'm <br className="hidden lg:block" />
              <span className="text-black">Zohaib Munir.</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mb-10 max-w-lg text-lg leading-relaxed text-gray-600"
            >
              I build exceptional and accessible digital experiences for the web and mobile using modern technologies.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              {/* Replace these with your actual links or BracketLink component */}
              <a 
                href="#portfolio"
                className="rounded-xl bg-black px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg"
              >
                View Work
              </a>
              <a 
                href="#contact"
                className="rounded-xl border border-gray-300 bg-transparent px-8 py-3.5 text-sm font-semibold text-gray-900 transition-all hover:border-black hover:bg-gray-50"
              >
                Contact Me
              </a>
            </motion.div>
             <motion.div className="flex justify-center mt-10">
           {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              // We add 'relative' and 'p-2' to give the glow room to spread
              className="group relative flex items-center justify-center p-8 text-gray-400 hover:text-gray-100 transition-colors" 
            >
              {/* 1. The Glow Background (Hidden by default, fades in on hover) */}
              <div 
                className={`absolute inset-0 -z-10 rounded-full opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100 ${social.glowClass}`} 
              />
              
              {/* 2. The Icon (Changes color to match the brand on hover) */}
              <span className={`relative z-10 transition-colors duration-300 ${social.textClass}`}>
                {social.icon}
              </span>
            </a>
          ))}
          </motion.div>
          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div 
            className="relative flex w-full max-w-sm flex-1 items-center justify-center lg:max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            {/* Subtle floating animation on the image container */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative z-10 aspect-square w-64 overflow-hidden rounded-full border-4 border-white bg-gray-200 shadow-2xl sm:w-80 lg:w-full lg:max-w-[400px]"
            >
              <img 
                src={heroImage} 
                alt="Zohaib Munir" 
                className="h-full w-full object-cover"
              />
            </motion.div>
           

            {/* Decorative background blur */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-300/50 blur-3xl sm:h-96 sm:w-96" />
          </motion.div>

        </div>
      </section>
    );
  };

  export default Hero;