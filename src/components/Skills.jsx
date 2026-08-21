import { motion } from 'framer-motion';
import SectionLabel from './ui/SectionLabel';
import { SKILLS_USING_NOW, SKILLS_LEARNING, SKILLS_OTHER } from '../data/skills';

// Grouping the imported data for easier rendering
const skillCategories = [
  { title: 'CURRENTLY USING', data: SKILLS_USING_NOW },
  { title: 'LEARNING', data: SKILLS_LEARNING },
  { title: 'OTHER SKILLS & TOOLS', data: SKILLS_OTHER },
];

const Skills = () => {
  // Animation for the section container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Animation for the category blocks
  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Animation for individual skill badges
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="skills"
      className="w-full bg-[#f8fafc] px-6 py-20 sm:px-10 md:px-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel>TECHNICAL SKILLS</SectionLabel>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 flex flex-col gap-12"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={categoryVariants} className="w-full">
              <h3 className="mb-6 text-sm font-bold tracking-widest text-gray-400 uppercase">
                {category.title}
              </h3>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={containerVariants} // Re-using stagger for the badges
              >
                {category.data.map((skill) => (
                  <motion.div
                    key={skill.id}
                    variants={badgeVariants}
                    whileHover={{ 
                      y: -4,
                      transition: { duration: 0.2 }
                    }}
                    className="group flex cursor-default items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition-all hover:border-black hover:shadow-md"
                  >
                    {/* Icon Container */}
                    <div className="flex h-6 w-6 items-center justify-center  transition-all duration-300">
                      <img 
                        src={skill.icon} 
                        alt={`${skill.name} icon`} 
                        className="h-full w-full object-contain"
                      />
                    </div>
                    
                    {/* Skill Name */}
                    <span className="text-sm font-semibold text-gray-700 transition-colors group-hover:text-black">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;