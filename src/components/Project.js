import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ProjectData = [
  {
    title: "Live Coding Platform",
    Livelink: "https://live-coding-video-chat-platform.onrender.com/",
    Githublink: "https://github.com/AKSHATH99/live-coding-video-chat-platform",
    about:
      "Built a live coding environment with real-time collaboration and code running capabilities using monaco editor and live webrtc P2P connection. External code  running service of Judge0 is integrated for code execution. Users can open local files and manage multiple files at same time and export them to local device",
    placeholderImage: "/images/live-coding.png",
    stack: [
      "https://cdn.worldvectorlogo.com/logos/socket-io.svg",
      "/logo192.png",
      "/images/tailwind.png",
    ],
  },
  {
    title: "Live MCQ Platform using Socket.io",
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
    title: "Landing Page ",
    Livelink: "https://landing-page-one-gold-46.vercel.app/",
    Githublink: "https://github.com/AKSHATH99/formatify",
    about:
      "landing Page built using Tailwind CSS and Framer Motion for animations . It is a responsive landing page with smooth animations and transitions . It is a simple yet elegant design for event management platform ",
    placeholderImage: "/images/landing-page.png",
    stack: ["/logo192.png", "/images/tailwind.png", "/images/motion.png"],
  },
  {
    title: "Formatify ",
    Livelink: "https://formatify-silk.vercel.app/",
    Githublink: "https://github.com/AKSHATH99/formatify",
    about:
      "Application allows user to format their code in their favourite code editor theme and download / Copy png file of the formatted code . Also intergrated Gemini API to explain the code they formatted ",
    placeholderImage: "/images/formatify.png",
    stack: [
      "/logo192.png",
      "/images/tailwind.png",
      "/images/ts.svg",
      "/images/gemini.svg",
    ],
  },
];

const Project = () => {
  const headerRef = useRef(null);
  const projectsRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, threshold: 0.3 });
  const isProjectsInView = useInView(projectsRef, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div id="project" className="lg:ml-[180px] text-white px-4 sm:px-6 lg:px-8 mt-10">
      {/* Header Section */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: -30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mt-12 lg:mt-20 pt-4 lg:pt-7">
          Projects I've Built.
        </h1>
        <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mb-4"></div>
        <p className="mt-4 lg:mt-5 text-sm lg:text-base text-gray-300 max-w-2xl">
          Here is a list of selected projects I have worked on so far. Check out my{" "}
          <motion.a
            href="https://github.com/AKSHATH99"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors duration-200"
            whileHover={{ scale: window.innerWidth >= 768 ? 1.05 : 1 }}
          >
            GitHub
          </motion.a>{" "}
          for more projects and{" "}
          <motion.a
            href="https://peerlist.io/akshath00"
            target="_blank"
            className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors duration-200"
            whileHover={{ scale: window.innerWidth >= 768 ? 1.05 : 1 }}
          >
            Peerlist
          </motion.a>{" "}
          for my latest updates.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        ref={projectsRef}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-6 lg:mt-8 max-w-7xl lg:mr-36 items-start"
        variants={containerVariants}
        initial="hidden"
        animate={isProjectsInView ? "visible" : "hidden"}
      >
        {ProjectData.map((data, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: window.innerWidth >= 768 ? 1.03 : 1,
              y: window.innerWidth >= 768 ? -8 : 0
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative cursor-pointer bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-lg border border-gray-700/50 overflow-hidden shadow-xl hover:shadow-2xl md:hover:shadow-blue-500/10 transition-all duration-300 w-full max-w-[340px] mx-auto group"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <motion.img
                src={data.placeholderImage}
                alt={data.title}
                className="w-full h-32 sm:h-36 lg:h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                whileHover={{ scale: window.innerWidth >= 768 ? 1.1 : 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Gradient overlay - hidden on mobile for performance */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block" />

              {/* Floating Action Buttons */}
              <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex space-x-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform md:translate-y-2 md:group-hover:translate-y-0">
                <motion.a
                  href={data.Livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 p-1 sm:p-1.5 rounded-full text-white transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
                <motion.a
                  href={data.Githublink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 p-1 sm:p-1.5 rounded-full text-white transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </motion.a>
              </div>
            </div>

            {/* Project Content with Glassmorphism */}
            <div className="p-3 sm:p-4 lg:p-5 bg-white/5 backdrop-blur-md border-t border-white/10 rounded-b-lg">
              {/* Title */}
              <motion.h3
                className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300 line-clamp-1"
                whileHover={{ x: window.innerWidth >= 768 ? 5 : 0 }}
                transition={{ duration: 1.2 }}
              >
                {data.title}
              </motion.h3>

              {/* Description - Always show full text on mobile, truncate on larger screens */}
              <p className="text-gray-200 text-xs sm:text-sm lg:text-base leading-relaxed mb-3 
                 md:line-clamp-2 md:group-hover:line-clamp-none">
                {data.about}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3">
                {data.stack.filter(Boolean).map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    className="relative group/tech bg-gray-800/60 rounded-full p-1 sm:p-1.5 border border-gray-600/30 hover:border-blue-400/50 transition-all duration-300"
                    whileHover={{
                      scale: window.innerWidth >= 768 ? 1.15 : 1.05,
                      y: window.innerWidth >= 768 ? -2 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={tech}
                      alt={`Tech ${techIndex + 1}`}
                      className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full"
                    />
                    {/* Hover effect hidden on mobile */}
                    <div className="absolute inset-0 bg-blue-400/20 rounded-full opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hover Overlay - Hidden on mobile */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg hidden md:block" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;