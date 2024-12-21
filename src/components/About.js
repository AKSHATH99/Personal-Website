import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  const marqueeRef = useRef(null);

  // IMG URL FOR STACK INFORMATION
  const frontendImages = [
    {
      src: "/images/html5-icon-12117.png",
      alt: "HTML5 icon",
      className: "h-16 m-4 md:h-16",
    },
    { src: "/images/css.png", alt: "CSS icon", className: "h-16 m-4 md:h-16" },
    {
      src: "/images/js.png",
      alt: "JavaScript icon",
      className: "h-16 m-4 md:h-16",
    },
    { src: "/logo192.png", alt: "React icon", className: "h-16 m-4 md:h-16" },
    {
      src: "/images/tailwind.png",
      alt: "Tailwind icon",
      className: "h-14 m-4 md:h-16",
    },
    {
      src: "/images/python.png",
      alt: "Python icon",
      className: "h-16 m-4 md:h-16",
    },
    {
      src: "/images/framer.png",
      alt: "Framer icon",
      className: "h-16 m-4 md:h-16",
    },
    // Duplicates
    {
      src: "/images/html5-icon-12117.png",
      alt: "HTML5 icon",
      className: "h-16 m-4 md:h-16",
    },
    { src: "/images/css.png", alt: "CSS icon", className: "h-16 m-4 md:h-16" },
    {
      src: "/images/js.png",
      alt: "JavaScript icon",
      className: "h-16 m-4 md:h-16",
    },
    { src: "/logo192.png", alt: "React icon", className: "h-16 m-4 md:h-16" },
    {
      src: "/images/tailwind.png",
      alt: "Tailwind icon",
      className: "h-14 m-4 md:h-16",
    },
    {
      src: "/images/python.png",
      alt: "Python icon",
      className: "h-16 m-4 md:h-16",
    },
    {
      src: "/images/framer.png",
      alt: "Framer icon",
      className: "h-16 m-4 md:h-16",
    },
  ];

  const backendImages = [
    {
      src: "/images/nextjs.png",
      alt: "Next.js icon",
      className: "h-16 m-4 md:h-16",
    },
    {
      src: "/images/mongo.png",
      alt: "MongoDB icon",
      className: "h-16 m-4 md:h-16",
    },
    {
      src: "/images/express2.png",
      alt: "Express.js icon",
      className: "h-16 m-4 md:h-16",
    },
    {
      src: "/images/nodejs2.png",
      alt: "Node.js icon",
      className: "h-16 m-4 md:h-16",
    },
    {
      src: "/images/mysql.png",
      alt: "MySQL icon",
      className: "h-16 m-4 md:h-16",
    },
    // Duplicates
    {
      src: "/images/nextjs.png",
      alt: "Next.js icon",
      className: "h-16 m-4 md:h-16",
    },
    {
      src: "/images/mongo.png",
      alt: "MongoDB icon",
      className: "h-16 m-4 md:h-16",
    },
    {
      src: "/images/express2.png",
      alt: "Express.js icon",
      className: "h-16 m-4 md:h-16",
    },
    {
      src: "/images/nodejs2.png",
      alt: "Node.js icon",
      className: "h-16 m-4 md:h-16",
    },
    {
      src: "/images/mysql.png",
      alt: "MySQL icon",
      className: "h-16 m-4 md:h-16",
    },
  ];

  const toolsImages = [
    {
      src: "/images/vs code.png",
      alt: "VS Code icon",
      className: "h-16 m-4 md:h-16",
      whileHover: { scale: 1.5 },
    },
    { src: "/images/npm.png", alt: "NPM icon", className: "h-16 m-4 md:h-16" },
    {
      src: "/images/github.png",
      alt: "GitHub icon",
      className: "h-16 m-4 md:h-12",
    },
    {
      src: "/images/vercel.png",
      alt: "Vercel icon",
      className: "h-24 md:-mt-5 mx-5 md:h-32",
    },
    {
      src: "/images/Git-Icon.png",
      alt: "Git icon",
      className: "h-16 m-4 md:h-12",
    },
    {
      src: "/images/figma.png",
      alt: "Figma icon",
      className: "h-16 m-4 md:h-12",
    },
    {
      src: "/images/vs code.png",
      alt: "VS Code icon",
      className: "h-16 m-4 md:h-16",
    },
    { src: "/images/npm.png", alt: "NPM icon", className: "h-16 m-4 md:h-16" },
    {
      src: "/images/github.png",
      alt: "GitHub icon",
      className: "h-16 m-4 md:h-12",
    },
    {
      src: "/images/vercel.png",
      alt: "Vercel icon",
      className: "h-24 md:-mt-5 mx-5 md:h-32",
    },
    {
      src: "/images/Git-Icon.png",
      alt: "Git icon",
      className: "h-16 m-4 md:h-12",
    },
  ];

  useEffect(() => {
    const marquee = marqueeRef.current;
    const marqueeWidth = marquee.scrollWidth;
    const containerWidth = marquee.offsetWidth;

    const scrollInterval = setInterval(() => {
      marquee.scrollLeft += 1; // Adjust scroll speed as needed

      if (marquee.scrollLeft >= marqueeWidth - containerWidth) {
        marquee.scrollLeft = 0; // Reset scroll position for seamless loop
      }
    }, 5); // Adjust interval for scrolling speed

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div
      id="about"
      // className="  h-full  p-8 bg-gradient-to-r from-rose-100 to-teal-100 scroll-p-44
      // className="  h-full  p-8 bg-gradient-to-r from-gray-300 via-gray-300 to-black
      className="  h-full pl-0 p-8 bg-gray-900
    "
      style={{ scrollPadding: "200px" }}
    >
      <h1 className="text-xl ml-10 font-playfair md:text-5xl md:ml-44 font-mono font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-500 w-max">
        Languages and Frameworks I Work On
      </h1>

      {/* <div className="flex 4xl:block ">
        <div className="w-full">
          <p className="text-base md:text-xl text-black  m-4  mt-14 text-justify">
            Hello there! I'm{" "}
            <span className="text-orange-600 font-bold">Akshath P</span>, a
            dedicated and enthusiastic BCA student with a passion for{" "}
            <span className="">Web Development. </span> Currently pursuing my
            Bachelor's degree, I've immersed myself in the world of coding,
            sharpening my skills in{" "}
            <span className="text-orange-600 font-bold">
              HTML, CSS, JavaScript, and React.js.
            </span>
            <br />
          </p>

          <p className="font-bold text-3xl mt-20 ml-5 4xl:ml-3">
            {" "}
            What <span className=" text-orange-600">Drives</span> Me 🚀{" "}
          </p>
          <p className=" text-black md:text-xl text-justify ml-6 800:w-full">
            {" "}
            I'm a aspiring Frontend Developer who turns ideas into awesome
            websites. 💻✨ I specialize in creating user-friendly designs that
            make a lasting impression. 🎨 Let's build something amazing together
            and bring your vision to the digital world! 🌐{" "}
          </p>
          <p className="mt-20 md:text-xl text-justify ml-5 800:w-full">
            As someone entirely new to this field, I am eager to gain valuable
            experience and am actively seeking opportunities for collaboration.
          </p>
        </div>

        <div className="w-full h-full xl:mr-32 hidden md:block 800:mr-3  ">
          <img
            src="/images/image 2.png"
            alt="Profile"
            className="w-full h-full 4xl:hidden "
          />
        </div>
      </div> */}

      <p className="m-4 my-10 font-bold text-3xl text-orange-950"> </p>

      {/* =-----------------------------------FRONTEND ------------------------------ */}
      <p className="ml-20  md:ml-52 font-Poppins font-bold mt-10 text-3xl text-white  ">
        FRONTEND
      </p>
      <div className=" overflow-hidden relative flex w-2/3 mt-10 md:ml-56 ml-20 border border-yellow-100 rounded-lg bg-white/30 backdrop-blur-md  opacity-100 text-black">
        <motion.div
          ref={marqueeRef}
          className="flex whitespace-nowrap py-5 px-7"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {/* Image Group */}
          <div className="flex items-center">
            {frontendImages.map((image) => (
              <motion.img
                src={image.src}
                alt={image.alt}
                className={image.className}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* =-----------------------------------BACKEND ------------------------------ */}
      <p className="md:ml-56 ml-20 font-Poppins font-bold mt-10 text-3xl text-white">
        BACKEND
      </p>
      <div className="overflow-hidden relative flex w-1/2 mt-10 md:ml-56 ml-20  border border-white-400 rounded-lg bg-white/30 backdrop-blur-md  opacity-100 text-black">
        <motion.div
          ref={marqueeRef}
          className="flex whitespace-nowrap py-5 px-7"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {/* Image Group */}
          <div className="flex  ">
            {backendImages.map((image) => (
              <motion.img
                src={image.src}
                alt={image.alt}
                className={image.className}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* ----------------------------------------TOOLS SECTIONS------------------------ */}
      <p className="md:ml-56 ml-20 font-Poppins font-bold mt-10 text-3xl text-white">
        TOOLS & PACKAGES
      </p>
      <div className="overflow-hidden relative flex w-1/2 mt-10 md:ml-56 ml-20  border border-white-400 rounded-lg bg-white/30 backdrop-blur-md  opacity-100 text-black">
        <motion.div
          ref={marqueeRef}
          className="flex whitespace-nowrap py-3 px-7"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {/* Image Group */}
          {toolsImages.map((image) => (
            <motion.img
              src={image.src}
              alt={image.alt}
              className={image.className}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
