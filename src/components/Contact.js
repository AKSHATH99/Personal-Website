import React , {useState} from "react";
import sendMail from '../utils/MailHandler.js'

const Contact = () => {

  const [name  , setName]= useState();
  const [email  , setEmail]= useState();
  const [sub  , setSub]= useState();
  const [msg  , setMsg]= useState();

   const  MailFunction=async()=>{
    try {
      console.log("SEnding")
      const mailing = await sendMail("guyanonymous250@gmail.com","Testing", "testing");
      console.log("mailing success")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div id="contact" className="">
      <div className="text-3xl mt-10 font-bold  w-max  md:ml-44 ml-20 ">
        CONTACT ME
      </div>
      <p className=" md:ml-44 m-10 mb-1 text-2xl font-poppins">
        Got a <span className="font-bold text-orange-600">project</span> idea ?
        Need help building your{" "}
        <span className="font-bold text-orange-600">product</span> ?
      </p>
      <p className="ml-44 text-gray-400">
        Feel free to hit me up in mail filling this form
      </p>

      <div className=" mt-3 flex">
       

        <div class="border  w-[500px] p-5 md:ml-44 m-6 rounded-lg shadow-xl">
          {/* <p className='text-xl font-roboto text-orange-600 ml-32 font-bold '>Drop A Mail </p> */}
          <input
            className="border text-sm border-gray-200 rounded-md my-4 p-3 py-1 w-full h-10 bg-gray-200"
            type="text"
            placeholder="Full Name"
          />
          <br />
          <input
            className="border text-sm border-gray-200 rounded-md my-4 p-3 py-1 w-full h-10 bg-gray-200"
            type="email"
            placeholder="Email"
          />
          <input
            className="border text-sm border-gray-200 rounded-md my-4 p-3 py-1 w-full h-10 bg-gray-200"
            type="text"
            placeholder="Subject"
          />
          <br />
          <textarea
            className="border text-sm  border-gray-200 rounded-md my-4 px-3 py-2 w-full h-20 bg-gray-200"
            type="text"
            placeholder="Biref your project idea or service over here "
          />
          <button
            onClick={MailFunction}
            type="submit"
            className="text-white bg-orange-600 p-3 w-full rounded-lg hover:bg-orange-500"
          >
            {" "}
            Send message{" "}
          </button>
        </div>

        <div className="md:block hidden 800:hidden xl:block">
          <img src="/images/contact image.png" />
          <p className="ml-32 font-poppins">Find me in my socials and profiles : </p>
          <div className="flex ml-32">
            <div class="flex items-center mt-3">
              <a
                href="https://www.linkedin.com/in/akshath-p-519939287/"
                target="_blank"
              >
                <img class="w-12 h-12" src="/images/linkedin-orange.png" />
              </a>
            </div>
            <div class="flex items-center mt-3 ml-5">
              <a href="https://twitter.com/AkshathP2" target="_blank">
                <img class="w-8 h-8 ml-2" src="/images/x-orange.png" />
              </a>
            </div>
            <div class="flex items-center mt-3 ml-5">
              <a href="https://github.com/AKSHATH99" target="_blank">
                <img class="w-10 h-10" src="/images/git-orange.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
