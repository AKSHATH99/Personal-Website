import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="  h-full  p-8 bg-gradient-to-r from-rose-100 to-teal-100
    "
    >
      {/* <h1 className="text-4xl md:text-5xl md:ml-72 font-mono font-bold text-black  border-b-orange-600">ABOUT ME</h1> */}
      <h1 className="text-4xl md:text-5xl md:ml-72 font-mono font-bold    w-max text-orange-600 ">
        Who am I... ?
      </h1>

      <div className="flex">
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

          <p className="font-bold text-3xl mt-20 ml-5">
            {" "}
            What <span className=" text-orange-600">Drives</span> Me 🚀{" "}
          </p>
          <p className=" text-black md:text-xl text-justify ml-6">
            {" "}
            I'm a aspiring Frontend Developer who turns ideas into awesome
            websites. 💻✨ I specialize in creating user-friendly designs that
            make a lasting impression. 🎨 Let's build something amazing together
            and bring your vision to the digital world! 🌐{" "}
          </p>
          <p className="mt-20 md:text-xl text-justify ml-5">
            As someone entirely new to this field, I am eager to gain valuable
            experience and am actively seeking opportunities for collaboration.
          </p>
        </div>

        <div className="w-full h-full mr-32 hidden md:block ">
          <img
            src="/images/image 2.png"
            alt="Profile"
            className="w-full h-full "
          />
        </div>
      </div>

      <div className="m-4 my-12">
        <h2 className="font-bold text-4xl text-orange-500">What I Know </h2>

        <div className="  my-4 p-3 rounded-xl shadow-2xl h-max">
          <h1 className="m-4 text-xl text-orange-800 font-bold">FRONTEND</h1>
          <div className="flex flex-wrap">
            <img
              className="h-16 m-4 md:h-24   "
              alt="HTML5 icon"
              src="/images/html5-icon-12117.png"
              
            />
            <img
              className="h-16 m-4 md:h-24 "
              alt="CSS icon"
              src="/images/css.png"
            />
            <img
              className="h-16 m-4 md:h-24 "
              alt="JavaScript icon"
              src="/images/js.png"
              
            />
            <img
              className="h-16 m-4 md:h-24 "
              alt="React icon"
              src="/logo192.png"
              
            />
            <img
              className="h-16 m-4 md:h-24 "
              alt="Python icon"
              src="/images/python.png"
              
            />
          </div>
          <h1 className="m-4 text-xl text-orange-800 font-bold">BACKEND</h1>
          <div className="flex flex-wrap">
            <img
              className="h-16 m-4 md:h-24 "
              alt="MySQL icon"
              src="/images/mysql.png"
            />
          </div>
          <h1 className="m-4 text-xl text-orange-800 font-bold">TOOLS </h1>
          <div className="flex flex-wrap">
            <img
              className="h-16 m-4 md:h-24 "
              alt="GitHub icon"
              src="/images/github.png"
            />
            <img
              className="h-24 md:-mt-5 md:h-44 "
              alt="GitHub icon"
              src="/images/windows-11.png"
            />
            <img
              className="h-16 m-4 md:h-24 "
              alt="GitHub icon"
              src="/images/vs code.png"
            />
            <img
              className="h-16 m-4 md:h-24 "
              alt="GitHub icon"
              src="/images/Git-icon.png"
            />
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default About;
