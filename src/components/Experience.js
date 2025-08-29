import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Intern",
    company: "BookMyPooja",
    duration: "Dec 2024 – May 2025",
    description:
      "Contributed to the development of scalable web applications using Next.js and NestJS. Implemented new features, resolved bugs, and optimized system performance. Enhanced UI/UX for better user engagement and collaborated  to deliver reliable, user-focused solutions.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-8 relative">
      <div className="lg:ml-[190px] px-4 sm:px-6 relative">
        {/* Header Section */}
        <motion.div
          className="mb-12 lg:mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text dark:text-transparent  mb-4">
              Experience
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-violet-500 to-violet-400 rounded-full"></div>
          </motion.div>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mt-4  ">
            A look at my professional journey and contributions to innovative projects.
          </p>
        </motion.div>

        {/* Timeline line - starting continuation (top) */}
        <div className="absolute left-10 top-[90px] flex flex-col items-center mt-8">
          <div className="w-[2px] h-16 bg-violet-400"></div>
        </div>

        {/* Experience Cards */}
        <div className="max-w-xl lg:max-w-2xl relative space-y-12 ">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: window.innerWidth >= 768 ? 1.02 : 1,
                translateY: window.innerWidth >= 768 ? -5 : 0,
              }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-xl p-5 sm:p-6 lg:p-7 rounded-2xl shadow-xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
                <div className="space-y-3">
                  {/* Role and Company */}
                  <div className="space-y-1">
                    <motion.h3
                      className="text-lg sm:text-xl font-bold dark:text-white"
                      whileHover={{ x: window.innerWidth >= 768 ? 5 : 0 }}
                    >
                      {exp.role}
                    </motion.h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                      <span className="dark:text-gray-300 text-gray-400 font-medium text-sm sm:text-base">
                        {exp.company}
                      </span>
                      <span className="hidden sm:block w-1.5 h-1.5 bg-white/40 rounded-full"></span>
                      <span className="text-gray-400 text-xs sm:text-sm font-mono bg-white/5 px-2 py-0.5 rounded-full w-fit">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <motion.div
                    className="pt-3 border-t border-white/10"
                    initial={{ opacity: 0.8 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="dark:text-gray-400 text-gray-500 leading-relaxed text-sm sm:text-base">
                      {exp.description}
                    </p>
                  </motion.div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["React", "Tailwind CSS", "MongoDB", "Next.js", "NestJS"].map(
                      (tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full border border-white/10"
                        >
                          {tech}
                        </motion.span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom continuation */}
          <div className="absolute left-0 bottom-[-70px] flex flex-col items-center">
            <div className="w-[2px] h-16 bg-violet-400"></div>
            <span className="mt-2 text-violet-400 font-semibold text-sm">
              Present
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
