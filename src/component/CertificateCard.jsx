import React from 'react'
import { useState } from 'react';
const CertificateCard = ({logo}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div 
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 
                    hover:bg-gray-700/50 transition-all duration-300 
                    transform hover:-translate-y-2 border border-blue-500 hover:border-blue-600 hover:shadow-blue-700
                    shadow-lg group w-full h-full cursor-pointer"
        onClick={openModal}
      >
          <div className="relative w-full h-full overflow-hidden rounded-md">
              <img 
                  src={logo} 
                  alt="Certificate"
                  className="w-full h-full object-cover"
              />
          </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 cursor-pointer"
        onClick={closeModal}>
          <div className="rounded-lg relative">
            
            <div className="text-center">
              <img 
                src={logo} 
                alt="Certificate"
                className=" max-w-[90vw] h-auto max-h-[90vh] object-cover rounded-md mb-4"
              />
             
             
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CertificateCard