import React from 'react';

const Card = ({ name, logo }) => {
    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 
                    hover:bg-gray-700/50 transition-all duration-300 
                    transform hover:-translate-y-1 border border-gray-700 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-400
                    shadow-lg group w-[200px] h-[250px] flex flex-col items-center justify-between">
            {/* Skill Logo */}
            <div className="w-20 h-20 flex items-center justify-center mb-4 mt-4">
                <img 
                    src={logo} 
                    alt={`${name} logo`} 
                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            {/* Skill Name */}
            <h3 className="text-xl font-semibold text-yellow-500 group-hover:text-yellow-400 text-center mb-8">
                {name}
            </h3>

           
        </div>
    );
};

export default Card; 