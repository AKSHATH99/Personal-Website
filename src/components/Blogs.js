import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BlogCard from "./ui/BlogCard";

const Blogs = () => {
    const headerRef = useRef(null);
    const blogsRef = useRef(null);
    
    const isHeaderInView = useInView(headerRef, { once: true, threshold: 0.3 });
    const isBlogsInView = useInView(blogsRef, { once: true, threshold: 0.1 });
    
    // Blog data array
    const blogs = [
        {
            id: 1,
            title: "Dockerising my Reactjs app",
            description: "In this blog i have tried to dockerise a project i have built few months back",
            coverImage: "/images/blog-headers/images.jpeg",
            blogUrl: "https://www.notion.so/Dockerising-my-Reactjs-app-2179d1dc940a807fbf1be103f50e90cc"
        },
       
    ];
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    
    return (
        <div id="blogs" className="md:ml-[190px] text-gray-900 dark:text-white mt-10 pt-10">
            {/* Header Section */}
            <motion.div
                ref={headerRef}
                initial={{ opacity: 0, y: -30 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="ml-5"
            >
                <h1 className="text-gray-900 dark:text-white font md:text-2xl text-3xl font-bold mb-2">
                    Blogs I've Written.
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mb-4"></div>
                <p className="mt-5 text-wrap md:w-max w-3/4 text-sm text-gray-600 dark:text-gray-300">
                    Here are some of my latest thoughts and technical insights. I write about 
                    development, best practices, and interesting projects I've worked on.
                </p>
            </motion.div>
            
            {/* Blog Cards Grid */}
            <motion.div 
                ref={blogsRef}
                className="mt-8 ml-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={isBlogsInView ? "visible" : "hidden"}
            >
                {blogs.map((blog) => (
                    <motion.div key={blog.id} variants={itemVariants}>
                        <BlogCard
                            title={blog.title}
                            description={blog.description}
                            coverImage={blog.coverImage}
                            blogUrl={blog.blogUrl}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Blogs;