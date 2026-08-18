import { useEffect, useState } from "react";

const HERO_TITLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "MERN Stack Specialist",
  "React & Node Developer"
];

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [fade, setFade] = useState(true); 

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTitleIndex(prevIndex => (prevIndex + 1) % HERO_TITLES.length);
        setFade(true);
      }, 500); 
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* 
        ✅ THE BACKGROUND CONTAINER
        Mobile: 160deg linear gradient (Bottom-Left to Mid-Right split).
        Desktop: 105deg linear gradient (70% top white, 60% bottom white).
      */}
      <main className="relative flex min-h-screen w-full flex-col items-center justify-end overflow-hidden px-5 pb-16 
        bg-[linear-gradient(160deg,white_60%,black_60%)] 
        md:flex-row md:justify-center md:pb-0 
        md:bg-[linear-gradient(105deg,white_50%,black_50%)]">
        
        {/* 
          ✅ MOBILE GLASS EFFECT (Between Image and Text)
          Fades from solid black at the bottom to transparent in the middle.
          Only visible on mobile (md:hidden).
        */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-[60%] bg-gradient-to-t from-black via-black/80 to-transparent backdrop-blur-[2px] md:hidden pointer-events-none"></div>

        {/* ✅ TEXT SECTION (z-20 ensures it stays above the glass and image) */}
        <section className="relative z-20 flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
          <h1 className="text-4xl font-bold text-white md:text-black md:text-5xl lg:text-7xl">
            Hello, I'm <br />Zohaib Munir
          </h1>    
          
          <h2 
            className={`mt-4 text-2xl font-semibold text-gray-300 transition-opacity duration-500 ease-in-out md:text-3xl md:text-gray-600 lg:text-4xl ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {HERO_TITLES[currentTitleIndex]}
          </h2>
        </section>

        {/* ✅ IMAGE SECTION (z-0 sits in the background on mobile) */}
        <section className="absolute inset-0 z-0 flex items-center justify-center md:relative md:w-1/2">
          {/* We limit the height on mobile so it doesn't get stretched strangely, and let the background show */}
          <div className="relative h-full w-full md:h-auto md:max-w-lg">
            {/* Added mix-blend on mobile if you want the background gradient to peek through, otherwise object-cover */}
            <img 
              src="src/assets/images/hero.png" 
              alt="Zohaib Munir - Hero" 
              className="h-[80vh] w-full object-cover object-top md:h-full md:object-contain" 
            />
            {/* CTA Status Badge */}
            <div className="absolute bottom-8 left-0 hidden w-full text-center md:block md:bottom-4">
              <p className="inline-block rounded-full bg-black/60 px-6 py-2 text-sm font-semibold tracking-wide text-white shadow-lg backdrop-blur-sm">
                Open to Full-Time Roles
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Hero;