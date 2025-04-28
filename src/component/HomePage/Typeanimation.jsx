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
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={80}
                deleteSpeed={80}
                delaySpeed={1000}
            />
        </div>
    );
};

export default TypeAnimation;