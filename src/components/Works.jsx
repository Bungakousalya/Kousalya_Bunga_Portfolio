// Works.jsx
import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import  SectionWrapper  from "../hoc/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

/**
 * ProjectCard component - Displays individual project cards
 * @param {number} index - Index for animation sequencing
 * @param {string} name - Project name
 * @param {string} description - Project description
 * @param {Array} tags - Project tags
 * @param {string} image - Project image URL
 * @param {string} source_code_link - GitHub link
 */
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-4 sm:p-5 rounded-2xl w-full sm:w-[360px]' // Full width on mobile, fixed on larger screens
      >
        {/* Project image */}
        <div className='relative w-full h-[180px] sm:h-[230px]'> {/* Smaller height on mobile */}
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          {/* GitHub link button */}
          <div className='absolute inset-0 flex justify-end m-2 sm:m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer' // Smaller button on mobile
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        {/* Project info */}
        <div className='mt-4 sm:mt-5'>
          <h3 className='text-white font-bold text-[20px] sm:text-[24px]'>{name}</h3>
          <p className='mt-1 sm:mt-2 text-secondary text-[12px] sm:text-[14px]'>{description}</p> {/* Smaller text on mobile */}
        </div>

        {/* Project tags */}
        <div className='mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-2'> {/* Smaller gap on mobile */}
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[10px] sm:text-[14px] ${tag.color}`} // Smaller text on mobile
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

/**
 * Works component - Displays projects section
 */
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-2 sm:mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[25px] sm:leading-[30px]' // Smaller text and line height on mobile
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Projects grid with responsive gap */}
      <div className='mt-10 sm:mt-20 flex flex-wrap gap-4 sm:gap-7 justify-center'> {/* Smaller gap on mobile, centered */}
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");