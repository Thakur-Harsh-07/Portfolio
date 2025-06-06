import React from "react";
import { IoMdDownload } from "react-icons/io";

const Resume = ()=>{
    const handleDownload=()=>{
        const link = document.createElement('a');
        // https://drive.google.com/file/d/1yd6Sz2S0bGItqC46IW6wHXey62imWZUh/view?usp=sharing
        link.href = 'https://drive.google.com/uc?export=download&id=1yd6Sz2S0bGItqC46IW6wHXey62imWZUh';
        link.setAttribute('download', 'Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return(
        <div className="text-white">
            {/* Download Section */}
           <button 
                className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors duration-300 flex items-center gap-2"
                onClick={handleDownload}
                >
                <div className="flex gap-2 items-center">
                    <IoMdDownload />
                    Download Resume
                </div>
            </button>
        </div>

           
           
       
    )
}

export default Resume