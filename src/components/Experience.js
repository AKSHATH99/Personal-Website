import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Intern",
    company: "BookMyPooja",
    duration: "Dec 2024 – May 2025",
    description:
      "Worked on building scalable web applications, integrating third-party APIs, and implementing end-to-end features with React, Node.js, and MongoDB. Improved system performance and collaborated closely with the product team to deliver user-focused solutions.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-8">
      <div className="lg:ml-[190px] px-4 sm:px-6">
        {/* Header Section */}
        <motion.div 
          className="mb-12 lg:mb-16"
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
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4 lg:mb-6">
              Experience
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-violet-500 to-violet-400 rounded-full mb-4 lg:mb-6"></div>
          </motion.div>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
            A look at my professional journey and contributions to innovative projects.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-full lg:max-w-3xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 0.7,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: window.innerWidth >= 768 ? 1.02 : 1,
                translateY: window.innerWidth >= 768 ? -5 : 0
              }}
              className="relative group"
            >
              {/* Background glow effect - Hidden on mobile for performance */}
              <div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-2xl lg:rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 hidden md:block"></div>
              
              <div className="relative bg-white/5 backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
                {/* Timeline indicator - Adjusted for mobile */}
                <div className="absolute -left-2 lg:-left-4 top-6 lg:top-8 w-4 h-4 lg:w-8 lg:h-8 bg-gradient-to-br from-white/30 to-white/10 rounded-full border-2 lg:border-4 border-gray-900 shadow-lg"></div>
                
                {/* Content */}
                <div className="space-y-3 lg:space-y-4">
                  {/* Role and Company */}
                  <div className="space-y-2">
                    <motion.h3 
                      className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300"
                      whileHover={{ x: window.innerWidth >= 768 ? 5 : 0 }}
                    >
                      {exp.role}
                    </motion.h3>
                    <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
                      <span className="text-gray-300 font-medium text-base sm:text-lg">
                        {exp.company}
                      </span>
                      <div className="hidden lg:block w-2 h-2 bg-white/40 rounded-full"></div>
                      <span className="text-gray-400 text-xs sm:text-sm font-mono bg-white/5 px-2 py-1 lg:px-3 lg:py-1 rounded-full w-fit">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <motion.div
                    className="pt-3 lg:pt-4 border-t border-white/10"
                    initial={{ opacity: 0.8 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-gray-400 leading-relaxed lg:leading-loose text-sm sm:text-base">
                      {exp.description}
                    </p>
                  </motion.div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 pt-3 lg:pt-4">
                    {['React', 'Node.js', 'MongoDB'].map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full border border-white/10"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Corner accent - Hidden on mobile */}
                <div className="absolute top-4 right-4 lg:top-6 lg:right-6 w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;