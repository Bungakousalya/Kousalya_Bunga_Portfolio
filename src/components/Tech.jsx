// Tech.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '../hoc/SectionWrapper'
import { technologies } from '../constants'

/**
 * Tech component - Displays technology skills with interactive cards
 */
const Tech = () => {
  const [selectedTech, setSelectedTech] = useState(null)

  return (
    <div className="relative">
      {/* Animated background bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/10"
            style={{
              width: `${Math.random() * 100 + 50}px`, // Random but smaller sizes
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {selectedTech !== null ? (
          // Selected technology view
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-4 sm:p-6 backdrop-blur-sm" // Smaller on mobile
            >
              <motion.img
                src={technologies[selectedTech].icon}
                alt={technologies[selectedTech].name}
                className="w-24 h-24 sm:w-32 sm:h-32 object-contain" // Smaller on mobile
                whileHover={{ scale: 1.1 }}
              />
              <motion.h3 
                className="text-xl sm:text-2xl font-bold text-white mt-4 sm:mt-6" // Smaller text on mobile
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {technologies[selectedTech].name}
              </motion.h3>
            </motion.div>
            <motion.button
              onClick={() => setSelectedTech(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 sm:mt-8 bg-gradient-to-r from-purple-600 to-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-xl text-white font-bold shadow-lg text-sm sm:text-base" // Smaller on mobile
            >
              View All Technologies
            </motion.button>
          </div>
        ) : (
          // Grid view of all technologies
          <motion.div 
            className="flex flex-wrap justify-center gap-4 sm:gap-8 p-2 sm:p-4" // Smaller gap and padding on mobile
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedTech(index)}
                className="w-20 h-20 sm:w-28 sm:h-28 cursor-pointer" // Smaller cards on mobile
              >
                <motion.div
                  className="w-full h-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                  whileHover={{ 
                    boxShadow: '0 0 20px rgba(159, 122, 234, 0.5)',
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    rotate: {
                      repeat: Infinity,
                      duration: 5,
                      ease: 'linear'
                    }
                  }}
                >
                  <motion.img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain" // Smaller icons on mobile
                    animate={{
                      y: [0, 10, -10, 0],
                    }}
                    transition={{
                      y: {
                        repeat: Infinity,
                        duration: 3,
                        ease: 'easeInOut'
                      }
                    }}
                  />
                </motion.div>
                <motion.div
                  className="text-center mt-1 sm:mt-2 text-white text-xs sm:text-sm" // Smaller text on mobile
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {tech.name}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, "tech")