import {
  close,
  facebook,
  github,
  github3d,
  instagram,
  leetcode,
  linkedin,
  logo,
  menu,
  mine,
  project1,
  bootstrap,
  cpp,
  css,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nextjs,
  nodejs,
  python,
  reactjs,
  redux,
  sass,
  tailwind,
  threejs,
  blackangles,
  ncs,
  ygp,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "ThreeJS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: ncs,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: ygp,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: blackangles,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: ncs,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
const roles = [
  {
    title: "Full Stack Developer",
    stack: "MongoDB, Express.js, React.js, Node.js",

    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full Stack Developer",
    stack: "MongoDB, Express.js, React.js, Node.js",

    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser accessibilty.",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
      },
      {
        name: "mongodb",
      },
      {
        name: "tailwind",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/AayushAryan007",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
      },
      {
        name: "mongodb",
      },
      {
        name: "tailwind",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/AayushAryan007",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
      },
      {
        name: "mongodb",
      },
      {
        name: "tailwind",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/AayushAryan007",
  },
];

export { roles, navLinks, technologies, experiences, projects };
