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

  return (
    <div
      id="body"
      className="bg-gray-950   "
    >
      {/* <div className={` ${isScrolled ? "mt-0 " : "mt-20 "}`}>
        {sidebar ? <HeaderResponsive /> : null}
      </div> */}

      <div className=" md:mb-0  text-white flex flex-col justify-center items-center">
        <div className="md:flex md:justify-center md:items-center xl:mt-44 320:mt-10 ">
          <div className="md:mr-10">
            <img
              alt="gif"
              className="w-72 h-44 md:w-96 md:h-72 m-5  320:h-44 320:w-44  md:m-0 mx-auto"
              src="/images/hero-image.png"
            />
          </div>

          <motion.div className="m-2 md:w-2/3 text-center md:text-left">
            <p className="text-3xl md:text-4xl font-bold font-mono 320:text-2xl ">
              Hi, I am{" "}
              <motion.span
                whileHover={{ scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="text-themeViolet inline-block hover:cursor-pointer"
              >
                Akshath P
              </motion.span>
            </p>
            {/* <p className="w-72 md:w-full md:ml-0 ml-[75px] text-xl md:text-xl text-white">
              Full-Stack Developer.
            </p> */}
            <p className="w-full md:w-[500px] mt-3 md:text-sm md:-ml-0 -ml-6  font-ubuntu">
            I built full-stack websites . 
            </p>
            <p className="w-full md:w-[500px] mt-3 md:text-sm md:-ml-0   font-ubuntu">
            I'm a full stack developer and have been building websites for almost  3 years while learning . 
            I'm currently working as <span className="text-themeViolet"> full stack intern</span> at a startup and have been actively working on <span className="text-themeViolet"> nextjs </span> and <span className="text-themeViolet"> mongodb</span>
            </p>
              <br />
              <p className=" italic md:w-96 w-3/4 md:ml-0 ml-16 -mt-3 md:font-xl">
                I am actively looking for freelance  gigs , internships and full time roles. Feel free to <span className="text-themeViolet"> <a href="mailto:akshathpkk@gmail.com" className=""> mail</a></span> me  or dm me over my socials for works : )
              </p>
            
            <div className="flex gap-3 mt-4 justify-center md:justify-start">
              <motion.a
                href="https://www.linkedin.com/in/akshath-p-519939287/"
                target="blank"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {" "}
                <img
                  alt="linkedin-icon"
                  className="h-5 w-5"
                  src="/images/linkedin.svg"
                />
              </motion.a>
              <motion.a href="https://github.com/AKSHATH99" target="blank" whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}>
                <img
                  alt="git-icon"
                  className=" h-5 w-5"
                  src="/images/github.svg"
                />
              </motion.a>
              <motion.a href="https://twitter.com/AkshathP2" target="blank" whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}>
                <img
                  alt="icon"
                  className=" h-5 w-5 "
                  src="/images/x.png"
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Body;
