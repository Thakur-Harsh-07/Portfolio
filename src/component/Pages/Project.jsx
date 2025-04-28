import React from "react";
import {ProjectData} from '../../Data/ProjectData';
import ProjectCard from "../ProjectCard";


const Project = ()=>{
    return(
        <div className="min-h-screen w-full max-w-[1200px] mx-auto px-4 py-16">
            <div className="flex flex-col items-center gap-12">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-400  bg-clip-text border-b-2 border-blue-700 pb-2">
                    My Projects
                </h1>
                <div className="flex flex-col gap-16 w-full max-w-[600px] min-h-[600px]">
                    {ProjectData.map((Project)=>{
                        return(
                            <ProjectCard
                                key={Project.id}
                                name={Project.name}
                                link={Project.link}
                                github={Project.github}
                                logo={Project.logo}
                            />
                        )
                    })}
                </div>
            </div>
            
            
        </div>
    )
}

export default Project