import React, { useState } from "react";
import { CgMail } from "react-icons/cg";

import { toast } from "react-hot-toast";
import{motion} from "framer-motion"

const Contact = ()=>{
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
     
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://portfolio-jhx3.onrender.com/api/v1/contactUs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                toast.error(data.message || 'Failed to send message');
            }
        } catch (error) {
            toast.error(error.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return(
        <motion.div className="mt-[130px] flex justify-center items-start px-4"
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
            duration: 0.8,
            delay: 0.4,
            type: "spring",
            stiffness: 60,
            damping: 12
            }}>
            <div className="flex flex-col md:flex-row gap-8 max-w-[1200px] w-full mb-12">
                {/* Contact Form */}
                <div className="flex-1 bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-blue-600 hover:shadow-blue-600/20 transition-colors hover:shadow-xl  font-bold">
                    <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-gray-300 text-lg">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="bg-gray-700/30 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-gray-300 text-lg">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="bg-gray-700/30 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-gray-300 text-lg">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="bg-gray-700/30 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                placeholder="Enter your message"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`bg-blue-500 text-white py-3 px-6 rounded-lg transition-colors font-bold text-lg mt-4 ${
                                isSubmitting 
                                    ? 'opacity-70 cursor-not-allowed' 
                                    : 'hover:bg-blue-600'
                            }`}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>

                {/* Social Links */}
                <div className="md:w-[400px] bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-blue-600 hover:shadow-blue-600/20 hover:shadow-xl transition-colors h-fit">
                    <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">
                        Contact Me
                    </h1>
                    <div className="flex flex-col gap-6 font-bold">
                        <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                            <p className="text-gray-300 text-lg">Through LinkedIn</p>
                            <a href="https://www.linkedin.com/in/harsh-vardhan-singh-chauhan/" 
                               className="hover:scale-110 transition-transform ml-auto">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                                     alt="LinkedIn" 
                                     className="h-8 w-8" />
                            </a>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                            <p className="text-gray-300 text-lg">Through Email</p>
                            <a href="mailto:harshchauhan7081@gmail.com"
                               className="text-2xl text-blue-500 hover:text-blue-400 hover:scale-110 transition-all ml-auto">
                                <CgMail className="h-10 w-10 text-white"/>
                            </a>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                            <p className="text-gray-300 text-lg">Through Github</p>
                            <a href="https://github.com/Thakur-Harsh-07"
                               className="hover:scale-110 transition-transform ml-auto">
                                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.svg" 
                                     alt="GitHub" 
                                     className="h-8 w-8" />
                            </a>
                        </div>
                    </div>
                </div>
            
            </div>
          
        </motion.div>
    )
}

export default Contact