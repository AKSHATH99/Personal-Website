import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import LoaderAnimation from "./LoaderAnimation";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState("");
  const [msg, setMsg] = useState("");
  const [mailStatus, setMailStatus] = useState(false);
  const [loader, setLoader] = useState(false);

  const sendEmail = () => {
    setLoader(true);

    const dataToBeSend = {
      from_name: name,
      from_email: email,
      subject: sub,
      message: `You recieved a mail from ${name} with email : ${email}. Subject : ${sub}. Message: ${msg}`,
    };

    emailjs.send(
      "service_acgt364",
      "template_rhx8uz4",
      dataToBeSend,
      "4wfPMYREujwU-Bxjy"
    ).then(
      () => {
        setMailStatus(true);
        setLoader(false);
        setName("");
        setEmail("");
        setSub("");
        setMsg("");
      },
      () => {
        alert("Error sending email. Please try again.");
        setLoader(false);
      }
    );
  };

  const inputClass =
    "w-full rounded-lg px-4 py-2 bg-white dark:bg-zinc-950 text-gray-900 dark:text-white " +
    "border border-gray-300 dark:border-zinc-700 " +
    "focus:outline-none focus:border-violet-400/30 focus:ring-2 focus:ring-violet-400/30 focus:shadow-md transition";

  return (
    <section id="contact" className="relative mt-24">
      <div className="relative border-t border-violet-300/40 dark:border-violet-500/20 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-t-[32px] shadow-[0_-16px_32px_rgba(139,92,246,0.08)]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="px-4 sm:px-6 lg:pl-[190px] pt-14 pb-20 max-w-6xl"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Contact Me
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-10">
            Got a <span className="font-semibold text-violet-500">project</span>{" "}
            idea or need help building your{" "}
            <span className="font-semibold text-violet-500">product</span>?  
            Let’s connect.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-xl p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    className={inputClass}
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className={inputClass}
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <input
                  className={`${inputClass} mb-4`}
                  placeholder="Subject"
                  value={sub}
                  onChange={(e) => setSub(e.target.value)}
                />

                <textarea
                  className={`${inputClass} mb-5 resize-none`}
                  rows={4}
                  placeholder="Brief your project idea"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />

                {mailStatus ? (
                  <p className="text-green-600 dark:text-green-400 font-medium text-center">
                    Recieved your DM. Will reach out to you at  the earliest
                  </p>
                ) : (
                  <button
                    onClick={sendEmail}
                    className="w-full rounded-xl py-2.5 font-medium text-white bg-violet-500 hover:shadow-md hover:border hover:border-violet-400/30 transition"
                  >
                    {loader ? <LoaderAnimation /> : "Send message"}
                  </button>
                )}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="font-medium mb-4 text-gray-700 dark:text-gray-300">
                Find me on
              </p>

              <div className="flex gap-6 items-center mb-4">
                <motion.a whileHover={{ scale: 1.25 }} href="https://www.linkedin.com/in/akshath-p-519939287/" target="_blank">
                  <img src="/images/linkedin.svg" className="h-7 w-7" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.25 }} href="https://github.com/AKSHATH99" target="_blank">
                  <img src="/images/github.svg" className="h-7 w-7" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.25 }} href="https://twitter.com/AkshathP2" target="_blank">
                  <img src="/images/x.png" className="h-7 w-7" />
                </motion.a>
              </div>

              <div className="text-gray-400 dark:text-gray-300">
                Or reach out directly at
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="mailto:akshathpkk@gmail.com"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-violet-500"
              >
                akshathpkk@gmail.com
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
