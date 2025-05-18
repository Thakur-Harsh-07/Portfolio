import React from 'react'
import { CertificateData } from '../../Data/CerificateData'
import CertificateCard from '../CertificateCard'
import { motion } from 'framer-motion'

const Certificates = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.4,
        type: "spring",
        stiffness: 60,
        damping: 12
      }}
      className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-8xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-blue-300 border-b-2 border-blue-700 pb-2 inline-block">
          Certificates
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {CertificateData.map((certificate) => {
            return (
              <CertificateCard
                key={certificate.id}
                logo={certificate.logo}
              />
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default Certificates