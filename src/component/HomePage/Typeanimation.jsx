import React from 'react';
import Typewriter from 'typewriter-effect';

const TypeAnimation = () => {
    return (
        <div className="lg:text-5xl sm:text-2xl text-blue-500 font-bold">
            <Typewriter
                options={{
                    strings: [
                        'Frontend Developer',
                        'Backend Developer',
                        'MERN Stack Developer',
                        'Web Developer',
                        'React Developer'
                        
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 50
                }}
            />
        </div>
    );
};

export default TypeAnimation;