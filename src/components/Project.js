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
    Livelink: "https://estate-vault-secure.vercel.app/",
    about:
      "Landing page for a Crypto Wallet storage with  encrypted vault that stores seed phrases, NFT metadata, wills, and time-locked transfers.",
    placeholderImage: "/images/crypto-landing.png",
    stack: [
      "/logo192.png",
      "/images/tailwind.png",
            "/images/motion.png",
    ],
  },
  {
    title : "Indian-Italian Restaurant Page",
    category: "landing",
    Livelink: "https://spice-sage-showcase.vercel.app/",
    about:
      "Landing page for a Indian-Italian Cusine restaurant that showcases their dishes and special items and their galleries and booking table features",
    placeholderImage: "/images/restaurant-hero.png",
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
        ease: [0.22, 1, 0.36, 1]
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
            className={`relative px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden backdrop-blur-md
              ${
                activeCategory === f.value
                  ? "text-gray-900 dark:text-white shadow-lg"
                  : "bg-white/40 dark:bg-gray-800/40 text-gray-800 dark:text-gray-200 border border-gray-200/50 dark:border-gray-700/50"
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeCategory === f.value && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-purple-600/30 shadow-md border border-violet-400/30"
                initial={false}
                transition={{ 
                  type: "spring", 
                  stiffness: 380, 
                  damping: 30,
                  mass: 0.8
                }}
              />
            )}
            
            <span className="relative z-10">{f.label}</span>
            
            {activeCategory !== f.value && (
              <motion.div
                className="absolute inset-0 bg-white/20 dark:bg-gray-700/60"
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
                scale: window.innerWidth >= 768 ? 1.02 : 1,
                y: window.innerWidth >= 768 ? -8 : 0,
                transition: { 
                  duration: 0.4, 
                  ease: [0.22, 1, 0.36, 1]
                }
              }}
              whileTap={{ scale: 0.98 }}
              className="relative cursor-pointer group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glassmorphism Card Container */}
              <div className="relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-2xl hover:shadow-2xl dark:hover:shadow-violet-500/20 transition-all duration-500">
                
                {/* Gradient overlay on card */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Animated border glow */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500 -z-10" />

                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <motion.img
                    src={data.placeholderImage}
                    alt={data.title}
                    className="w-full h-48 sm:h-52 lg:h-56 object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ 
                      scale: window.innerWidth >= 768 ? 1.1 : 1,
                      transition: { duration: 0.6, ease: "easeOut" }
                    }}
                  />

                  {/* Glass gradient overlay on image */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent dark:from-gray-900/90 dark:via-gray-900/20 dark:to-transparent hidden md:block"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Floating Action Buttons */}
                  <div className="absolute top-3 right-3 flex space-x-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                    <motion.a
                      href={data.Livelink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md hover:bg-violet-500 dark:hover:bg-violet-600 p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:text-white transition-all duration-300 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
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
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href={data.Githublink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md hover:bg-gray-700 dark:hover:bg-gray-600 p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:text-white transition-all duration-300 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
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
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </motion.a>
                  </div>
                </div>

                {/* Glassmorphism Content Section */}
                <div className="p-5 bg-white/50 dark:bg-gray-800/30 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 rounded-b-2xl">
                  
                  {/* Title */}
                  <motion.h3
                    className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300 line-clamp-1"
                    whileHover={{ 
                      x: window.innerWidth >= 768 ? 8 : 0,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    {data.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 
                     md:line-clamp-2 md:group-hover:line-clamp-none transition-all duration-300">
                    {data.about}
                  </p>

                  {/* Tech Stack with Glassmorphism */}
                  <div className="flex flex-wrap gap-2">
                    {data.stack.filter(Boolean).map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        className="relative group/tech bg-white/60 dark:bg-gray-700/40 backdrop-blur-md rounded-full p-2 border border-gray-200/50 dark:border-gray-600/50 hover:border-violet-400/50 dark:hover:border-violet-400/50 hover:shadow-lg transition-all duration-300"
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
                          className="w-5 h-5 rounded-full"
                        />
                        
                        {/* Hover glow effect */}
                        <motion.div 
                          className="absolute inset-0 bg-violet-400/20 rounded-full hidden md:block blur-sm"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Shimmer effect on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none hidden md:block"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Project;