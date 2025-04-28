import React from "react";
import { SiLeetcode } from "react-icons/si";
const Footer = ()=>{
    return(
        <div className="text-white py-6 px-8 ml-0  border-t border-white bg-gray-800/30 backdrop-blur-sm mb-[-100px] mt-8 w-[100%] ">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 ml-0">
                <div className="font-medium text-gray-300 hover:text-white transition-colors text-center md:text-left">
                    Design and Developed By Harsh Vardhan Singh Chauhan
                </div>
                <div className="font-medium text-gray-300 hover:text-white transition-colors">
                    Copyright © 2025 HS
                </div>
                <div className="flex gap-6">
                    <a 
                        href="https://github.com/Thakur-Harsh-07"
                        className="hover:opacity-80 transition-opacity"
                        
                        rel="noopener noreferrer"
                    >
                        <img 
                            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.svg" 
                            alt="GitHub" 
                            className="h-6 w-6 hover:scale-110 transition-transform" 
                        />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/harsh-vardhan-singh-chauhan/"
                        className="hover:opacity-80 transition-opacity"
                        
                        rel="noopener noreferrer"
                    >
                        <img  
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                            alt="LinkedIn" 
                            className="h-6 w-6 hover:scale-110 transition-transform"
                        />
                    </a>
                    <a href="https://leetcode.com/u/HarshVardhanSinghChauhan/">
                        <SiLeetcode className="h-6 w-6 hover:scale-110 transition-transform text-white" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
