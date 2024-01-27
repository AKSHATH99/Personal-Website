import React from "react";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hideSidebar } from "../utils/MenuSlice";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHome, setisHome] = useState(true);
  const [isAbout, setisAbout] = useState(false);
  const [isProject, setisProject] = useState(false);
  const [isContact, setisContact] = useState(false);
  const [isMenu , setIsMenu]=useState(false);
  const dispatch =useDispatch();

  const handleSidebar = () => {
    dispatch(hideSidebar());
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
  console.log(isMenu)
  return (
    // <div className="border bg-black text-white flex shadow-lg ">
    <div
      className={`w-full ${
        isScrolled ? "bg-transparent" : "h-20"
      } bg-gray-500 flex text-white transition-all duration-300 fixed top-0 `}
    >
      <div className={`flex ${isScrolled ? "hidden" : "block"} `}>
        <img
          className="rounded-lg  h-12 w-12 mt-4"
          //   src="/images/user-line.png"
          src="/images/icons8-source-code-50.png"
          alt="Profile"
        />
        <h1 className="md:mt-7 mt-5 md:text-xl font-mono font-bold ml-4 s ">
          AKSHATH'S PORTFOLIO
        </h1>
      </div>
      <div className="md:p-4 hidden md:block " style={{ marginLeft: isScrolled ? "250px" : "0" }}>
        <ul className="flex ml-28 justify-around border border-orange-500 text-orange-500  bg-gray-900 rounded-xl shadow-2xl">
        <Link to="body" spy={true} smooth={true} duration={500}>
          <li
            className={`m-4 ml-1 hover:cursor-pointer hover:text-white hover:border-b-4 transition-all duration-300 ${
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
              className={` m-4 ml-24 hover:cursor-pointer hover:text-white hover:border-b-4 transition-all duration-300 ${
                isAbout
                  ? "border-b-4"
                  : ""
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
            className={` m-4 ml-24 hover:cursor-pointer hover:text-white hover:border-b-4 transition-all duration-300   ${
              isProject
                ? "border-b-4"
                : ""
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
          <li className={`m-4 ml-24 hover:cursor-pointer  hover:text-white hover:border-b-4 transition-all duration-300${
              isContact
                ? "border-b-4 "
                : ""
            } `}
            onClick={() => {
              setisAbout(false);
              setisContact(true);
              setisProject(false);
              setisHome(false);
            }}>REACH ME</li></Link>
        </ul>
      </div>
      <button
        className={`flex ${
          isScrolled ? "hidden" : "block"
        }    block md:ml-28 mt-5 w-36 h-12 border border-black   text-black  bg-orange-400 rounded-xl shadow-2xl justify-center items-center
        hover:bg-orange-500x hover:text-white transition duration-300 ease-in-out  `}
      >
        <img src="/images/download-line.png" />
        Resume  
      </button> 
      <div onClick={() => handleSidebar()} className="bg-white h-7 w-7 mt-7 flex items-center justify-center mx-10 md:hidden">
        <img src="/images/menu-line.png"/>
      </div>
    </div>
  );
};

export default Header;
