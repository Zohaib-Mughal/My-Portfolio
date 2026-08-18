import SectionLabel from './ui/SectionLabel';
// import Divider from './ui/Divider';
import BracketLink from './ui/BracketLink';
import { ABOUT_BIO, ABOUT_FEATURES } from '../data/about';

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-20 mt-20 w-full bg-[#e5e5e5] text-center text-black sm:px-10 md:px-20 md:py-28"
    >
      <div className="mx-auto max-w-2xl">
        <SectionLabel>ABOUT ME</SectionLabel>

        <div className="space-y-4 px-6">
          {ABOUT_BIO.map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed text-gray-700 sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <BracketLink href="#projects" >EXPLORE</BracketLink>
        </div>

        {/* <Divider /> */}
      </div>

      {/* Feature row */}
      <div className="bg-black p-6 text-amber-50 mt-20 grid w-full grid-cols-1 gap-10 text-left sm:grid-cols-3 sm:gap-6">
        {ABOUT_FEATURES.map(feature => (
          <div key={feature.id}>
            <h3 className="mb-2 text-sm font-bold tracking-widest">
              {feature.title.toUpperCase()}
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;