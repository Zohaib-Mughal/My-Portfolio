import { motion } from 'framer-motion';



const SectionLabel = ({ children }) => {

return (

<motion.div

// Starts slightly lower and invisible

initial={{ opacity: 0, y: 20 }}

// Animates to its final position when it enters the viewport

whileInView={{ opacity: 1, y: 0 }}

// Triggers slightly before it fully enters the screen, and only plays once

viewport={{ once: true, margin: "-50px" }}

transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}

className="mb-12 flex justify-center md:justify-start"

>



{/* Decorative horizontal line for a modern, editorial touch */}



{children}



</motion.div>

);

};



export default SectionLabel;