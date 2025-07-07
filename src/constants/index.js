import {
  mobile,
  backend,
  Frontend,
  Aiml,
  CloudComputing,
  web,
  javascript,
  
  html,
  css,
  reactjs,
  
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  eduskills,
  carbon,
  threejs,
  amazon,
   java,
    leetcode,
     ml
  

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: Frontend,
  },
  {
    title:"AI/ML Enthusiast",
    icon:Aiml,
  },
  {
    title:"Cloud Computing Explorer",
    icon:CloudComputing,
  }
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Full stack Developer",
    company_name: "eduskills",
    icon: eduskills,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Dec 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];



const projects = [
  {
    name: "GabEat",
    description:
      "a comprehensive full-stack food delivery and vendor firm management platform built with the MERN stack. enables vendors to register, manage their restaurants (firms), and handle their complete product catalog with secure authentication",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name:"Expressjs",
        color:'green-text-gradient',
      }
    ],
    image:carbon,
    source_code_link: "https://github.com/Bungakousalya/Backend_Node.js_GrabEat",
  },
  
];

const certifications=[
    {
      title: "Amazon certified",
      issuer: "Zuvy",
      date: "2025",
      image: amazon,
      skills: ["Basics of Python , AI"],
      description:"Successfully completed Phase 1 of the Amazon Future Engineer Program, organized by Zuvy in collaboration with Amazon and Navgurukul. Selected from over 2000+ applicants, and later among the top 500 students out of 1000+ to qualify for Phase 2. Received a laptop as part of the program support."
    },
    {
      title: "Java Basic",
      issuer: "HackerRank",
      date: "2025", 
      image: java,
      skills: ["Java", "OOP"],
      description: "Completed the Java Basic certification on HackerRank, demonstrating proficiency in Java programming and object-oriented programming concepts."
    },
    {
      title: "DSA using JAVA",
      issuer: "LeetCode",
      date: "2025",
      image: leetcode,
      skills: ["Problem Solving", "Algorithms"],
      description: "Achieved the 50 day LeetCode Badge , showcasing consistency and dedication."
    },
    {
      title: "Machine Learning",
      issuer: "SRKR engineering college",
      date: "2025",
      image: ml,
      skills: ["Machine Learning"],
      description: "attended a comprehensive bootcamp on Machine Learning, covering key concepts and practical applications and developed a real world ml model."
    }
  ];

export { services, technologies, experiences, certifications, projects };