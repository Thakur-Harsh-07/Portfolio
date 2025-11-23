import React, { use, useEffect } from 'react'
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt, FaStar} from "react-icons/fa";
import { desc } from 'framer-motion/client';
import { useState } from 'react';



const ProjectCard = ({name, link, github, logos, desc, tech}) => {
    const[Index, setIndex] = useState(0);
    
    useEffect(() => {   
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % logos.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [logos.length]);
   

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 
                    hover:bg-gray-700/50 transition-all duration-300 
                    transform hover:-translate-y-2 border border-blue-700 
                    shadow-lg group min-h-[400px] w-full">
        {/* Project Name */}
        <div className="mb-6">
            <h2 className="text-3xl font-bold text-blue-500 group-hover:text-blue-400 transition-colors border-b ">
                {name}
            </h2>
        </div>
        {/* desc */}
         <div className="mb-4 px-2">
            <p className="text-sm text-white mt-2 line-clamp-2 font-bold">
                {desc}
            </p>
        </div>

        {/* Project Image */}
        <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
           {
            logos.map((logo, index) => (
                <img 
                    key={index}
                    src={logo} 
                    alt={`${name} Screenshot ${index + 1}`}
                    className="w-full h-full object-cover 
                    absolute top-0 left-0 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500"
                    style={{ opacity: index === Index ? 1 : 0 }}
                  
                   
                />
                
            ))
           }
           
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-all duration-500"></div>
            
            
        </div>
        {/* tech */}
        
        <div className='flex gap-3 items-center justify-center'>
            <h3 className="text-sm font-semibold text-white mb-1 flex items-center gap-1 hover:font-bold">
               <FaStar className="text-yellow-500 text-xs" />
                   Technologies
             </h3> 
            <div className="flex flex-wrap gap-1">
              {tech.map((tech, index) => (
                <span
                    key={index}
                    className="px-2 py-1 text-xs 
                    text-white rounded-full border border-blue-700 bg-blue-500 hover:bg-blue-900 transition-all duration-200">
                    {tech}
                </span>
                ))}
            </div>
        </div>
        
       
       

        {/* Links */}
        <div className="flex justify-center gap-8 mt-6">
            <a 
                href={link}
                target="_blank"
               
                className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors text-lg"
            >
                <FaExternalLinkAlt className="text-xl text-white" />
                <span className='text-white'>Live Demo</span>
            </a>
            <a 
                href={github}
                target="_blank"
                
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-lg"
            >
                <SiGithub className="text-xl" />
                <span>Source Code</span>
            </a>
        </div>
        
    </div>
  )
}

export default ProjectCard