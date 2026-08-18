import BracketLink from './ui/BracketLink';

const Banner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black px-6 py-16 text-white sm:px-10 md:px-20 md:py-24">
      {/* Giant background watermark word — decorative, hidden from screen readers */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none
          text-[10rem] font-black leading-none text-white/5 sm:text-[14rem] md:text-[20rem]"
      >
        ZM
      </span>

      <div className="relative z-10 max-w-2xl">
        <h2 className="mb-6 text-2xl font-bold tracking-wide sm:text-3xl md:text-4xl">
          BUILT FOR PRODUCTION
        </h2>

        <p className="mb-8 text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
          I don't just build features that work in a demo — I build things meant to survive
          real traffic. At Mercurial Minds, I engineered a JWT-secured user management module
          serving 1,000+ active users, and integrated a weather API handling 1,000+ requests a
          month with zero failed retrievals. I care about the boring, reliable stuff as much as
          the interesting parts.
        </p>

        <BracketLink href="#projects">READ MORE</BracketLink>
      </div>
    </section>
  );
};

export default Banner;