import React , {useState} from "react";
import sendMail from '../utils/MailHandler.js'
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { use } from "react";
import LoaderAnimation from "./LoaderAnimation.js"

const Contact = () => {

  const [name  , setName]= useState();
  const [email  , setEmail]= useState();
  const [sub  , setSub]= useState();
  const [msg  , setMsg]= useState();
  const [mailStatus , setMailStatus] = useState(false);
  const [loader , setLoader] = useState(false);

  const sendEmail = () => {
    // e.preventDefault();
      setLoader(true);
      // Hardcoded values for testing
      const dataToBeSend = {
        from_name: name,
        from_email: email,
        subject: sub,
        message: `You recieved a mail from ${name} with email : ${email} . Subject : ${sub}  and message read as follows : ${msg}`
      };
    
      emailjs.send(
        'service_ix0jvam',  // Your EmailJS service ID
        'template_rhx8uz4',  // Your EmailJS template ID
        dataToBeSend,        // Object instead of a string
        '4wfPMYREujwU-Bxjy'  // Your EmailJS user ID
      ) 
      .then(
        (result) => {
          console.log('Success:', result.text);
          setMailStatus(true)
          setLoader(false)
          setMsg("");
          setName("");
          setEmail("")
          setSub("")
        },
        (error) => {
          console.log('Error:', error.text);
          alert('Error sending test email. Please try again.');
        }
      );
    };
  

  return (
    <div id="contact" className="text-white  md:ml-[170px] p-5 pb-10">
      <div className="text-2xl mt-20 font-bold  w-max  ">
        CONTACT ME
      </div>

      <p className="  mt-3 mb-1 text-xl font-poppins">
        Got a <span className="font-bold text-themeViolet">project</span> idea ?
        Need help building your{" "}
        <span className="font-bold text-themeViolet ">product</span> ?
      </p>
      <p className="  text-gray-400">
        Feel free to hit me up by filling this form or <span className="text-themeViolet font-bold"> <a href="mailto:akshathpkk@gmail.com" className=""> mail</a></span> me directly
      </p>

      <div className=" mt-10 md:flex">
       
        <div>
        <div class="border  md:w-[500px] p-5  rounded-lg shadow-xl text-black">
          {/* <p className='text-xl font-roboto text-orange-600 ml-32 font-bold '>Drop A Mail </p> */}
          <input
             className=" text-sm  rounded-md my-4 p-3 py-1 w-full h-10 bg-gray-200 focus:outline-none "
            type="text"
            placeholder="Full Name"
            onChange={(e)=>setName(e.target.value)}
          />
          <br />
          <input
            className="border text-sm border-gray-200 rounded-md my-4 p-3 py-1 w-full h-10 bg-gray-200 focus:outline-none"
            type="email"
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            className="border text-sm border-gray-200 rounded-md my-4 p-3 py-1 w-full h-10 bg-gray-200 focus:outline-none"
            type="text"
            placeholder="Subject"
            onChange={(e)=>setSub(e.target.value)}
          />
          <br />
          <textarea
            className="border text-sm  border-gray-200 rounded-md my-4 px-3 py-2 w-full h-20 bg-gray-200 focus:outline-none"
            type="text"
            placeholder="Biref your project idea or service over here "
            onChange={(e)=>setMsg(e.target.value)}
          />
          {mailStatus? <p className="font-poppins font-bold text-green-300">DM sent . Will be reaching out shortly :)</p>:<button
            onClick={sendEmail}
            type="submit"
            className="text-white bg-themeViolet p-3 w-full rounded-lg hover:bg-[#aa81d1]"
          >
            {" "}
            
           {loader?<LoaderAnimation/>:"Send message"} 
          </button>}
          

          
        </div>
        {/* <p className=" md:hidden  ml-20 font-poppins text-gray-500">Find me in my socials and profiles : </p>
        <div class="  md:hidden flex mt-3 ml-28">
            <motion.a
                href="https://www.linkedin.com/in/akshath-p-519939287/"
                target="blank"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {" "}
                <img
                  alt="linkedin-icon"
                  className="m-4 mx-2 h-12 w-12"
                  src="/images/linkedin.svg"
                />
              </motion.a>
              <motion.a href="https://github.com/AKSHATH99" target="blank" whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}>
                <img
                  alt="git-icon"
                  className="m-4 mx-1 h-10 w-10 mt-5"
                  src="/images/git-orange.png"
                />
              </motion.a>
              <motion.a href="https://twitter.com/AkshathP2" target="blank" whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}>
                <img
                  alt="icon"
                  className="m-4 mx-2 h-8 w-8 mt-6 "
                  src="/images/x-orange.png"
                />
              </motion.a>
            </div> */}
        </div>
        

        <div className="">
          {/* <img src="/images/contact image.png" /> */}
          <p className="md:ml-24 md:mt-0 mt-10 font-poppins">Find me in my socials and profiles : </p>
          <div className="flex items-center justify-center md:ml-32">
            <div class="flex items-center gap-5 mt-3">
            <motion.a 
                href="https://www.linkedin.com/in/akshath-p-519939287/"
                target="blank"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {" "}
                <img
                  alt="linkedin-icon"
                  className=" h-8 w-8"
                  src="/images/linkedin.svg"
                />
              </motion.a>
              <motion.a href="https://twitter.com/AkshathP2" target="blank" whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}>
                <img
                  alt="icon"
                  className=" h-8 w-8  "
                  src="/images/x.png"
                />
              </motion.a>
              <motion.a href="https://peerlist.io/akshath00" target="blank" whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}>
                <img
                  alt="icon"
                  className=" h-12 w-12 "
                  src="/images/peerlist.svg"
                />
              </motion.a>
              <motion.a href="https://github.com/AKSHATH99" target="blank" whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}>
                <img
                  alt="git-icon"
                  className=" h-8 w-8 "
                  src="/images/github.svg"
                />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
