import React from "react";
import ProjectBox from "./ProjectBox";

const ProjectData = [
  {
    title: "GUIDO ",
    Livelink: "https://guido-frontend.vercel.app/",
    Githublink: "https://github.com/AKSHATH99/GUIDO",
    about:
      "GUIDO is a full stack MERN app build to help students find their right mentor based on their career and prefered field. Made using of TailwindCSS and Framer Motion for designing and nodemailer for mailing system ",
    placeholderImage:"/images/myImage.png",
    stack: ["/logo192.png", ,"/images/database.png","/images/expressjs.png","/images/node.png","/images/tailwind.png","/images/motion.png"],
  },
  {
    title: "FOOD-ZONE",
    Livelink: "https://food-zone-vert.vercel.app/",
    Githublink: "https://github.com/AKSHATH99/FOOD-ZONE",
    about:
      "The project is aimed at creating frontend of a restaurent website.It includes features of online delivery system i.e. a foomenu and cart sections using React.js for a dynamic user interface and Tailwind CSS for a clean and visually appealing design",
    placeholderImage: "/images/FOOD-MENU.png",
    stack: ["/logo192.png", "/images/tailwind.png"],
  },

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
  return (
    <div id="project" className="    text-white bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div>
      <h1 className=" text-transparent  font-playfair bg-clip-text bg-gradient-to-r from-white to-orange-500 md:text-5xl text-3xl font-bold  mt-0 pt-7 m-6 md:ml-72 800:ml-44   ">
      Things I've Built .{" "}
      </h1>
      </div>
      <div className="flex flex-wrap mt-20 md:ml-32 ">
        
        {ProjectData.map((data)=>
        <ProjectBox  data={data}/>  
        )}


      </div>
    </div>
  );
};

export default Project;
