import React from "react";

const Project = () => {
  return (
    <div id="project" className=" bg-gradient-to-r from-gray-100 to-gray-300   text-white">
      <div>
      <h1 className="md:text-5xl text-3xl font-bold text-orange-800 mt-0 pt-7 m-6 md:ml-72">
        Some of My Projects.....{" "}
      </h1>
      </div>
      <div className="flex flex-wrap mt-20">
        <div className=" border-2 border-white md:w-2/3 md:h-max h-max   shadow-xl   m-4  md:text-justify md:flex bg-black ">
          <img
            className="md:h-auto h-auto  md:w-3/5 "
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
        </div>
        
        <div className=" border-4 border-white md:w-1/2   md:h-max h-max  bg-black shadow-xl    m-4  md:text-justify md:flex ">
          <img
            className="md:h-auto h-auto  md:w-3/5 "
            src="/images/Weather.png"
          />
          <div>
            <h1 className="m-4 text-2xl font-bold text-orange-600">
              WEATHER APP
            </h1>
            <p className="m-2 p-2">
              The project is aimed at creating fronted of a weather app which
              let user to search about weather of a particular city. App will
              fetch weather data using API using which it will display
              temperature , humidity and wind speed in a nice UI{" "}
            </p>
            <div className="flex">
              <img
              alt="html icon"
                className="h-7 w-7 ml-5"
                src="/images/html5-icon-12117.png"
              />
              <img alt="css icon" className="h-7 w-7 ml-5" src="/images/css.png" />
              <img alt="js icon" className="h-7 w-7 ml-5" src="/images/js.png" />
            </div>

            <div className="flex mt-4">
              <button className="  h-10 w-10 mt-5 rounded-lg m-3 ">
               <a href="https://akshath99.github.io/Weather-app/ " target="blank"><img
                alt="live link"
                  className="w-full h-full"
                  src="https://cdn-icons-png.flaticon.com/512/8839/8839121.png"
                /></a> 
              </button>

              <button className="bg-black  h-10 w-10 rounded-lg m-3 mt-5">
              <a href="https://github.com/AKSHATH99/Weather-app " target="blank"> <img alt="git hub repo link" className="w-full h-full" src="/images/git-orange.png" /></a> 
              </button>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Project;
