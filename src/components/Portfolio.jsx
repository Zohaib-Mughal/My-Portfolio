import { motion } from 'framer-motion';
import SectionLabel from './ui/SectionLabel';
import { PROJECTS } from '../data/projects';

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="portfolio"
      className="w-full bg-white px-6 py-20 sm:px-10 md:px-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel>SELECTED WORK</SectionLabel>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group flex flex-col"
            >
              {/* Image Container with Hover Scale */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-shadow duration-300 group-hover:shadow-xl">
                
                {/* Category Badge */}
                <div className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold tracking-wider text-black backdrop-blur-md shadow-sm uppercase">
                  {project.category}
                </div>

                {/* Project Image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <span className="text-gray-400 text-sm font-medium">Image Preview</span>
                  )}
                </div>

                {/* Hover Overlay with Links (Only shows if URLs exist) */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="translate-y-4 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black opacity-0 transition-all duration-300 hover:scale-105 hover:bg-gray-100 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="translate-y-4 rounded-full bg-black border border-white/20 px-6 py-2.5 text-sm font-semibold text-white opacity-0 transition-all duration-300 delay-75 hover:scale-105 hover:bg-gray-900 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      Live Demo
                    </a>
                  )}
                  {/* Fallback if no links exist, show a coming soon or keep it clean */}
                  {!project.repoUrl && !project.demoUrl && (
                    <span className="translate-y-4 rounded-full bg-white/10 px-6 py-2.5 text-sm font-semibold text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      Private Repository
                    </span>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="mt-6 flex flex-col">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-black">
                  {project.title}
                </h3>
                
                {/* Subtitle Added Here */}
                {project.subtitle && (
                  <p className="mt-1 text-sm font-semibold text-gray-500">
                    {project.subtitle}
                  </p>
                )}

                <p className="mt-3 line-clamp-3 leading-relaxed text-gray-600">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold tracking-wide text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;