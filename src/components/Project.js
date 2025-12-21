import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const ProjectData = [
  {
    title: "Web3 Document Verification System",
    category: "webapp",
    Livelink: "https://doc-verify-alpha.vercel.app/",
    Githublink: "https://github.com/AKSHATH99/DocVerify",
    about:
      "Built a decentralized document verification system leveraging the Solana blockchain and IPFS for secure, tamper-proof document storage. Designed and deployed smart contracts using Solidity-compatible frameworks for Solana to manage document issuance and verification seamlessly. Integrated Phantom Wallet for user authentication and on-chain transaction signing, ensuring transparency and security throughout the verification process.",
    placeholderImage: "/images/doc-verify.png",
    stack: [
      "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
      "/logo192.png",
      "/images/tailwind.png",
      "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
    ],
  },
  {
    title: "Live Coding Platform",
    category: "webapp",
    Livelink: "https://live-coding-video-chat-platform.onrender.com/",
    Githublink: "https://github.com/AKSHATH99/live-coding-video-chat-platform",
    about:
      "Built a live coding environment with real-time collaboration and code running capabilities using monaco editor and live webrtc P2P connection. External code running service of Judge0 is integrated for code execution. Users can open local files and manage multiple files at same time and export them to local device",
    placeholderImage: "/images/live-coding.png",
    stack: [
      "https://cdn.worldvectorlogo.com/logos/socket-io.svg",
      "/logo192.png",
      "/images/tailwind.png",
    ],
  },
  {
    title: "Live MCQ Platform using Socket.io",
    category: "webapp",
    Livelink: "https://socketio-live-mcq.onrender.com/",
    Githublink: "https://github.com/AKSHATH99/socketio-live-mcq",
    about:
      "Built a Socket-io based applications that lets you create mcqs in mintutes and host them in live test environment and get instant result and leaderboard capabilities. Intergrated Redis for live leaderboard feed in test host interface for better UX",
    placeholderImage: "/images/mcq.png",
    stack: [
      "https://cdn.worldvectorlogo.com/logos/socket-io.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      "/logo192.png",
      "/images/tailwind.png",
    ],
  },
  {
    title: "GUIDO ",
    category: "webapp",
    Livelink: "https://guido-frontend.vercel.app/",
    Githublink: "https://github.com/AKSHATH99/GUIDO",
    about:
      "GUIDO is a full stack MERN app build to help students find their right mentor based on their career and prefered field. Made using of TailwindCSS and Framer Motion for designing and nodemailer for mailing system ",
    placeholderImage: "/images/myImage.png",
    stack: [
      "/logo192.png",
      "/images/database.png",
      "/images/expressjs.png",
      "/images/node.png",
      "/images/tailwind.png",
      "/images/motion.png",
    ],
  },
  {
    title: "Pharm-locator ",
    category: "webapp",
    Livelink: "https://pharm-locator.vercel.app/",
    Githublink: "https://github.com/AKSHATH99/locator",
    about:
      "Pharm-locator is build using OpenStreetMap API and allows user to find nearby medical services in their location in real time and find the easiest path to location . Leaflet and react-leaflet is used to mark medical store locations . Leaflet Routing machine is used to mark the easiest route to medical services",
    placeholderImage: "/images/pharm-locator.png",
    stack: [
      "/logo192.png",
      "/images/tailwind.png",
      "/images/Openstreetmap.svg.png",
      "/images/leaflet.png",
    ],
  },

  {
    title: "Price-wise AI ",
    category: "landing",
    Livelink: "https://price-wise-theta-ochre.vercel.app/",
    about:
      "Landing Page for Shopping Assistant AI that helps you find best deals from online shopping websites with best price and best price-value",
    placeholderImage: "/images/pricewise-hero.png",
    stack: [
      "/logo192.png",
      "/images/tailwind.png",
            "/images/motion.png",
    ],
  },
  {
    title: "Crypto Wallet   ",
    category: "landing",
    Livelink: "https://price-wise-theta-ochre.vercel.app/",
    about:
      "Landing page for a Crypto Wallet storage with  encrypted vault that stores seed phrases, NFT metadata, wills, and time-locked transfers.",
    placeholderImage: "/images/crypto-landing.png",
    stack: [
      "/logo192.png",
      "/images/tailwind.png",
            "/images/motion.png",
    ],
  }
];

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const headerRef = useRef(null);
  const projectsRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, threshold: 0.3 });
  const isProjectsInView = useInView(projectsRef, { once: true, threshold: 0.1 });

  const filteredProjects =
    activeCategory === "all"
      ? ProjectData
      : ProjectData.filter(p => p.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] // Custom easing for smoother animation
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      y: -20,
      transition: { duration: 0.3 } 
    }
  };

  return (
    <div id="project" className="lg:ml-[180px] text-gray-900 dark:text-white px-4 sm:px-6 lg:px-8 mt-10">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: -30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <h1 className="text-gray-900 dark:text-white text-xl sm:text-2xl lg:text-3xl font-bold mt-12 lg:mt-20 pt-4 lg:pt-7">
          Projects I've Built.
        </h1>
      </motion.div>

      <div className="relative flex gap-3 mt-6 mb-8 flex-wrap">
        {[
          { label: "All", value: "all" },
          { label: "Landing Pages", value: "landing" },
          { label: "Full-Stack Projects", value: "webapp" },
        ].map((f, idx) => (
          <motion.button
            key={f.value}
            onClick={() => setActiveCategory(f.value)}
            className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden
              ${
                activeCategory === f.value
                  ? "text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated background for active button */}
            {activeCategory === f.value && (
              <motion.div
                layoutId="activeFilter"
                className="absolute text-black inset-0 bg-gradient-to-r from-violet-500/30 to-purple-600/30 shadow-md border border-violet-400/30"
                initial={false}
                transition={{ 
                  type: "spring", 
                  stiffness: 380, 
                  damping: 30,
                  mass: 0.8
                }}
              />
            )}
            
            {/* Button text */}
            <span className="relative z-10">{f.label}</span>
            
            {/* Hover effect for non-active buttons */}
            {activeCategory !== f.value && (
              <motion.div
                className="absolute inset-0 bg-gray-300 dark:bg-gray-600"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      <motion.div
        ref={projectsRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-6 lg:mt-8 max-w-7xl lg:mr-36 items-start"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((data, index) => (
            <motion.div
              key={data.title}
              layout
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{
                scale: window.innerWidth >= 768 ? 1.05 : 1,
                y: window.innerWidth >= 768 ? -10 : 0,
                rotateY: window.innerWidth >= 768 ? 2 : 0,
                transition: { 
                  duration: 0.4, 
                  ease: [0.22, 1, 0.36, 1]
                }
              }}
              whileTap={{ scale: 0.98 }}
              className="relative cursor-pointer bg-white/80 border border-gray-200 dark:bg-gradient-to-br dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-lg rounded-lg dark:border-gray-700/50 overflow-hidden shadow-lg hover:shadow-xl dark:shadow-xl dark:hover:shadow-2xl md:hover:shadow-blue-500/20 dark:md:hover:shadow-blue-500/10 transition-all duration-300 w-full mx-auto group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={data.placeholderImage}
                  alt={data.title}
                  className="w-full h-48 sm:h-52 lg:h-56 object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ 
                    scale: window.innerWidth >= 768 ? 1.15 : 1,
                    transition: { duration: 0.6, ease: "easeOut" }
                  }}
                />

                {/* Gradient overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent dark:from-gray-900/80 dark:via-transparent dark:to-transparent hidden md:block"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating Action Buttons with stagger animation */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex space-x-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                  <motion.a
                    href={data.Livelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 p-1 sm:p-1.5 rounded-full text-white transition-colors duration-200"
                    initial={{ y: -10, opacity: 0 }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href={data.Githublink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 p-1 sm:p-1.5 rounded-full text-white transition-colors duration-200"
                    initial={{ y: -10, opacity: 0 }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: -5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                  >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </motion.a>
                </div>
              </div>

              {/* Project Content with Glassmorphism */}
              <div className="p-3 sm:p-4 lg:p-5 bg-gray-50/60 border-t border-gray-200/50 dark:bg-white/5 dark:backdrop-blur-md dark:border-t dark:border-white/10 rounded-b-lg">
                {/* Title with enhanced hover */}
                <motion.h3
                  className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300 line-clamp-1"
                  whileHover={{ 
                    x: window.innerWidth >= 768 ? 8 : 0,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  {data.title}
                </motion.h3>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-200 text-xs sm:text-sm lg:text-base leading-relaxed mb-3 
                   md:line-clamp-2 md:group-hover:line-clamp-none transition-all duration-300">
                  {data.about}
                </p>

                {/* Tech Stack with enhanced stagger */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3">
                  {data.stack.filter(Boolean).map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="relative group/tech bg-gray-100 border border-gray-300/50 hover:border-blue-400/50 dark:bg-gray-800/60 rounded-full p-1 sm:p-1.5 dark:border-gray-600/30 dark:hover:border-blue-400/50 transition-all duration-300"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        delay: techIndex * 0.05,
                        duration: 0.3,
                        ease: "backOut"
                      }}
                      whileHover={{
                        scale: window.innerWidth >= 768 ? 1.25 : 1.05,
                        y: window.innerWidth >= 768 ? -4 : 0,
                        rotate: window.innerWidth >= 768 ? [0, -10, 10, 0] : 0,
                        transition: { duration: 0.4 }
                      }}
                    >
                      <img
                        src={tech}
                        alt={`Tech ${techIndex + 1}`}
                        className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full"
                      />
                      {/* Hover effect */}
                      <motion.div 
                        className="absolute inset-0 bg-blue-400/20 rounded-full hidden md:block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover Overlay with shimmer effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none rounded-lg hidden md:block"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Subtle glow effect on hover */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 hidden md:block"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Project;