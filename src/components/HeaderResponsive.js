import { useState } from "react"
import React from 'react'
import { Link } from "react-scroll";
import { useEffect } from "react";

const HeaderResponsive = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHome, setisHome] = useState(true);
  const [isAbout, setisAbout] = useState(false);
  const [isProject, setisProject] = useState(false);
  const [isContact, setisContact] = useState(false);

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
    <div className='text-sm fixed w-full  '>
      <div className="   " style={{ marginTop: isScrolled ? "0px" : "" }}>
        <ul className="flex  justify-around border border-orange-500 text-orange-500  bg-gray-900  shadow-2xl">
        <Link to="body" spy={true} smooth={true} duration={500}>
          <li
            className={` p-3 hover:cursor-pointer hover:text-white hover:border-b-4 transition-all duration-300 ${
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
              className={` p-3  hover:cursor-pointer hover:text-white hover:border-b-4 transition-all duration-300 ${
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
            className={` p-3  hover:cursor-pointer hover:text-white hover:border-b-4 transition-all duration-300   ${
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
          <li className={` p-3  hover:cursor-pointer  hover:text-white hover:border-b-4 transition-all duration-300${
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
    </div>
  )
}

export default HeaderResponsive
