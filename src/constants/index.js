import email1 from '../assets/email1.png';
import email2 from '../assets/email2.png';
import github1 from '../assets/github1.svg';
import github2 from '../assets/github2.svg';
import ins1 from '../assets/ins1.svg';
import ins2 from '../assets/ins2.svg';
import linkedin1 from '../assets/linkedin1.svg';
import linkedin2 from '../assets/linkedin2.svg';
import gh from '../assets/gh.jpeg';
import orbital from '../assets/orbital.jpeg';
import ura from '../assets/ura.png';
import managemate from '../assets/managemate.jpeg';

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
    num: "☕︎ 01. ☕︎",
    info: [
      "Hello, my name is Yolanda.",
      "I am a 2A Software Engineering student at the University of Waterloo.",
      "GPA 3.9 / 4.0",
    ],
  },
  {
    num: "☕︎ 02. ☕︎",
    info: [
      "I am passionate about web, app, game and full stack development.",
      "I am also commited towards ui/ux design and graphic arts.",
    ],
  },
  {
    num: "☕︎ 03. ☕︎",
    info: [
      "My main languages include Javascript, C++, C#, Python, Scala and SQL.",
      "I also love ReactJS, ThreeJS, NodeJS and Tailwind.",
    ],
  },
  {
    num: "☕︎ 04. ☕︎",
    info: [
      "As my history teacher used to say, encounters can lead to extordinary things.",
      "I am glad our paths crossed."
    ],
  },
];

const experiences = [
  {
    title: "Web Developer",
    company: "Managemate",
    icon: managemate,
    iconBg: '#ffffff',
    date: "January 2024 - April 2024",
    link: "https://www.managemate.ca/",
    points: [
      "Constructed new responsive access menus and email automations on the company's SAAS platform.",
      "Expanded the PostgreSQL database on AWS to provide custom taging for activities and assets.",
    ],
  },
  {
    title: "University Research Assistant",
    company: "Social and Intelligent Robotics Research Lab",
    icon: ura,
    iconBg: '#ffffff',
    date: "September 2023 - December 2023",
    link: "https://uwaterloo.ca/social-intelligent-robotics-research-lab/",
    points: [
      "Researching social robots for human-computer interaction under Professor Kerstin Dautenhahn",
      "Developing the Furhat Robot vision control system using its Kotlin and Python SDK",
    ],
  },
  {
    title: "Software Developer",
    company: "GH Capital Corporation",
    icon: gh,
    iconBg: '#ffffff',
    date: "May 2023 - August 2023",
    link: "https://www.graydonhallapartments.com/",
    points: [
      "Updated the corporate website with React and Chakura UI visually hidden to meet AODA compliance",
      "Wrote robust code with Tailwind to ensure mobile responsiveness and smooth page transitions",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "UW Orbital",
    icon: orbital,
    iconBg: '#ffffff',
    date: "Sept 2022 - May 2023",
    link: "https://www.uworbital.com/",
    points: [
      "In charge of ARO web app UI design and map API development",
      "Integrated web app backend with FirebaseDB and Cloud Functions to ensure data security",
    ],
  },
];
  
export { navLinks, contact, about, experiences };