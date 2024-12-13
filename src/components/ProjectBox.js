import React from 'react'

const ProjectBox = ({data}) => {
    console.log(data.LiveLink)
  return (
    <div className=" border-4 border-white md:w-1/2 800:w-3/4  md:h-max xl:h-max  bg-black shadow-xl    m-4  md:text-justify md:flex ">
          <img
            className="md:h-auto    xl:w-1/2  md:w-3/5 "
            src={data.placeholderImage}
          />
          <div>
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
          </div>
        </div>
  )
}

export default ProjectBox
