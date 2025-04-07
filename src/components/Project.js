import React from "react";
import ProjectBox from "./ProjectBox";
import GithubCalendar from "./ui/GithubCalendar";
import { motion } from "framer-motion";

const ProjectData = [
  {
    title: "GUIDO ",
    Livelink: "https://guido-frontend.vercel.app/",
    Githublink: "https://github.com/AKSHATH99/GUIDO",
    about:
      "GUIDO is a full stack MERN app build to help students find their right mentor based on their career and prefered field. Made using of TailwindCSS and Framer Motion for designing and nodemailer for mailing system ",
    placeholderImage: "/images/myImage.png",
    stack: [
      "/logo192.png",
      ,
      "/images/database.png",
      "/images/expressjs.png",
      "/images/node.png",
      "/images/tailwind.png",
      "/images/motion.png",
    ],
  },
  {
    title: "Pharm-locator ",
    Livelink: "https://pharm-locator.vercel.app/",
    Githublink: "https://github.com/AKSHATH99/locator",
    about:
      "Pharm-locator is build using OpenStreetMap API and allows user to find nearby medical services in their location in real time and find the easiest path to location . Leaflet and react-leaflet is used to mark medical store locations . Leaflet Routing machine is used to mark the easiest route to medical services",
    placeholderImage: "/images/pharm-locator.png",
    stack: [
      "/logo192.png",
      "/images/tailwind.png",
      "/images/Openstreetmap.svg.png",
      "/images/leaflet.png",
    ],
  },
  {
    title: "Formatify ",
    Livelink: "https://formatify-silk.vercel.app/",
    Githublink: "https://github.com/AKSHATH99/formatify",
    about:
      "Application allows user to format their code in their favourite code editor theme and download / Copy png file of the formatted code . Also intergrated Gemini API to explain the code they formatted ",
    placeholderImage: "/images/formatify.png",
    stack: [
      "/logo192.png",
      "/images/tailwind.png",
      "/images/ts.svg",
      "/images/gemini.svg",
    ],
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
    <div id="project" className="  md:ml-[190px]  text-white ">
      <div>
        <h1 className=" text-white  font  md:text-2xl text-3xl font-bold  mt-20 pt-7 md:ml-0 ml-5     ">
          Things I've Built .{" "}
        </h1>
        <p className="mt-5 text-wrap md:ml-0 ml-5 md:w-max w-3/4 text-sm">
          Here is a list of selected projects i have worked on so far . Hover / click
          over them for details
        </p>
      </div>
      <div className="flex flex-wrap mt-5 ">
        {ProjectData.map((data) => (
          <ProjectBox data={data} />
        ))}
      </div>
      <div className="md:ml-0 ml-8 mt-5 md:w-max w-3/4">
      <div className="">
        <p>To view my other and recent projects checkout my GitHub</p>
        {/* <GithubCalendar/> */}
        <motion.a href="https://github.com/AKSHATH99" target="_blank">
          <motion.button
            className="flex mt-1 gap-3 items-center justify-center text-white border-2 rounded-md px-3 py-1 border-themeViolet"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <img alt="git-icon" className="h-5 w-5" src="/images/github.svg" />
            Github
          </motion.button>
        </motion.a>
      </div>
      <div className="mt-5">
        <p>
          I also update my project progress in Peerlist . Checkout and do hit
          follow if you like my work :)
        </p>
        <motion.a href="https://peerlist.io/akshath00" target="blank">
          <motion.button
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className=" flex mt-1 gap-2 items-center justify-center text-white  border-2 rounded-md px-3 py-1 border-themeViolet "
          >
            <img
              alt="git-icon"
              className=" h-5 w-5"
              src="/images/Peerlist.svg"
            />
            Peerlist
          </motion.button>
        </motion.a>
      </div>
      </div>
    </div>
  );
};

export default Project;
