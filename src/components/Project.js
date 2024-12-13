import React from "react";
import ProjectBox from "./ProjectBox";

const ProjectData = [
  {
    title: "GUIDO ",
    Livelink: "https://guido-frontend.vercel.app/",
    Githublink: "https://github.com/AKSHATH99/GUIDO",
    about:
      "GUIDO is a full stack MERN app build to help students find their right mentor based on their career and prefered field. Made using of TailwindCSS and Framer Motion for designing and nodemailer for mailing system ",
    placeholderImage: "/images/guido.png",
    stack: ["/logo192.png", ,"/images/mongodb.png","/images/express.png","/images/nodejs.png","/images/tailwind.png","/images/framer.png"],
  },
  {
    title: "FOOD-ZONE",
    Livelink: "https://food-zone-o762.vercel.app/",
    Githublink: "https://github.com/AKSHATH99/FOOD-ZONE",
    about:
      "The project is aimed at creating frontend of a restaurent website.It includes features of online delivery system i.e. a foomenu and cart sections using React.js for a dynamic user interface and Tailwind CSS for a clean and visually appealing design",
    placeholderImage: "/images/FOOD-MENU.png",
    stack: ["/logo192.png", "/images/tailwind.png"],
  },

  {
    title: "WEATHER APP",
    Livelink: "https://food-zone-o762.vercel.app/",
    Githublink: "https://github.com/AKSHATH99/FOOD-ZONE",
    about:
      "The project is aimed at creating frontend of a restaurent website.It includes features of online delivery system i.e. a foomenu and cart sections using React.js for a dynamic user interface and Tailwind CSS for a clean and visually appealing design",
    placeholderImage: "/images/Weather.png",
    stack: ["/logo192.png", "/images/tailwind.png",],
  },
];

const Project = () => {
  return (
    <div id="project" className=" bg-gradient-to-r from-gray-100 to-gray-300   text-white">
      <div>
      <h1 className="md:text-4xl text-3xl font-bold text-orange-800 mt-0 pt-7 m-6 md:ml-72 800:ml-44">
      Take a look at my projects.....{" "}
      </h1>
      </div>
      <div className="flex flex-wrap mt-20">
        {/* <div className=" border-2 border-white md:w-2/3 md:h-max h-max  800:w-3/4  shadow-xl   m-4  md:text-justify md:flex bg-black ">
          <img
            className="md:h-auto h-auto xl:w-1/2   md:w-3/5 "
            src="/images/FOOD-MENU.png"
          />
          <div>
            <h1 className="m-4 text-2xl font-bold text-orange-600">
              FOOD-ZONE
            </h1>
            <p className="m-2 p-2">
              The project is aimed at creating frontend of a restaurent website.It includes features of online delivery system i.e. a food
              menu and cart sections using React.js for a dynamic user interface and Tailwind CSS for a clean and visually appealing design.{" "} 
            </p>
            <div className="flex">
              <img alt="reactjs logo" className="h-7 w-7 ml-5" src="/logo192.png" />
              <img alt="tailwid logo" className="h-5 w-7 ml-5" src="/images/tailwind.png" />
            </div>

            <div className="flex mt-4">
              <button className="  h-10 w-10 mt-5 rounded-lg m-3 ">
               <a href="https://food-zone-o762.vercel.app/" target="blank"> <img
                alt="live link"
                  className="w-full h-full"
                  src="https://cdn-icons-png.flaticon.com/512/8839/8839121.png"
                /></a>
              </button>

              <button className="bg-black  h-10 w-10 rounded-lg m-3 mt-5">
              <a href="https://github.com/AKSHATH99/FOOD-ZONE" target="blank"> <img alt="git hub link" className="w-full h-full" src="/images/git-orange.png" /></a>
              </button>
            </div>
          </div>
        </div> */}
        
        {ProjectData.map((data)=>
        <ProjectBox data={data}/>  
        )}


      </div>
    </div>
  );
};

export default Project;
