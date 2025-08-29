import React from "react";
import { Link } from "react-scroll";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hideSidebar } from "../utils/MenuSlice";
import DarkModeToggle from "./ThemeToggler";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHome, setisHome] = useState(true);
  const [isAbout, setisAbout] = useState(false);
  const [isProject, setisProject] = useState(false);
  const [isContact, setisContact] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(hideSidebar());
  };

  const redirectToDrive = () => {
    window.open("https://drive.google.com/file/d/1xfI_VGZtmryAlpa2b4QmrXfkE2XZFW_K/view?usp=sharing", "_blank");
  };

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

  console.log(isMenu);
  return (
    <div
      className={`w-full ${isScrolled ? "bg-transparent" : "h-20"
        } flex justify-center text-black dark:text-white transition-all duration-300 fixed top-0 z-50`}
    >
      {/* Logo and Title */}
      <div className={`flex 320:pl-2 pl-4 -ml-10 mt-2 ${isScrolled ? "hidden" : "block"} `}>
        <img
          className="block dark:hidden rounded-lg h-12 w-12 mt-4 p-1 shadow-lg ring-2    ring-white/20"
          src="/images/code-xml.svg"
          alt="Profile"
        />
        <img
          className="hidden dark:block rounded-lg h-12 w-12 mt-4 p-1 shadow-lg ring-2  ring-white/20"
          src="/images/code-icon.png"
          alt="Profile"
        />
        
      </div>

      {/* Navigation Menu */}
      <div
        className="block md:block 800:hidden xl:block text-[12px]"
        style={{ marginLeft: isScrolled ? "290px" : "0" }}
      >
        <ul className="xl:flex gap-20 p-4 320:hidden ml-7 mt-3 justify-around 
                       bg-white/10 backdrop-blur-xl rounded-2xl 
                       shadow-2xl border border-white/20
                       hover:bg-white/15 transition-all duration-300">
          <Link to="body" spy={true} smooth={true} duration={500}>
            <li
              className={`px-4 py-2 rounded-lg hover:cursor-pointer 
                         hover:bg-white/20  hover:shadow-lg
                         hover:scale-105 transition-all duration-300 
                         ${isHome
                  ? "bg-gradient-to-r from-violet-500/30 to-purple-600/30 shadow-md border border-violet-400/30"
                  : "hover:border-b-2 hover:border-violet-400"
                }`}
              onClick={() => {
                setisAbout(false);
                setisContact(false);
                setisProject(false);
                setisHome(true);
              }}
            >
              HOME
            </li>
          </Link>
          <Link to="blogs" spy={true} smooth={true} duration={500}>
            <li
              className={`px-4 py-2 rounded-lg hover:cursor-pointer 
                         hover:bg-white/20  hover:shadow-lg
                         hover:scale-105 transition-all duration-300 
                         ${isAbout
                  ? "bg-gradient-to-r from-violet-500/30 to-purple-600/30 shadow-md border border-violet-400/30"
                  : "hover:border-b-2 hover:border-violet-400"
                }`}
              onClick={() => {
                setisAbout(true);
                setisContact(false);
                setisProject(false);
                setisHome(false);
              }}
            >
              BLOGS
            </li>
          </Link>
          <Link to="project" spy={true} smooth={true} duration={500}>
            <li
              className={`px-4 py-2 rounded-lg hover:cursor-pointer 
                         hover:bg-white/20 hover:shadow-lg
                         hover:scale-105 transition-all duration-300 
                         ${isProject
                  ? "bg-gradient-to-r from-violet-500/30 to-purple-600/30 shadow-md border border-violet-400/30"
                  : "hover:border-b-2 hover:border-violet-400"
                }`}
              onClick={() => {
                setisAbout(false);
                setisContact(false);
                setisProject(true);
                setisHome(false);
              }}
            >
              PROJECTS
            </li>
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <li
              className={`px-4 py-2 rounded-lg hover:cursor-pointer 
                         hover:bg-white/20 hover:shadow-lg
                         hover:scale-105 transition-all duration-300 
                         ${isContact
                  ? "bg-gradient-to-r from-violet-500/30 to-purple-600/30 shadow-md border border-violet-400/30"
                  : "hover:border-b-2 hover:border-violet-400"
                }`}
              onClick={() => {
                setisAbout(false);
                setisContact(true);
                setisProject(false);
                setisHome(false);
              }}
            >
              REACH ME
            </li>
          </Link>
        </ul>
      </div>

      <DarkModeToggle />
    </div>
  );
};

export default Header;