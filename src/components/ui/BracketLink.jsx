import { motion } from 'framer-motion';

const BracketLink = ({ href, children, className = "" }) => {
return (
<motion.a
href={href}
// Scroll reveal animation
initial={{ opacity: 0, y: 15 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-20px" }}
transition={{ duration: 0.5, ease: "easeOut" }}
// Group class is crucial here to trigger child hover effects
className={"group relative inline-flex cursor-pointer items-center justify-center font-medium text-gray-600 transition-colors hover:text-black ${className}"}
>

[


  <span className="relative">
    {children}
    {/* Animated Underline: Expands from 0 to full width on hover */}
    <span className="absolute -bottom-1 left-0 h-px w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
  </span>

  {/* Right Bracket: slides right and darkens on hover */}
  <span className="ml-2 text-gray-400 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-black">
    ]
  </span>
</motion.a>


);
};

export default BracketLink;