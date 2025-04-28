import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypeAnimation = () => {
    return (
        <div className="lg:text-5xl sm:text-2xl text-blue-500 font-bold">
            <Typewriter
                words={[
                    'Frontend Developer',
                    'Backend Developer',
                    'MERN Stack Developer',
                    'Web Developer',
                    'React Developer'
                ]}
                loop={0}               // 0 = infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </div>
    );
};

export default TypeAnimation;
