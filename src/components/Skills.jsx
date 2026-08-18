import SectionLabel from './ui/SectionLabel';
import { SKILLS_USING_NOW, SKILLS_LEARNING, SKILLS_OTHER } from '../data/skills';

const SkillGroup = ({ label, skills }) => (
  <div className="mb-14">
    <h3 className="mb-6 text-sm font-bold tracking-widest text-gray-400">
      {label}
    </h3>
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
      {skills.map(skill => (
        <div key={skill.id} className="flex flex-col items-center gap-3 text-center">
          {skill.icon ? (
            <img
              src={skill.icon}
              alt={skill.name}
              className="h-10 w-10 object-contain sm:h-12 sm:w-12"
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded bg-white/10 text-xs font-bold sm:h-12 sm:w-12">
              {skill.name.slice(0, 2).toUpperCase()}
            </div>
          )}
          <span className="text-xs font-medium tracking-wide text-gray-800 sm:text-sm">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full bg-[#e5e5e5] px-6 py-20 text-center text-black sm:px-10 md:px-20 md:py-28"
    >
      <SectionLabel>SKILLS</SectionLabel>

      <div className="mx-auto mt-12 max-w-4xl text-left">
        <SkillGroup label="USING NOW:" skills={SKILLS_USING_NOW} />
        <SkillGroup label="LEARNING:" skills={SKILLS_LEARNING} />
        <SkillGroup label="OTHER SKILLS:" skills={SKILLS_OTHER} />
      </div>
    </section>
  );
};

export default Skills;