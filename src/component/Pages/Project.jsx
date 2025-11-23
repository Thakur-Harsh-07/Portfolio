import React from "react";
import {ProjectData} from '../../Data/ProjectData';
import ProjectCard from "../ProjectCard";
import { motion } from "framer-motion";

const Project = ()=>{
    return(
        <motion.div className="min-h-screen w-full max-w-[1200px] mx-auto px-4 py-16"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
            duration: 0.8,
            delay: 0.4,
            type: "spring",
            stiffness: 60,
            damping: 12
            }}>
            <div className="flex flex-col items-center gap-12">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-400  bg-clip-text border-b-2 border-blue-700 pb-2">
                    My Projects
                </h1>
                
                
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                    {ProjectData.map((Project)=>{
                        return(
                            <ProjectCard
                                key={Project.id}
                                name={Project.name}
                                link={Project.link}
                                github={Project.github}
                                logos={Project.logo}
                                desc= {Project.desc}
                                tech = {Project.tech}
                            />
                        )
                    })}
                </div>
            </div>
            
            
        </motion.div>
    )
}

export default Project