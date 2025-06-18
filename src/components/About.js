import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  const marqueeRef = useRef(null);

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
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      alt: "Tailwind icon",
      name: "Tailwind"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      alt: "Python icon",
      name: "Python"
    },
    {
      src: "https://www.framer.com/images/favicons/favicon.ico",
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
  ];

  const toolsImages = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      alt: "VS Code icon",
      name: "VS Code"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", 
      alt: "NPM icon",
      name: "NPM"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      alt: "GitHub icon",
      name: "GitHub"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      alt: "Git icon",
      name: "Git"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      alt: "Figma icon",
      name: "Figma"
    },
  ];

  // Create duplicated arrays for seamless scrolling
  const duplicatedFrontend = [...frontendImages, ...frontendImages];
  const duplicatedBackend = [...backendImages, ...backendImages];
  const duplicatedTools = [...toolsImages, ...toolsImages];

  const TechIcon = ({ image, index }) => (
    <motion.div
      key={index}
      className="relative group mx-3 my-2"
      whileHover={{ scale: 1.1, y: -5 }}
      animate={{ 
        y: [0, -3, 0],
        rotateY: [0, 5, 0]
      }}
      transition={{ 
        duration: 2 + (index * 0.1), 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: index * 0.1
      }}
    >
      {/* Enhanced background with multiple layers for better visibility */}
      <div className="relative p-4 rounded-xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Inner glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Icon container with better contrast */}
        <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-white/90 rounded-lg shadow-inner">
          <img
            src={image.src}
            alt={image.alt}
            className="w-8 h-8 object-contain filter drop-shadow-sm"
          />
        </div>
        
        {/* Tooltip */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20">
          {image.name}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </motion.div>
  );

  const MarqueeSection = ({ title, images, duplicatedImages }) => (
    <motion.div 
      className="mb-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center mb-6 ml-5 md:ml-52">
        {/* <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></div> */}
        <h3 className="font-bold text-xl text-white font-mono tracking-wider">
          {title}
        </h3>
      </div>
      
      <div className="relative overflow-hidden ml-5 md:ml-56">
        {/* Gradient overlays for smooth edge fade - using transparent instead of gray-950 */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black/50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black/50 to-transparent z-10"></div>
        
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 20, 
            ease: "linear"
          }}
        >
          {duplicatedImages.map((image, index) => (
            <TechIcon key={index} image={image} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div
      id="about"
      className="min-h-screen -mt-10 pt-36 relative"
      style={{ scrollPadding: "200px" }}
    >
      <div className="relative z-10">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl md:text-4xl md:w-full w-3/4 text-wrap md:ml-52 ml-5 font-mono font-bold mt-10 text-white mb-4">
            Stack I've Worked On  
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full ml-5 md:ml-52 mb-2"></div>
          {/* <p className="text-gray-300 ml-5 md:ml-52 text-lg">I Have Worked On So Far</p> */}
        </motion.div>

        {/* Sections */}
        <div className="mt-16 space-y-8">
          <MarqueeSection 
            title="FRONTEND" 
            images={frontendImages} 
            duplicatedImages={duplicatedFrontend} 
          />
          <MarqueeSection 
            title="BACKEND" 
            images={backendImages} 
            duplicatedImages={duplicatedBackend} 
          />
          <MarqueeSection 
            title="TOOLS & PLATFORMS" 
            images={toolsImages} 
            duplicatedImages={duplicatedTools} 
          />
        </div>
      </div>
    </div>
  );
};

export default About;