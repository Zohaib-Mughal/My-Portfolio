import { motion } from 'framer-motion';
import SectionLabel from './ui/SectionLabel';

const About = () => {
  // Animation variants for smooth staggered reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.1 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section
      id="about"
      className="w-full bg-white px-6 py-20 sm:px-10 md:px-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel>ABOUT ME</SectionLabel>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Column: Bio Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 text-lg leading-relaxed text-gray-600"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
            >
              Engineering seamless digital experiences from Rawalpindi to the world.
            </motion.h3>
            
            <motion.p variants={itemVariants}>
              Hello! I'm Zohaib, a Full-Stack Developer who thrives on building efficient, scalable, and visually engaging applications. My journey in tech recently culminated in a B.S. in Computer Science from the Barani Institute of Information Technology, where I honed my ability to solve complex problems through code.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              Whether I'm designing responsive web interfaces with React and Tailwind CSS, architecting robust backend APIs with Node.js and SQL Server, or crafting native mobile experiences using React Native CLI, I focus on writing clean, maintainable code that delivers real value.
            </motion.p>

            <motion.p variants={itemVariants}>
              Beyond just writing logic, I have a keen eye for UI/UX, utilizing tools like Adobe Photoshop to ensure that everything I build doesn't just work flawlessly under the hood, but looks exceptional on the surface.
            </motion.p>
          </motion.div>

          {/* Right Column: Modern Highlights Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {/* Highlight Card 1 */}
            <motion.div 
              variants={itemVariants} 
              className="group flex flex-col justify-center rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition-all hover:border-black hover:bg-white hover:shadow-md"
            >
              <h4 className="text-4xl font-extrabold text-black">2026</h4>
              <p className="mt-2 text-xs font-bold tracking-wider text-gray-500 uppercase">
                CS Degree Completed
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Barani Institute of Information Technology, Rawalpindi
              </p>
            </motion.div>

            {/* Highlight Card 2 */}
            <motion.div 
              variants={itemVariants} 
              className="group flex flex-col justify-center rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition-all hover:border-black hover:bg-white hover:shadow-md"
            >
              <h4 className="text-2xl font-extrabold text-black">Mobile Native</h4>
              <p className="mt-2 text-xs font-bold tracking-wider text-gray-500 uppercase">
                React Native
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Building robust cross-platform applications bypassing Expo for standard native libraries.
              </p>
            </motion.div>

            {/* Highlight Card 3 (Spans full width) */}
            <motion.div 
              variants={itemVariants} 
              className="group flex flex-col justify-center rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition-all hover:border-black hover:bg-white hover:shadow-md sm:col-span-2"
            >
             <h4 className="text-xl font-bold text-black">The Core Stack</h4>

<p className="mt-3 leading-relaxed text-gray-600">
  <span className="font-semibold text-gray-900">Frontend:</span>{" "}
  React.js, React Native, HTML5, CSS3, Tailwind CSS, React Router
  <br />

  <span className="font-semibold text-gray-900">Backend:</span>{" "}
  Node.js, Express.js, REST APIs, JWT Authentication, Socket.io
  <br />

  <span className="font-semibold text-gray-900">Database:</span>{" "}
  MongoDB, SQL Server
  <br />

  <span className="font-semibold text-gray-900">Tools:</span>{" "}
  Git, GitHub, Postman, VS Code
</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;