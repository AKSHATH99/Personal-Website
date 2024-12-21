import React, { useState } from "react";
import { motion } from "framer-motion";

const openLiveLink = (link) => {
  window.open(link);
};

const ProjectBox = ({ data }) => {
  const [hoverEvent, setHoverEvent] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHoverEvent(true)}
      onMouseLeave={() => setHoverEvent(false)}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
      }}
      className="rounded-xl hover:cursor-pointer p-3 mb-28 m-4 w-[400px] h-[300px] relative overflow-hidden "
      onClick={()=>{openLiveLink(data.Livelink)}}
    > 
      <img
        className="w-full h-full rounded-xl object-cover"
        src={data.placeholderImage}
        alt={`${data.title} placeholder`}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={hoverEvent ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`absolute top-0 left-0 w-full h-full bg-white/50 backdrop-blur-md rounded-xl flex flex-col justify-between p-5`}
      >
        {/* Data */}
        <div>
          <h1 className="text-2xl font-bold text-orange-700">{data.title}</h1>
          <div className="flex mt-4">
            <a
              href={data.Livelink}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3"
            >
              <motion.img
                whileHover={{ scale: 1.2 }}
                src="https://cdn-icons-png.flaticon.com/512/8839/8839121.png"
                alt="Live link"
                className="h-10 w-10"
              />
            </a>
            <a
              href={data.Githublink}
              target="_blank"
              rel="noopener noreferrer"
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

        <p className="text-sm text-black mt-4  font-ubuntu">{data.about}</p>

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
