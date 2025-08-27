import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // IMG URL FOR STACK INFORMATION
  const frontendImages = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      alt: "HTML5 icon",
      name: "HTML5"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      alt: "CSS icon",
      name: "CSS3"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript icon",
      name: "JavaScript"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React icon",
      name: "React"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      alt: "TypeScript icon",
      name: "TypeScript"
    },
    {
      src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      alt: "Tailwind icon",
      name: "Tailwind"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      alt: "Python icon",
      name: "Python"
    },
    {
      src: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
      alt: "Framer icon",
      name: "Framer Motion"
    },
  ];

  const backendImages = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      alt: "Next.js icon",
      name: "Next.js"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      alt: "MongoDB icon",
      name: "MongoDB"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      alt: "Express.js icon",
      name: "Express.js"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "Node.js icon",
      name: "Node.js"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      alt: "MySQL icon",
      name: "MySQL"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      alt: "PostgreSQL icon",
      name: "PostgreSQL"
    },
  ];
  const devopsImages = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      alt: "Redis icon",
      name: "Redis"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      alt: "Docker icon",
      name: "Docker"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      alt: "Kubernetes icon",
      name: "Kubernetes"
    },
    {
      src: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg",
      alt: "AWS icon",
      name: "AWS"
    },

    {
      src: "https://cdn.worldvectorlogo.com/logos/socket-io.svg",
      alt: "Socket.IO icon",
      name: "Socket.IO"
    },

  ];



  const TechIcon = ({ image, index, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: delay + (index * 0.1),
        ease: "easeOut"
      }}
      whileHover={{
        scale: 1.05,
        y: -8,
        transition: { duration: 0.2 }
      }}
      className="relative group"
    >
      {/* Main card with glassmorphic design */}
      <div className="relative p-3 rounded-xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-white/30">
        {/* Animated background glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Floating orb effect */}
        <motion.div
          className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Icon container */}
        <div className="relative z-10 flex flex-col items-center space-y-2">
          <div className="w-10 h-10 flex items-center justify-center bg-white/95 rounded-lg shadow-inner group-hover:bg-white transition-colors duration-300">
            <img
              src={image.src}
              alt={image.alt}
              className="w-6 h-6 object-contain filter drop-shadow-sm"
            />
          </div>

          {/* Tech name */}
          <h4 className="text-white font-mono font-medium text-xs text-center group-hover:text-blue-200 transition-colors duration-300">
            {image.name}
          </h4>
        </div>

        {/* Subtle border animation */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          style={{
            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.5))',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'exclude'
          }}
        />
      </div>
    </motion.div>
  );

  const TechSection = ({ title, images, delay = 0 }) => (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Section header */}
      <div className="flex items-center mb-4 ml-5 md:ml-52">
        <motion.div
          className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"
          initial={{ height: 0 }}
          animate={{ height: 32 }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
        />
        <h3 className="font-bold text-2xl text-white font-mono tracking-wider">
          {title}
        </h3>
        <motion.div
          className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent ml-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: delay + 0.4 }}
          style={{ transformOrigin: 'left' }}
        />
      </div>

      {/* Grid layout */}
      <div className="ml-5 md:ml-52 mr-5 md:mr-52">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
          {images.map((image, index) => (
            <TechIcon key={index} image={image} index={index} delay={delay} />
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div
      id="about"
      className="min-h-screen -mt-20 pt-36 relative"
      style={{ scrollPadding: "200px" }}
    >

      <div className="relative z-10">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl md:w-full w-3/4 text-wrap md:ml-52 ml-5 font-mono font-bold mt-10 text-white mb-6">
            Tech I Use...
          </h1>
          <motion.div
            className="w-40 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full ml-5 md:ml-52 mb-4"
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-gray-300 ml-5 md:ml-52 text-lg font-light">
            Technologies and tools i have used so far in my projects.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="mt-14 space-y-">
          <TechSection
            title="FRONTEND"
            images={frontendImages}
            delay={0.2}
          />
          <TechSection
            title="BACKEND"
            images={backendImages}
            delay={0.4}
          />
          <TechSection
            title="Cloud and Infra"
            images={devopsImages}
            delay={0.6}
          />
        </div>
      </div>
    </div>
  );
};

export default About;