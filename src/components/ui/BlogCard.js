import React from "react";
import { motion } from "framer-motion";

const BlogCard = ({ title, description, coverImage, blogUrl }) => {
  return (
    <motion.a
      href={blogUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-sm rounded-2xl overflow-hidden shadow-2xl 
                 bg-white/10 backdrop-blur-xl border border-white/20
                 hover:bg-white/15 hover:border-white/30 hover:shadow-3xl
                 transition-all duration-500 ease-out group"
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        rotateY: 5,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden">
        <motion.img
          src={coverImage}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 
                     group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Floating Badge */}
        <motion.div 
          className="absolute top-4 right-4 bg-violet-500/80 backdrop-blur-sm 
                     text-white text-xs px-3 py-1 rounded-full border border-white/20
                     opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          Read More
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-6 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-600/5 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
        
        <div className="relative z-10">
          <motion.h2 
            className="text-xl font-bold mb-3 text-white group-hover:text-violet-100 
                       transition-colors duration-300 line-clamp-2"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 
                       transition-colors duration-300 line-clamp-3"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            {description}
          </motion.p>

          {/* Interactive Elements */}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Blog Post
              </span>
            </div>
            
            <motion.div
              className="flex items-center space-x-1 text-violet-400 group-hover:text-violet-300"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-xs">Read</span>
              <svg 
                className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent 
                   group-hover:translate-x-full transition-transform duration-1000 ease-out"
        style={{ transform: 'skewX(-20deg)' }}
      />
    </motion.a>
  );
};

export default BlogCard;