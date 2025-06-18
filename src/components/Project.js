import React, { useRef } from "react";
import ProjectBox from "./ProjectBox";
import GithubCalendar from "./ui/GithubCalendar";
import { motion, useInView } from "framer-motion";

const ProjectData = [
  {
    title: "GUIDO ",
    Livelink: "https://guido-frontend.vercel.app/",
    Githublink: "https://github.com/AKSHATH99/GUIDO",
    about:
      "GUIDO is a full stack MERN app build to help students find their right mentor based on their career and prefered field. Made using of TailwindCSS and Framer Motion for designing and nodemailer for mailing system ",
    placeholderImage: "/images/myImage.png",
    stack: [
      "/logo192.png",
      ,
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
    stack: [
      "/logo192.png",
      "/images/tailwind.png",
      "/images/motion.png",
    ],
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
  ,

  // {
  //   title: "WEATHER APP",
  //   Livelink: "https://food-zone-o762.vercel.app/",
  //   Githublink: "https://github.com/AKSHATH99/FOOD-ZONE",
  //   about:
  //     "The project is aimed at creating frontend of a restaurent website.It includes features of online delivery system i.e. a foomenu and cart sections using React.js for a dynamic user interface and Tailwind CSS for a clean and visually appealing design",
  //   placeholderImage: "/images/Weather.png",
  //   stack: ["/logo192.png", "/images/tailwind.png",],
  // },
];

const Project = () => {
  // const navigate= useNavigate();
  // const navigateToProject=(url)=>{
  //   navigate(url)
  // }

  // Refs for scroll-triggered animations
  const headerRef = useRef(null);
  const projectsRef = useRef(null);

  // useInView hooks to detect when sections come into viewport
  const isHeaderInView = useInView(headerRef, { once: true, threshold: 0.3 });
  const isProjectsInView = useInView(projectsRef, { once: true, threshold: 0.1 });

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="project" className="md:ml-[190px] text-white">
      {/* Header Section */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: -30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-white font md:text-2xl text-3xl font-bold mt-20 pt-7 md:ml-0 ml-5">
          Things I've Built.{" "}
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full md:ml-0 ml-5 mt-2 mb-4"></div>
        <p className="mt-5 text-wrap md:ml-0 ml-5 md:w-max w-3/4 text-sm text-gray-300">
          Here is a list of selected projects i have worked on so far. Hover / click
          over them for details, or check out my{" "}
          <motion.a 
            href="https://github.com/AKSHATH99" 
            target="_blank"
            className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
          >
            GitHub
          </motion.a>
          {" "}for more projects and{" "}
          <motion.a 
            href="https://peerlist.io/akshath00" 
            target="_blank"
            className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
          >
            Peerlist
          </motion.a>
          {" "}for my latest updates.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        ref={projectsRef}
        className="flex flex-wrap mt-5"
        variants={containerVariants}
        initial="hidden"
        animate={isProjectsInView ? "visible" : "hidden"}
      >
        {ProjectData.map((data, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectBox data={data} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;