import email1 from '../assets/email1.png';
import email2 from '../assets/email2.png';
import github1 from '../assets/github1.svg';
import github2 from '../assets/github2.svg';
import ins1 from '../assets/ins1.svg';
import ins2 from '../assets/ins2.svg';
import linkedin1 from '../assets/linkedin1.svg';
import linkedin2 from '../assets/linkedin2.svg';

const navLinks = [
    {
      id: "about",
      title: "ABOUT",
    },
    {
      id: "experiences",
      title: "EXPERIENCES",
    },
    {
        id: "projects",
        title: "PROJECTS",
      },
    {
      id: "contact",
      title: "CONTACT",
    },
];

const contact = [
  {
    id: "email",
    num: 1,
    link: "mailto:yolandahuang2004@gmail.com",
    icon1: email1,
    icon2: email2,
  },
  {
    id: "github",
    num: 2,
    link: "https://github.com/yolandahuangg",
    icon1: github1,
    icon2: github2,
  },
  {
    id: "instagram",
    num: 3,
    link: "https://www.instagram.com/yolandahuangg/",
    icon1: ins1,
    icon2: ins2,
  },
  {
    id: "linkedin",
    num: 4,
    link: "https://www.linkedin.com/in/yolandahuangg/",
    icon1: linkedin1,
    icon2: linkedin2,
  },
];

const about = [
  {
    num: 1,
    info: [
      "Hello, my name is Yolanda.",
      "I am a 2A Software Engineering student at the University of Waterloo.",
      "GPA 3.9 / 4.0",
    ],
  },
  {
    num: 2,
    info: [
      "I am passionate about web, app, game and full stack development.",
      "I am also commited towards ui/ux design and graphic arts.",
    ],
  },
  {
    num: 3,
    info: [
      "My main languages include Javascript, C++, C#, Python, Scala and SQL.",
      "I also love ReactJS, ThreeJS, NodeJS and Tailwind.",
    ],
  },
  {
    num: 4,
    info: [
      "As my history teacher used to say, encounters can lead to extordinary things.",
      "I am glad our paths crossed."
    ],
  },
];

const experiences = [
  {
    title: "University Research Assistant",
    company: "Social and Intelligent Robotics Research Lab",
    icon: '',
    iconBg: '',
    date: "September 2023 - Current",
    points: [
      "",
      "",
    ],
  },
  {
    title: "Software Developer",
    company: "GH Capital Corporation",
    icon: '',
    iconBg: '',
    date: "May 2023 - August 2023",
    points: [
      "",
      "",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "UW Orbital",
    icon: '',
    iconBg: '',
    date: "Sept 2022 - May 2023",
    points: [
      "",
      "",
    ],
  },
];
  
//   const projects = [
//     {
//       name: "Car Rent",
//       description:
//         "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//       tags: [
//         {
//           name: "react",
//           color: "blue-text-gradient",
//         },
//         {
//           name: "mongodb",
//           color: "green-text-gradient",
//         },
//         {
//           name: "tailwind",
//           color: "pink-text-gradient",
//         },
//       ],
//       image: carrent,
//       source_code_link: "https://github.com/",
//     },
//     {
//       name: "Job IT",
//       description:
//         "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//       tags: [
//         {
//           name: "react",
//           color: "blue-text-gradient",
//         },
//         {
//           name: "restapi",
//           color: "green-text-gradient",
//         },
//         {
//           name: "scss",
//           color: "pink-text-gradient",
//         },
//       ],
//       image: jobit,
//       source_code_link: "https://github.com/",
//     },
//     {
//       name: "Trip Guide",
//       description:
//         "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//       tags: [
//         {
//           name: "nextjs",
//           color: "blue-text-gradient",
//         },
//         {
//           name: "supabase",
//           color: "green-text-gradient",
//         },
//         {
//           name: "css",
//           color: "pink-text-gradient",
//         },
//       ],
//       image: tripguide,
//       source_code_link: "https://github.com/",
//     },
//   ];
  
export { navLinks, contact, about, experiences };