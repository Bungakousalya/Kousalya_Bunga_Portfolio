// Experience.jsx
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";

/**
 * ExperienceCard component - Displays individual experience items
 * @param {Object} experience - Experience data object
 */
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain' // Relative sizing based on container
          />
        </div>
      }
    >
      <div>
        {/* Experience title with responsive text size */}
        <h3 className='text-white text-[20px] sm:text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[14px] sm:text-[16px] font-semibold' // Smaller text on mobile
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {/* Experience points list */}
      <ul className='mt-4 sm:mt-5 list-disc ml-4 sm:ml-5 space-y-1 sm:space-y-2'> {/* Smaller spacing on mobile */}
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[12px] sm:text-[14px] pl-1 tracking-wider' // Smaller text on mobile
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

/**
 * Experience component - Displays work experience timeline
 */
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Work Experience.
        </h2>
      </motion.div>

      {/* Timeline container */}
      <div className='mt-10 sm:mt-20 flex flex-col'> {/* Smaller margin on mobile */}
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");