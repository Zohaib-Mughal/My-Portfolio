import { useState } from 'react';
import SectionLabel from './ui/SectionLabel';
import { PROJECTS } from '../data/projects';

const FILTERS = ['All', 'Coded'];

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative aspect-[4/3] w-full cursor-pointer overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Placeholder visual until real screenshots are added */}
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-6xl font-black text-white/10 sm:text-7xl">
            {project.title.charAt(0)}
          </span>
        </div>
      )}

      {/* Overlay — shown on hover (desktop) or always partially visible on mobile via tap */}
      <div
        className={`absolute inset-0 flex flex-col justify-end bg-black/80 p-5 text-white
          transition-opacity duration-300
          ${hovered ? 'opacity-100' : 'opacity-0'} md:opacity-0 md:group-hover:opacity-100`}
      >
        <p className="mb-1 text-xs italic text-gray-400">{project.subtitle}</p>
        <h3 className="mb-2 text-lg font-bold sm:text-xl">{project.title}</h3>
        <p className="mb-4 line-clamp-3 text-xs text-gray-300 sm:text-sm">
          {project.description}
        </p>

        <div className="mb-3 flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span
              key={t}
              className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium tracking-wide"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 text-xs font-bold tracking-widest">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-70"
            >
              <span className="h-3 w-px bg-white" />
              DEMO
            </a>
          )}
          {project.repoUrl && (
            <>
              <span className="h-3 w-px bg-white/40" />
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-70"
              >
                CODE
                <span className="h-3 w-px bg-white" />
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter(p => p.category === activeFilter.toLowerCase());

  return (
    <section id="projects" className="scroll-mt-20 w-full bg-black text-white">
      <div className="px-6 py-16 text-center sm:px-10 md:px-20">
        <SectionLabel>PORTFOLIO</SectionLabel>
      </div>

      {/* Filter tabs */}
      <div className="flex justify-center gap-8 border-b border-white/10 px-6 pb-4 sm:gap-12">
        {FILTERS.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`pb-2 text-xs font-bold tracking-widest transition-colors sm:text-sm
              ${
                activeFilter === filter
                  ? 'border-b-2 border-white text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
          >
            {filter.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-0.5 bg-white/10 sm:grid-cols-2 md:grid-cols-3">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <p className="bg-[#1a1a1a] py-6 text-center text-sm font-medium tracking-wide text-gray-400">
        And many more to come!
      </p>
    </section>
  );
};

export default Portfolio;