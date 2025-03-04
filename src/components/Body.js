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
      className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 h-screen "
    >
      {/* <div className={` ${isScrolled ? "mt-0 " : "mt-20 "}`}>
        {sidebar ? <HeaderResponsive /> : null}
      </div> */}

      <div className=" md:mb-0  text-black flex flex-col justify-center items-center">
        <div className="md:flex md:justify-center md:items-center xl:mt-44 320:mt-10 ">
          <div className="md:mr-10">
            <img
              alt="gif"
              className="w-72 h-44 md:w-80 md:h-80 m-5  320:h-44 320:w-44  md:m-0 mx-auto"
              src="/images/coding boy.png"
            />
          </div>

          <motion.div className="m-2 md:w-2/3 text-center md:text-left">
            <p className="text-3xl md:text-6xl font-bold font-mono 320:text-2xl">
              Hi, I am{" "}
              <motion.span
                whileHover={{ scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="text-orange-600 inline-block hover:cursor-pointer"
              >
                Akshath P
              </motion.span>
            </p>
            <p className="w-72 md:w-full text-xl md:text-3xl text-orange-900">
              Full-Stack Developer.
            </p>
            <p className="w-full md:w-[500px] mt-3 md:text-lg   font-ubuntu">
            I built full stack web apps.
            </p>
              <br />
              <p className="font-bold md:w-96 w-full -mt-3">
                Looking out for full time roles , internships or freelance
                projects and collaboration."
              </p>
            
            <div className="flex justify-center md:justify-start">
              <motion.a
                href="https://www.linkedin.com/in/akshath-p-519939287/"
                target="blank"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {" "}
                <img
                  alt="linkedin-icon"
                  className="m-4 mx-2 h-12 w-12"
                  src="/images/linkedin-orange.png"
                />
              </motion.a>
              <motion.a href="https://github.com/AKSHATH99" target="blank" whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}>
                <img
                  alt="git-icon"
                  className="m-4 mx-1 h-10 w-10 mt-5"
                  src="/images/git-orange.png"
                />
              </motion.a>
              <motion.a href="https://twitter.com/AkshathP2" target="blank" whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}>
                <img
                  alt="icon"
                  className="m-4 mx-2 h-8 w-8 mt-6 "
                  src="/images/x-orange.png"
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
