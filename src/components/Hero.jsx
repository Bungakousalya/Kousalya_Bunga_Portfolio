// import React from 'react';
// import { TypeAnimation } from 'react-type-animation';
// import { motion } from 'framer-motion';
// import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
// import { SiLeetcode } from 'react-icons/si';

// const Hero = () => {
//   const socialLinks = [
//     { icon: <FaLinkedin className='w-12 h-12'/>, url: "https://linkedin.com/in/yourprofile", color: "text-blue-400" },
//     { icon: <FaGithub className='w-12 h-12'/>, url: "https://github.com/yourusername", color: "text-gray-200" },
//     { icon: <SiLeetcode className='w-12 h-12'/>, url: "https://leetcode.com/yourprofile", color: "text-yellow-400" },
//     { icon: <FaCode className='w-12 h-12'/>, url: "https://yourportfolio.com", color: "text-purple-400" },
//   ];

//   return (
//     <section className='relative w-full h-screen mx-auto'>
//       <div className='absolute  inset-0 top-[150px] max-w-7xl mx-auto flex items-start gap-5 px-6'>
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
//           <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915eff] to-transparent'/>
//         </div>
//         <div>
//           <motion.h1
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className='text-6xl font-bold text-white'
//           >
//             Hi, I'm <span className='text-[#915eff]'>Kousalya</span>
//           </motion.h1>
//           <div className='mt-2 text-xl font-medium text-gray-300'>
//             <TypeAnimation
//               sequence={[
//                 'Aspiring Web Developer',
//                 1500,
//                 'Problem Solver',
//                 1500,
//                 'AI & ML Enthusiast',
//                 1500,
//                 'Cloud Computing Explorer',
//                 1500,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//             />
//           </div>
//           <motion.h1
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className='text-lg md:text-xl mt-8 text-gray-200 leading-relaxed max-w-4xl'
//           >
//             A dedicated computer science student with a strong passion for building innovative web applications and solving complex technical challenges. Through hands-on projects and continuous learning.
//           </motion.h1>

//           <motion.div className="flex gap-8 mt-12">
//             {socialLinks.map((link, index) => (
//               <motion.a
//                 key={index}
//                 href={link.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`${link.color} text-4xl`}
//                 style={{
//                   transformStyle: 'preserve-3d',
//                 }}
//                 initial={{ 
//                   opacity: 0,
//                   y: 20,
//                   rotateY: 45
//                 }}
//                 animate={{ 
//                   opacity: 1,
//                   y: [0, -15, 0],
//                   rotateY: 0,
//                   rotateX: [0, 5, -5, 0],
//                   scale: [1, 1.05, 1]
//                 }}
//                 transition={{
//                   y: {
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                   },
//                   rotateX: {
//                     duration: 4,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                   },
//                   scale: {
//                     duration: 2.5,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                   },
//                   delay: index * 0.2
//                 }}
//                 whileHover={{
//                   y: -20,
//                   scale: 1.2,
//                   transition: { 
//                     type: "spring", 
//                     stiffness: 400 
//                   }
//                 }}
//               >
//                 {link.icon}
//               </motion.a>
//             ))}
//           </motion.div>

//           {/* Action Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 1.5 }}
//             className='flex flex-col sm:flex-row gap-4 mt-12'
//           >
//             <motion.a
//   href="/resume.pdf"  // Path to your resume file in public folder
  
//   whileHover={{ scale: 1.05 }}
//   whileTap={{ scale: 0.95 }}
//   className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
// >
//   Download Resume 📄
// </motion.a>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className='px-8 py-3 bg-transparent border-2 border-gray-400 text-gray-300 rounded-lg font-semibold hover:bg-gray-700 hover:border-gray-300 transition-all duration-300'
//             >
//               Let's Connect 💬
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
      
//       {/* Scroll Down Button - Now Fixed at Bottom */}
//       <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10'>
//         <a href="#about">
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#915eff] flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0]
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: 'loop'
//               }}
//               className="w-3 h-3 rounded-full bg-[#915eff]"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   )
// }

// export default Hero;





import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
  const socialLinks = [
    { icon: <FaLinkedin className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'/>, url: "https://linkedin.com/in/yourprofile", color: "text-blue-400" },
    { icon: <FaGithub className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'/>, url: "https://github.com/yourusername", color: "text-gray-200" },
    { icon: <SiLeetcode className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'/>, url: "https://leetcode.com/yourprofile", color: "text-yellow-400" },
    { icon: <FaCode className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'/>, url: "https://yourportfolio.com", color: "text-purple-400" },
  ];

  return (
    <section className='relative w-full min-h-screen mx-auto'>
      <div className='absolute inset-0 top-[150px] sm:top-[130px] lg:top-[150px] max-w-7xl mx-auto flex items-start gap-3 sm:gap-5 px-4 sm:px-6'>
        <div className='hidden sm:flex flex-col justify-center items-center mt-5'>
          <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 h-32 sm:h-80 bg-gradient-to-b from-[#915eff] to-transparent'/>
        </div>
        <div className='flex-1'>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight'
          >
            Hi, I'm <span className='text-[#915eff]'>Kousalya</span>
          </motion.h1>
          <div className='mt-2 text-base sm:text-lg md:text-xl font-medium text-gray-300'>
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
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='text-sm sm:text-base md:text-lg lg:text-xl mt-6 sm:mt-8 text-gray-200 leading-relaxed max-w-4xl'
          >
            A dedicated computer science student with a strong passion for building innovative web applications and solving complex technical challenges. Through hands-on projects and continuous learning.
          </motion.h1>

          <motion.div className="flex gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 justify-center sm:justify-start">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} text-2xl sm:text-3xl md:text-4xl`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
                initial={{ 
                  opacity: 0,
                  y: 20,
                  rotateY: 45
                }}
                animate={{ 
                  opacity: 1,
                  y: [0, -15, 0],
                  rotateY: 0,
                  rotateX: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
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
                }}
                whileHover={{
                  y: -20,
                  scale: 1.2,
                  transition: { 
                    type: "spring", 
                    stiffness: 400 
                  }
                }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className='flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-12'
          >
            <motion.a
              href="/Kousalya_resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm sm:text-base"
            >
                  My Resume 📄
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='w-full sm:w-auto px-6 sm:px-8 py-3 bg-transparent border-2 border-gray-400 text-gray-300 rounded-lg font-semibold hover:bg-gray-700 hover:border-gray-300 transition-all duration-300 text-sm sm:text-base'
            >
              Let's Connect 💬
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Button - Now Fixed at Bottom */}
      <div className='absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10'>
        <a href="#about">
          <div className='w-[30px] h-[54px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-[#915eff] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 18, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#915eff]"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;