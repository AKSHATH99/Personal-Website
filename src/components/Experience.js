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
      <div className="ml-[190px] px-6">
        {/* Header Section */}
        <motion.div 
          className="mb-16"
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
            <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-violet-400 rounded-full mb-6"></div>
          </motion.div>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A look at my professional journey and contributions to innovative projects.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-3xl">
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
                scale: 1.02,
                translateY: -5
              }}
              className="relative group"
            >
              {/* Background glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
                {/* Timeline indicator */}
                <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-br from-white/30 to-white/10 rounded-full border-4 border-gray-900 shadow-lg"></div>
                
                {/* Content */}
                <div className="space-y-4">
                  {/* Role and Company */}
                  <div className="space-y-2">
                    <motion.h3 
                      className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {exp.role}
                    </motion.h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="text-gray-300 font-medium text-lg">
                        {exp.company}
                      </span>
                      <div className="hidden sm:block w-2 h-2 bg-white/40 rounded-full"></div>
                      <span className="text-gray-400 text-sm font-mono bg-white/5 px-3 py-1 rounded-full">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <motion.div
                    className="pt-4 border-t border-white/10"
                    initial={{ opacity: 0.8 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-gray-400 leading-loose text-base">
                      {exp.description}
                    </p>
                  </motion.div>

                  {/* Decorative elements */}
                  <div className="flex gap-2 pt-4">
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

                {/* Corner accent */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Experience;