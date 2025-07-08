// Hero.jsx
import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

/**
 * Hero component - Main landing section
 */
const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Social media links data
  const socialLinks = [
    { icon: <FaLinkedin className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10'/>, url: "https://www.linkedin.com/in/bunga-kousalya-900938299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", color: "text-blue-400" },
    { icon: <FaGithub className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10'/>, url: "https://github.com/Bungakousalya", color: "text-gray-200" },
    { icon: <SiLeetcode className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10'/>, url: "https://leetcode.com/B_kousalya/", color: "text-yellow-400" },
  ];

  return (
    <section className='relative w-full min-h-screen mx-auto'>
      {/* Main content container */}
      <div className='absolute inset-0 top-[120px] sm:top-[140px] lg:top-[150px] max-w-7xl mx-auto flex items-start gap-3 sm:gap-5 px-4 sm:px-6'>
        {/* Vertical line decoration - hidden on mobile */}
        <div className='hidden sm:flex flex-col justify-center items-center mt-5'>
          <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 h-32 sm:h-80 bg-gradient-to-b from-[#915eff] to-transparent'/>
        </div>
        
        {/* Main content */}
        <div className='flex-1'>
          {/* Name heading with responsive text size */}
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight' // Larger text on bigger screens
          >
            Hi, I'm <span className='text-[#915eff]'>Kousalya</span>
          </motion.h1>
          
          {/* Animated typing text with responsive size */}
          <div className='mt-2 text-lg sm:text-xl md:text-2xl font-medium text-gray-300'>
            <TypeAnimation
              sequence={[
                'Aspiring Web Developer',
                1500,
                'Problem Solver',
                1500,
                'AI & ML Enthusiast',
                1500,
                'Cloud Computing Explorer',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          
          {/* Description paragraph with responsive text size */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='text-sm sm:text-base md:text-lg mt-4 sm:mt-6 text-gray-200 leading-relaxed max-w-4xl' // Smaller text on mobile
          >
            A dedicated computer science student with a strong passion for building innovative web applications and solving complex technical challenges. Through hands-on projects and continuous learning.
          </motion.p>

          {/* Social links with responsive sizing and animations */}
          <motion.div className="flex gap-4 sm:gap-6 mt-6 sm:mt-8 justify-center sm:justify-start">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color}`}
                initial={{ 
                  opacity: 0,
                  y: 20,
                  ...(!isMobile && { rotateY: 45 })
                }}
                animate={isMobile ? 
                  { 
                    opacity: 1,
                    y: 0
                  } : 
                  { 
                    opacity: 1,
                    y: [0, -15, 0],
                    rotateY: 0,
                    rotateX: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }
                }
                transition={isMobile ?
                  {
                    duration: 0.3,
                    delay: index * 0.1
                  } :
                  {
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    rotateX: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    scale: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    delay: index * 0.2
                  }
                }
                whileHover={isMobile ? 
                  {
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  } :
                  {
                    y: -20,
                    scale: 1.2,
                    transition: { 
                      type: "spring", 
                      stiffness: 400 
                    }
                  }
                }
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Action buttons with responsive sizing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className='flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8'
          >
            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto text-center px-4 sm:px-6 py-2 sm:py-3 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm sm:text-base"
            >
              Download Resume 📄
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-gray-400 text-gray-300 rounded-lg font-semibold hover:bg-gray-700 hover:border-gray-300 transition-all duration-300 text-sm sm:text-base'
            >
              Let's Connect 💬
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator - positioned differently on mobile */}
      <div className='absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-10'>
        <a href="#about">
          <div className='w-[25px] h-[45px] sm:w-[30px] sm:h-[54px] rounded-3xl border-4 border-[#915eff] flex justify-center items-start p-1 sm:p-2'>
            <motion.div
              animate={{
                y: isMobile ? [0, 8, 0] : [0, 12, 0] // Smaller bounce on mobile
              }}
              transition={{
                duration: isMobile ? 1 : 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#915eff]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;