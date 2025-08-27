import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState("");
  const [msg, setMsg] = useState("");
  const [mailStatus, setMailStatus] = useState(false);
  const [loader, setLoader] = useState(false);

  const sendEmail = () => {
    setLoader(true);
    setTimeout(() => {
      setMailStatus(true);
      setLoader(false);
      setMsg("");
      setName("");
      setEmail("");
      setSub("");
    }, 2000);
  };

  return (
    <div
      id="contact"
      className="text-white md:pl-[170px] p-5 pb-8 mt-28 rounded-t-[50px] border-t-4 border-violet-400/30 shadow-2xl relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, #0a0a0a, #120018, #1a0b24, #2d033b)",
        boxShadow:
          "0 -20px 50px rgba(139, 92, 246, 0.12), 0 -10px 25px rgba(139, 92, 246, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
      }}
    >
      {/* Top glow accent */}
      <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-violet-400 to-transparent opacity-60"></div>
      <div className="text-2xl mt-12 font-bold w-max relative">
        CONTACT ME
        <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-violet-400 to-transparent"></div>
      </div>

      <p className="mt-10 mb-1 text-xl font-poppins">
        Got a <span className="font-bold text-violet-400">project</span> idea ? Need help building your{" "}
        <span className="font-bold text-violet-400">product</span> ?
      </p>
      <p className="text-gray-400 mb-6">
        Feel free to hit me up by filling this form or{" "}
        <span className="text-violet-400 font-bold">
          <a href="mailto:akshathpkk@gmail.com">mail</a>
        </span>{" "}
        me directly
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Form */}
        <div className="flex-1">
          <div className="border border-violet-400/20 p-6 rounded-lg shadow-xl bg-gray-900/50 backdrop-blur-sm relative overflow-hidden">
            {/* Form inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-400/5 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              {/* First Row - Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  className="text-sm rounded-md p-3 h-10 
                             bg-white/10 backdrop-blur-md 
                             border border-white/10 
                             text-white placeholder-gray-400 
                             focus:outline-none focus:ring-2 focus:ring-violet-400 
                             shadow-inner"
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="text-sm rounded-md p-3 h-10 
                             bg-white/10 backdrop-blur-md 
                             border border-white/10 
                             text-white placeholder-gray-400 
                             focus:outline-none focus:ring-2 focus:ring-violet-400 
                             shadow-inner"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Second Row - Subject */}
              <input
                className="text-sm rounded-md p-3 h-10 w-full 
                           bg-white/10 backdrop-blur-md 
                           border border-white/10 
                           text-white placeholder-gray-400 
                           focus:outline-none focus:ring-2 focus:ring-violet-400 
                           mb-4 shadow-inner"
                type="text"
                placeholder="Subject"
                value={sub}
                onChange={(e) => setSub(e.target.value)}
              />

              {/* Third Row - Message */}
              <textarea
                className="text-sm rounded-md p-3 w-full h-20 
                           bg-white/10 backdrop-blur-md 
                           border border-white/10 
                           text-white placeholder-gray-400 
                           focus:outline-none focus:ring-2 focus:ring-violet-400 
                           mb-4 resize-none shadow-inner"
                placeholder="Brief your project idea or service over here"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />

              {mailStatus ? (
                <p className="font-bold text-green-400 text-center py-3">
                  DM sent. Will be reaching out shortly :)
                </p>
              ) : (
                <button
                  onClick={sendEmail}
                  type="submit"
                  className="w-full p-3 rounded-lg 
                             bg-white/10 backdrop-blur-md 
                             border border-white/10 
                             text-white font-medium
                             hover:bg-violet-400/20 
                             hover:border-violet-400 
                             transition-colors duration-300 
                             shadow-md"
                >
                  {loader ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span className="ml-2">Sending...</span>
                    </div>
                  ) : (
                    "Send message"
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="lg:w-80 flex flex-col justify-center">
          <p className="font-medium mb-4">Find me in my socials and profiles :</p>
          <div className="flex items-center justify-center lg:justify-start">
            <div className="flex items-center gap-4">
              <motion.a
                href="https://www.linkedin.com/in/akshath-p-519939287/"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://twitter.com/AkshathP2"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="p-2 rounded-full bg-black hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://peerlist.io/akshath00"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="p-2 rounded-full bg-violet-400 hover:bg-violet-300 transition-colors"
              >
                <img 
                  src="/images/peerlist.svg" 
                  alt="Peerlist" 
                  className="w-6 h-6" 
                />
              </motion.a>

              <motion.a
                href="https://github.com/AKSHATH99"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
