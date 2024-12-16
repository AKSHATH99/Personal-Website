import React ,{useRef , useEffect} from "react";
import { motion } from "framer-motion";

const About = () => {

  const marqueeRef = useRef(null);

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
      className="  h-full  p-8 bg-gray-900
    "
      style={{ scrollPadding: "200px" }}
    >
      {/* <h1 className="text-4xl md:text-5xl md:ml-72 font-mono font-bold text-black  border-b-orange-600">ABOUT ME</h1> */}
      <h1 className="text-4xl md:text-5xl md:ml-56 font-mono font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-500 w-max">
  LANGUAGES AND FRAMEWORKS I WORK ON
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
      <p className="m-4 ml-52 my-10 font-bold text-3xl text-orange-950">
        {" "}
      </p>

     
     {/* =-----------------------------------FRONTEND ------------------------------ */}
     <p className="ml-56 font-Poppins font-bold mt-10 text-3xl text-white  ">FRONTEND</p>
     <div className=" overflow-hidden relative flex w-2/3 mt-10 ml-56 border border-yellow-100 rounded-lg bg-white/30 backdrop-blur-md  opacity-100 text-black">
      <motion.div
        ref={marqueeRef}
        className="flex whitespace-nowrap py-5 px-7"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {/* Image Group */}
        <div className="flex items-center">
          <img
            className="h-16 m-4  md:h-16"
            alt="HTML5 icon"
            src="/images/html5-icon-12117.png"
          />
          <img
            className="h-16 m-4  md:h-16"
            alt="CSS icon"
            src="/images/css.png"
          />
          <img
            className="h-16 m-4  md:h-16"
            alt="JavaScript icon"
            src="/images/js.png"
          />
          <img
            className="h-16 m-4  md:h-16"
            alt="React icon"
            src="/logo192.png"
          />
          <img
            className="h-14 m-4 md:h-16"
            alt="Tailwind icon"
            src="/images/tailwind.png"
          />
          <img
            className="h-16 m-4  md:h-16"
            alt="Python icon"
            src="/images/python.png"
          />
          <img
            className="h-16 m-4  md:h-16"
            alt="framer icon"
            src="/images/framer.png"
          />
          {/* Duplicate   image here  */}
          <img
            className="h-16 m-4  md:h-16"
            alt="HTML5 icon"
            src="/images/html5-icon-12117.png"
          />
          
          <img
            className="h-16 m-4  md:h-16"
            alt="CSS icon"
            src="/images/css.png"
          />
          <img
            className="h-16 m-4  md:h-16"
            alt="JavaScript icon"
            src="/images/js.png"
          />
          <img
            className="h-16 m-4  md:h-16"
            alt="React icon"
            src="/logo192.png"
          />
          <img
            className="h-14 m-4 md:h-16"
            alt="Tailwind icon"
            src="/images/tailwind.png"
          />
          <img
            className="h-16 m-4  md:h-16"
            alt="Python icon"
            src="/images/python.png"
          />
          <img
            className="h-16 m-4  md:h-16"
            alt="famer icon"
            src="/images/framer.png"
          />
        </div>
      </motion.div>
    </div>


     {/* =-----------------------------------BACKEND ------------------------------ */}
     <p className="ml-56 font-Poppins font-bold mt-10 text-3xl text-white">BACKEND</p>
     <div className="overflow-hidden relative flex w-1/2 mt-10 ml-56 border border-white-400 rounded-lg bg-white/30 backdrop-blur-md  opacity-100 text-black">
      <motion.div
        ref={marqueeRef}
        className="flex whitespace-nowrap py-5 px-7"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {/* Image Group */}
        <div className="flex  ">
        <img
              className="h-16 m-4  md:h-16 "
              alt="MySQL icon"
              src="/images/nextjs.png"
            />
          <img
              className="h-16 m-4  md:h-16 "
              alt="MySQL icon"
              src="/images/mongo.png"
            />
          <img
              className="h-16 m-4  md:h-16 "
              alt="MySQL icon"
              src="/images/express2.png"
            />
          <img
              className="h-16 m-4  md:h-16 "
              alt="MySQL icon"
              src="/images/nodejs2.png"
            />
            
          <img
              className="h-16 m-4  md:h-16 "
              alt="MySQL icon"
              src="/images/mysql.png"
            />
          {/* Duplicate   image here  */}
          <img
              className="h-16 m-4  md:h-16 "
              alt="MySQL icon"
              src="/images/nextjs.png"
            />
          <img
              className="h-16 m-4  md:h-16 "
              alt="MySQL icon"
              src="/images/mongo.png"
            />
          <img
              className="h-16 m-4  md:h-16 "
              alt="MySQL icon"
              src="/images/express2.png"
            />
          <img
              className="h-16 m-4  md:h-16 "
              alt="MySQL icon"
              src="/images/nodejs2.png"
            />
             <img
              className="h-16 m-4  md:h-16 "
              alt="MySQL icon"
              src="/images/mysql.png"
            />
        </div>
      </motion.div>
    </div> 

    {/* ----------------------------------------TOOLS SECTIONS------------------------ */}
    <p className="ml-56 font-Poppins font-bold mt-10 text-3xl text-white">TOOLS  &  PACKAGES</p>
     <div className="overflow-hidden relative flex w-1/2 mt-10 ml-56 border border-white-400 rounded-lg bg-white/30 backdrop-blur-md  opacity-100 text-black">
      <motion.div
        ref={marqueeRef}
        className="flex whitespace-nowrap py-3 px-7"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {/* Image Group */}
        <img
              className="h-16 m-4  md:h-16 "
              alt="GitHub icon"
              src="/images/vs code.png"
            />
        <img
              className="h-16 m-4  md:h-16 "
              alt="GitHub icon"
              src="/images/npm.png"
            />
             
        <img
              className="h-16 m-4  md:h-12 "
              alt="GitHub icon"
              src="/images/github.png"
            />
              <img
                className="h-24 md:-mt-5 mx-5  md:h-32 "
                alt="GitHub icon"
                src="/images/vercel.png"
              />
              <img
              className="h-16 m-4  md:h-12 "
              alt="GitHub icon"
              src="/images/Git-Icon.png"
            />
              <img
              className="h-16 m-4  md:h-12 "
              alt="GitHub icon"
              src="/images/figma.png"
            />
           
            
           
      
          {/* Duplicate   image here  */}
          <img
              className="h-16 m-4  md:h-16 "
              alt="GitHub icon"
              src="/images/vs code.png"
            />
        <img
              className="h-16 m-4  md:h-16 "
              alt="GitHub icon"
              src="/images/npm.png"
            />
             
        <img
              className="h-16 m-4  md:h-12 "
              alt="GitHub icon"
              src="/images/github.png"
            />
              <img
                className="h-24 md:-mt-5 mx-5  md:h-32 "
                alt="GitHub icon"
                src="/images/vercel.png"
              />
              <img
              className="h-16 m-4  md:h-12 "
              alt="GitHub icon"
              src="/images/Git-Icon.png"
            />
      </motion.div>
    </div>

      {/* <div className="m-4 my-12">
        <h2 className="font-bold text-4xl text-orange-500">What I Know </h2>

        <div className="  my-4 p-3 rounded-xl shadow-2xl h-max">
          <h1 className="m-4 text-xl text-orange-800 font-bold">FRONTEND</h1>
          <div className="flex flex-wrap">
            <img
              className="h-16 m-4  md:h-16   "
              alt="HTML5 icon"
              src="/images/html5-icon-12117.png"
            />
            <img
              className="h-16 m-4  md:h-16 "
              alt="CSS icon"
              src="/images/css.png"
            />
            <img
              className="h-16 m-4  md:h-16 "
              alt="JavaScript icon"
              src="/images/js.png"
            />
            <img
              className="h-16 m-4  md:h-16 "
              alt="React icon"
              src="/logo192.png"
            />
            <img
              className="h-14 m-4 md:h-16 "
              alt="tailwind icon"
              src="/images/tailwind.png"
            />
            <img
              className="h-16 m-4  md:h-16 "
              alt="Python icon"
              src="/images/python.png"
            />
          </div>
          <h1 className="m-4 text-xl text-orange-800 font-bold">BACKEND</h1>
          <div className="flex flex-wrap">
            <img
              className="h-16 m-4  md:h-16 "
              alt="MySQL icon"
              src="/images/mysql.png"
            />
          </div>
          <h1 className="m-4 text-xl text-orange-800 font-bold">TOOLS </h1>
          <div className="flex flex-wrap">
            <img
              className="h-16 m-4  md:h-16 "
              alt="GitHub icon"
              src="/images/github.png"
            />
            <img
              className="h-24 md:-mt-5 md:h-44 "
              alt="GitHub icon"
              src="/images/windows-11.png"
            />
            <img
              className="h-16 m-4  md:h-16 "
              alt="GitHub icon"
              src="/images/vs code.png"
            />
            <img
              className="h-16 m-4  md:h-16 "
              alt="GitHub icon"
              src="/images/Git-Icon.png"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
