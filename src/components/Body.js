import React from "react";
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
      <div className={` ${isScrolled ? "mt-0 " : "mt-20 "}`}>
        {sidebar ? <HeaderResponsive /> : null}
      </div>

      <div className=" md:mb-0  text-black flex flex-col justify-center items-center">
        <div className="md:flex md:justify-center md:items-center mt-44">
          <div className="md:mr-10">
            <img
              alt="gif"
              className="w-72 h-44 md:w-80 md:h-80 m-5   md:m-0 mx-auto"
              src="/images/coding boy.png"
            />
          </div>

          <div className="m-2 md:w-2/3 text-center md:text-left">
            <p className="text-3xl md:text-6xl font-bold font-mono">
              Hi, I am <span className="text-orange-600">Akshath P</span>
            </p>
            <p className="w-72 md:w-full text-xl md:text-3xl text-orange-900">
              Front-end Developer.
            </p>
            <p className="w-full md:w-96 my-3 md:text-lg italic">
              "Enthusiastic and motivated self-learning in Information
              Technology. Interested in exploring about Web Development and
              aspects of creating responsive and user-friendly websites. Now I
              am looking for more experience in my field."
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/akshath-p-519939287/"
                target="blank"
              >
                {" "}
                <img
                  alt="linkedin-icon"
                  className="m-4 h-12 w-12"
                  src="/images/linkedin-orange.png"
                />
              </a>
              <a href="https://github.com/AKSHATH99" target="blank">
                <img
                  alt="git-icon"
                  className="m-4 h-10 w-10 mt-5"
                  src="/images/git-orange.png"
                />
              </a>
              <a href="https://twitter.com/AkshathP2" target="blank">
                <img
                  alt="icon"
                  className="m-4 h-8 w-8 mt-6 "
                  src="/images/x-orange.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
