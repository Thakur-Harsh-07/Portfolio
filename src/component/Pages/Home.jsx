import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileLogo from '../../Asset/Image/profile.jpg'
import TypeAnimation from "../HomePage/Typeanimation";
import HighlightedText from "../HomePage/HighLightedText";
import Resume from "./Resume";
import Profile from '../../Asset/Image/Name.jpg'

import { SiLeetcode } from "react-icons/si";
import { IoMdContact } from "react-icons/io";
const Home = ()=>{

     const navigate = useNavigate();
     const handleOnClick = ()=>{
        navigate('/contact');
     }

    return(
        <div className="flex flex-col gap-4 min-h-screen w-full max-w-[1200px] mx-auto px-4 py-8">
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-12">
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-200 mb-4">Hi There!</h1>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">
                        I'M <HighlightedText text="Harsh Vardhan Singh Chauhan"/>
                    </h1>
                    <div className="mt-8">
                        <TypeAnimation/>
                    </div>
                </div>

                {/* Image */}
                <div className="flex-1 flex justify-center relative mt-12">
                    <div className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-xl"></div>
                    <img 
                        src={ProfileLogo}
                        alt="Profile"
                        className="relative rounded-full w-80 h-80 object-cover shadow-xl hover:scale-110 transition-transform duration-300"
                    />
                </div>
                
            </div>
            <div className="flex gap-8">
                <div className="flex items-center gap-3">
                <button onClick={handleOnClick}
                className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors duration-300 flex items-center gap-2">
                    <IoMdContact />
                    Contact Me
                </button>
                </div>
                 
                
            <Resume/>
            </div>
            
            
            {/* Section 2 */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-20 py-12 mt-[100px]">
                {/* Left */}
                <div className="flex-1 bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-blue-600 hover:shadow-blue-600/20 hover:shadow-xl transition-colors font-bold">
                    <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-left">Let Me <HighlightedText text="Introduce"/> Myself</h1>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed hover:text-gray-200 transition-colors text-left">
                        I fell in love with programming and I am a quick learner. I am a passionate developer and I am always looking for new challenges.
                    </p>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed hover:text-gray-200 transition-colors text-left">
                        A full stack dveloper with experties in <HighlightedText text={"MERN Stack."}/>
                    </p>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed hover:text-gray-200 transition-colors text-left">
                        Fluent in <HighlightedText text={"React, Node.js, Express.js"}/> and <HighlightedText text={"MongoDB."}/>

                    </p>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed hover:text-gray-200 transition-colors text-left">
                        I have a strong foundation in <HighlightedText text={"Data Structures and Algorithms"}/> using <HighlightedText text={"JAVA."}/>
                    </p>
                    
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed hover:text-gray-200 transition-colors text-left">
                        My field of interest is building dynamic,responsive and scalable <HighlightedText text={"Web Applications"}/> and exploring new technologies.
                    </p>
                </div>
                {/* Right */}
                <div className="relative">
                    <div className="absolute w-60 h-60 bg-blue-500/20 rounded-full blur-xl"></div>
                    <img 
                        src={Profile}
                        alt="Profile"
                        className="relative rounded-full w-60 h-60 object-cover shadow-xl hover:scale-110 transition-transform duration-300"
                    />
                </div>
            </div>
            {/* Section 3 */}
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-left border-b-2 border-blue-700 pb-2">Find Me On</h1>
                <div className="flex gap-10">
                <a href="https://github.com/Thakur-Harsh-07">
                
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.svg" alt="GitHub" className="h-10 w-10" />



            
                </a>
                <a href="https://www.linkedin.com/in/harsh-vardhan-singh-chauhan/">
                    <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="h-10 w-10"  />
                </a>
                <a href="https://leetcode.com/u/HarshVardhanSinghChauhan/">
                <SiLeetcode className="h-10 w-10 text-white" />
                </a>
                </div>
                
            </div>

            {/* Section 4 */}
           
           
           
           
        </div>
    )
}
export default Home