import React, { useState } from "react";
import { motion } from "framer-motion";

const openLiveLink = (link) => {
  window.open(link);
};

const ProjectBox = ({ data }) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
    <motion.div
      onClick={toggleDetails}
      onMouseEnter={() => setIsDetailsVisible(true)}
      onMouseLeave={() => setIsDetailsVisible(false)}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
      }}
      className="rounded-xl hover:cursor-pointer p-3 mb-28 m-4 w-[400px] h-[300px] relative overflow-hidden"
    >

      <img
        className="w-full h-full rounded-xl object-cover"
        src={data.placeholderImage}
        alt={`${data.title} placeholder`}
      />

  
      <motion.div

        initial={{ opacity: 0, scale: 0.95 }}
        animate={isDetailsVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`absolute top-0 left-0 w-full h-full bg-white/50 backdrop-blur-md rounded-xl flex flex-col justify-between p-5`}
      >
        <div>
          <h1 className="text-2xl font-bold text-orange-700">{data.title}</h1>
          <div className="flex mt-4">
            <a
              onClick={(e) => {
                e.stopPropagation(); 
                openLiveLink(data.Livelink);
              }}
              className="mr-3"
            >
              <motion.img
                whileHover={{ scale: 1.2 }}
                src="/images/redirect.svg"
                alt="Live link"
                className="h-7 w-7 mt-1"
              />
            </a>
            <a
              href={data.Githublink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Prevent toggle when clicking links
            >
              <motion.img
                whileHover={{ scale: 1.2 }}
                src="/images/github.png"
                alt="GitHub link"
                className="h-8 w-8"
              />
            </a>
          </div>
        </div>

   
        <p className="text-sm text-black mt-4 font-ubuntu">{data.about}</p>


        <div className="flex mt-4">
          {data.stack.map((stack, index) => (
            <motion.img
              key={index}
              src={stack}
              alt="Tech stack"
              className="h-7 w-7 ml-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectBox;