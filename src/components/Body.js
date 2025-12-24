import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import HeaderResponsive from "./HeaderResponsive";
import { useSelector } from "react-redux";
import Header from "./Header";

const Body = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const sidebar = useSelector((state) => state.sidebar.sidebar);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const socialIconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      id="body"
      className=""
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="md:mb-0 dark:text-white  flex flex-col justify-center items-center">
        <div className="md:flex md:justify-center md:items-center xl:mt-44 320:mt-10">
          {/* Image Section with Enhanced Animation */}

          <motion.div
            className="md:mr-10"
            variants={imageVariants}
          >
            {/* Dark mode image */}
            <motion.img
              alt="gif"
              className="hidden dark:block w-72 h-44 md:w-96 md:h-72 m-5 320:h-44 320:w-44 md:m-0 mx-auto"
              src="/images/heroimg.svg"
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 }
              }}
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />

            {/* Light mode image */}
            <motion.img
              alt="gif"
              className="block dark:hidden w-72 h-44 md:w-96 md:h-72 m-5 320:h-44 320:w-44 md:m-0 mx-auto"
              src="/images/hero-lightmode.svg"
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 }
              }}
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            className="m-2 md:w-2/3 text-center md:text-left"
            variants={itemVariants}
          >
            {/* Main Heading */}
            <motion.p
              className="text-3xl md:text-4xl font-bold font-mono 320:text-2xl"
              variants={itemVariants}
            >
              Hi, I am{" "}
              <motion.span
                whileHover={{
                  scale: 1.1,
                  color: "#8B5CF6",
                  textShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="text-themeViolet inline-block hover:cursor-pointer"
              >
                Akshath P
              </motion.span>
            </motion.p>

            {/* Description Paragraphs */}
            <motion.p
              className="w-full md:w-[500px] mt-3 md:text-sm md:-ml-0 -ml-6 font-ubuntu"
              variants={itemVariants}
            >
              I built full-stack websites.
            </motion.p>

            <motion.p
              className="w-full md:w-[500px] mt-3 md:text-sm md:-ml-0 font-ubuntu"
              variants={itemVariants}
            >
              I'm a full stack developer and I love building websites.
              I am working as{" "}
              <motion.span
                className="text-themeViolet"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 10px rgba(139, 92, 246, 0.5)"
                }}
              >
                a SDE-1. 
              </motion.span>
              {" "}
                
            </motion.p>

            <br />

            {/* Call to Action */}
            <motion.p
              className="italic md:w-96 w-3/4 md:ml-0 ml-9 -mt-3 md:font-xl"
              variants={itemVariants}
            >
              I am actively looking for freelance gigs, internships and full time roles. Feel free to{" "}
              <motion.span
                className="text-themeViolet"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 10px rgba(139, 92, 246, 0.5)"
                }}
              >
                <a href="mailto:akshathpkk@gmail.com" className="">
                  mail
                </a>
              </motion.span>{" "}
              me or dm me over my socials for works : )
            </motion.p>

            {/* Social Icons */}
            <motion.div
              className="flex gap-3 mt-4 justify-center md:justify-start md:-ml-0 -ml-10"
              variants={itemVariants}
            >
              <a
                href="/resume.pdf"  // replace with your actual resume file path
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-[3px] bg-gray-100 dark:bg-white/10 backdrop-blur-xl rounded-lg 
                           shadow-md border border-gray-300 dark:border-white/20
                           hover:bg-gray-200 dark:hover:bg-white/20 hover:scale-105 
                           transition-all duration-300 text-gray-800 dark:text-gray-100
                           inline-flex items-center justify-center min-w-[100px]  "
                style={{ position: 'relative', zIndex: 10 }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open('/resume.pdf', '_blank');
                }}
              >
                <span>Resume</span>
              </a>
              <a
                href="https://www.linkedin.com/in/akshath-p-519939287/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-125 transition-transform duration-200 inline-flex items-center justify-center"
                style={{ zIndex: 10, position: 'relative' }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open('https://www.linkedin.com/in/akshath-p-519939287/', '_blank');
                }}
              >
                <img
                  alt="linkedin-icon"
                  className="h-5 w-5"
                  src="/images/linkedin.svg"
                />
              </a>

              <a
                href="https://github.com/AKSHATH99"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-125 transition-transform duration-200 inline-flex items-center justify-center"
                style={{ zIndex: 10, position: 'relative' }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open('https://github.com/AKSHATH99', '_blank');
                }}
              >
                <img
                  alt="git-icon"
                  className="h-5 w-5"
                  src="/images/github.svg"
                />
              </a>

              <a
                href="https://twitter.com/AkshathP2"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-125 transition-transform duration-200 inline-flex items-center justify-center"
                style={{ zIndex: 10, position: 'relative' }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open('https://twitter.com/AkshathP2', '_blank');
                }}
              >
                <img
                  alt="x-icon"
                  className="h-5 w-5"
                  src="/images/x.png"
                />
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Body;