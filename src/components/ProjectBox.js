import React, { useState } from "react";

const ProjectBox = ({ data }) => {
  const [hoverEvent , setHoverEvent] = useState(false)
  console.log(data.LiveLink);
  return (
    <div className=" rounded-xl   m-4   ">
      <div className="p-2">
        <img className=" w-[500px] h-[350px] rounded-xl " src={data.placeholderImage} />


        <div
          onMouseEnter={() => setHoverEvent(true)}
          onMouseLeave={() => setHoverEvent(false)}
          className={`-mt-[277px] rounded-xl pb-10 pt-5 transition-all duration-300 ${
            hoverEvent
              ? "bg-white/50 backdrop-blur-md relative opacity-100 text-black"
              : "opacity-0 absolute"
          }`}
        >
          <div className="flex ">
          <h1 className="  text-4xl ml-10 mb-2 font-bold ">{data.title}</h1>
          <div className="flex mx-5 ">
              <button className="  h-10 w-10 mt-1 rounded-lg ">
               <a href={data.Livelink} target="blank"><img
                alt="live link"
                  className="w-10 h-10"
                  src="https://cdn-icons-png.flaticon.com/512/8839/8839121.png"
                /></a> 
              </button>

              <button className="  h-10 w-10 rounded-lg mt-1 ml-5 ">
              <a href={data.Githublink} target="blank"> <img alt="git hub repo link" className="w-8 h-8" src="/images/git-orange.png" /></a> 
              </button>

            </div>
            </div>
          <p className=' text-sm w-[400px] p-5'>{data.about}</p>

          <div className="flex">
            {data.stack.map((stack)=>
                // {console.log(stack)}
                <img
                alt="html icon"
                  className="h-7 w-7 ml-5"
                  src={stack}
                />
            )}
            </div>

            
        </div>
      </div>
      {/* <div>
            <h1 className="m-4 text-2xl font-bold text-orange-600">
            {data.title}
            </h1>
            <p className="m-2 p-2">
            {data.about}{" "}
            </p>

            <div className="flex">
            {data.stack.map((stack)=>
                // {console.log(stack)}
                <img
                alt="html icon"
                  className="h-7 w-7 ml-5"
                  src={stack}
                />
            )}
            </div>

            <div className="flex mt-4">
              <button className="  h-10 w-10 mt-5 rounded-lg m-3 ">
               <a href={data.Livelink} target="blank"><img
                alt="live link"
                  className="w-full h-full"
                  src="https://cdn-icons-png.flaticon.com/512/8839/8839121.png"
                /></a> 
              </button>

              <button className="bg-black  h-10 w-10 rounded-lg m-3 mt-5">
              <a href={data.Githublink} target="blank"> <img alt="git hub repo link" className="w-full h-full" src="/images/git-orange.png" /></a> 
              </button>
            </div>
          </div> */}
    </div>
  );
};

export default ProjectBox;
