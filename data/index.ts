import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Services", link: "#services" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Student passionate about Web Dev, Programming, and DevOps.",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] text-xs text-white",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.jpeg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className:
      "scroll-container lg:col-span-2 md:col-span-3 md:row-span-2 overflow-y-scroll",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning Spring Boot",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "ECounselling application",
    des: "E-counseling app guiding students in exploring colleges and informed admission decisions.",
    img: "/sb.jpeg",
    iconLists: [
      "/spring-boot.svg",
      "/java.svg",
      "/re.svg",
      "/mysql.svg",
      "/tail.svg",
    ],
    link: "https://e-counselliing.vercel.app/",
  },
  {
    id: 2,
    title: "Havenly Homes Application",
    des: "Dynamic real estate platform powered by MERN stack technology.",
    img: "/work-4.jpeg",
    iconLists: ["/mg.svg", "/ejs.svg", "/re.svg", "/njs.svg", "/tail.svg"],
    link: "https://havenlyhomes.onrender.com/",
  },
  {
    id: 3,
    title: "Weather App",
    des: "Made a website project for live location weather details.",
    img: "/work-1.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    link: "https://weather-site-aditya.netlify.app/",
  },
  {
    id: 4,
    title: "Rock Paper Scissor",
    des: "Engaging rock-paper-scissors game with vanilla JavaScript for endless fun.",
    img: "/work-6.jpeg",
    iconLists: ["/html.svg", "/tail.svg", "/js.svg"],
    link: "https://aditya10403.github.io/RockPaperScissor/",
  },
];

export const Services = [
  {
    id: 1,
    title: "Web Dev",
    desc: "Made Projects using MERN technology enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "Programming",
    desc: "Solved 200+ easy to hard Problems on LeetCode",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "UI/UX Design",
    desc: "Use to with Figma and other user interface editors.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/Aditya10403",
    img: "/git.svg",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/aditya-shukla-637636256/",
    img: "/link.svg",
  },
  {
    id: 3,
    link: "https://x.com/?lang=en-in",
    img: "/twit.svg",
  },
];
