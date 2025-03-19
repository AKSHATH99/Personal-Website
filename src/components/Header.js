import React from "react";
import { Link } from "react-scroll";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hideSidebar } from "../utils/MenuSlice";

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

  // function toggleMenu(){

  // }
  console.log(isMenu);
  return (
    // <div className="border bg-black text-white flex shadow-lg ">
    <div
      className={`w-full  ${
        isScrolled ? "bg-transparent" : "h-20"
      } flex justify-center text-white transition-all duration-300 fixed top-0 z-50 `}
    >
      <div className={`flex 320:pl-2 pl-4 -ml-10 ${isScrolled ? "hidden" : "block"} `}>
        <img
          className="rounded-lg  h-12 w-12 mt-4 "
          src="/images/icons8-source-code-50.png"
          alt="Profile"
        />
        <h1 className="md:mt-7 mt-5 md:text-xl font-mono font-bold ml-4 s  ">
          AKSHATH'S PORTFOLIO
        </h1>
      </div>

      <div
        className=" block md:block 800:hidden xl:block text-[12px]   "
        style={{ marginLeft: isScrolled ? "290px" : "0" }}
      >
        <ul className="xl:flex gap-20 p-4 320:hidden  ml-28 mt-3 justify-around border-2 border-themeViolet text-white bg-gray-900 rounded-xl shadow-2xl">
          <Link to="body" spy={true} smooth={true} duration={500}>
            <li
              className={` hover:cursor-pointer hover:text-white hover:border-b-4 transition-all duration-300 ${
                isHome ? "border-b-4" : ""
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
          <Link to="about" spy={true} smooth={true} duration={500}>
            <li
              className={`  hover:cursor-pointer hover:text-white hover:border-b-4 transition-all duration-300 ${
                isAbout ? "border-b-4" : ""
              } `}
              onClick={() => {
                setisAbout(true);
                setisContact(false);
                setisProject(false);
                setisHome(false);
              }}
            >
              ABOUT ME
            </li>
          </Link>
          <Link to="project" spy={true} smooth={true} duration={500}>
            <li
              className={`  hover:cursor-pointer hover:text-white hover:border-b-4 transition-all duration-300   ${
                isProject ? "border-b-4" : ""
              } `}
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
              className={` hover:cursor-pointer  hover:text-white hover:border-b-4 transition-all duration-300${
                isContact ? "border-b-4 " : ""
              } `}
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
      {/* <button
        onClick={() => redirectToDrive()}
        className={`flex ${isScrolled ? "hidden" : "flex"} 
      md:ml-24 ml-20 mt-5 md:w-36 w-full max-w-[150px] md:h-[43px] h-[38px] 
      border border-yellow-100 text-yellow-100 bg-black 
      rounded-lg shadow-2xl shadow-black 
      justify-center items-center 
      hover:bg-[#2c342e] transition duration-300 ease-in-out`}
      >
        <img
          className="h-[25px] w-[25px] mr-[3px]"
          src="/images/resume.png"
          alt="Resume"
        />
        <a href="/your-resume.pdf" download>
          Resume
        </a>
      </button> */}

      {/* <div
        onClick={() => handleSidebar()}
        className={` h-7 w-7 mt-7 flex xl:hidden items-center justify-center mx-10 md:hidden 800:block 320:ml-2 320:mr-0 ${
          isScrolled ? "hidden" : "block"
        }`}
      >
        <img src="/images/menu.png" />
      </div> */}
    </div>
  );
};

export default Header;
