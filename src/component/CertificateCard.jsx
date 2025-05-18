import React from 'react'

const CertificateCard = ({logo}) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 
                    hover:bg-gray-700/50 transition-all duration-300 
                    transform hover:-translate-y-2 border border-blue-700 
                    shadow-lg group w-full h-full">
        <div className="relative w-full h-full overflow-hidden rounded-lg">
            <img 
                src={logo} 
                alt="Certificate"
                className="w-full h-full object-cover"
            />
        </div>
    </div>
  )
}

export default CertificateCard