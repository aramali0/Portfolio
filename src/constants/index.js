import {
 mobile,
 backend,
 creator,
 web,
 javascript,
 typescript,
 html,
 css,
 reactjs,
 redux,
 tailwind,
 angular,
 spring,
 git,
 xatis,
 shopify,
 airTrafic,
 fightGame,
 chatApp,
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
 {
   id: "cv.pdf",
   title: "Cv",
 },
];

const services = [
 {
   title: "Full Stack Developer",
   icon: web,
 },
 {
   title: "React Js Developer",
   icon: mobile,
  },
  {
    title: "Angular Developer",
    icon: creator,
  },
 {
   title: "Spring Boot Developer",
   icon: backend,
 },
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
   name: "TypeScript",
   icon: typescript,
 },
 {
   name: "React JS",
   icon: reactjs,
 },
 {
   name: "Angular",
   icon: angular,
 },
 {
   name: "Redux Toolkit",
   icon: redux,
 },
 {
   name: "Tailwind CSS",
   icon: tailwind,
 },
 {
   name: "Spring Boot",
   icon: spring,
 },
 {
   name: "git",
   icon: git,
 },
];

const experiences = [
 {
   title: "Odoo System Developer",
   company_name: "Xatis",
   icon: xatis,
   iconBg: "#383E56",
   date: "July 2023 - August 2023",
   points: [
     "Created new modules and adapted existing ones for the Odoo system during my internship, addressing the unique needs of the company effectively and personally.",
     "Collaborated with a skilled team to enhance the system as a whole and ensure its proper functioning.",
     "Actively participated in the development and optimization of systems, providing a rewarding experience to acquire essential software development skills.",
     "Contributed significantly to the company's management solutions.",
   ],
 },
 {
   title: "Dropshipping Specialist",
   company_name: "Shopify - Youcan",
   icon: shopify,
   iconBg: "#E6DEDD",
   date: "Jan 2019 - Present",
   points: [
     "Specialized in dropshipping, creating stores on Shopify and Youcan.",
     "Managed the entire process of purchasing products from AliExpress and selling them on the company's websites in England and the USA.",
    ],
 },
];

const testimonials = [
 {
   testimonial:
     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
   name: "Sara Lee",
   designation: "CFO",
   company: "Acme Co",
   image: "https://randomuser.me/api/portraits/women/4.jpg",
 },
 {
   testimonial:
     "I've never met a web developer who truly cares about their clients' success like Rick does.",
   name: "Chris Brown",
   designation: "COO",
   company: "DEF Corp",
   image: "https://randomuser.me/api/portraits/men/5.jpg",
 },
 {
   testimonial:
     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
   name: "Lisa Wang",
   designation: "CTO",
   company: "456 Enterprises",
   image: "https://randomuser.me/api/portraits/women/6.jpg",
 },
];

const projects = [
 {
   name: "Simulation-Du-Controle-Aearien",
   description:
     "This project is an air traffic control simulation designed to demonstrate the coordination and management of aircraft within controlled airspace. It provides a realistic environment for training and understanding the complexities of air traffic control.",
   tags: [
     {
       name: "J2E",
       color: "blue-text-gradient",
     },
     {
       name: "JS",
       color: "green-text-gradient",
     },
     {
       name: "Html & Css",
       color: "pink-text-gradient",
     },
   ],
   image: airTrafic,
   source_code_link: "https://github.com/aramali0/Simulation-Du-Controle-Aearien",
 },
 {
   name: "Fight Game",
   description:
     "Dive into my captivating Fighting Game project on my portfolio website. Experience a Welcome Page, Choose Player Page, and Play Page for immersive gaming. Check out the Game Over Page for results. With a user-friendly interface and character selection, it's a thrilling adventure",
   tags: [
     {
       name: "J2E",
       color: "blue-text-gradient",
     },
     {
       name: "JSP",
       color: "green-text-gradient",
     },
     {
       name: "scss",
       color: "pink-text-gradient",
     },
   ],
   image: fightGame,
   source_code_link: "https://github.com/aramali0/fight-game",
 },
 {
   name: "Chat App",
   description:
     "This web application enables communication through 1-to-1 and group chats with different user roles. Users can have roles such as Admin, Moderator (Comitateur), and Normal. Each role comes with specific permissions, allowing for effective control and moderation within the chat system.",
   tags: [
     {
       name: "Spring Boot",
       color: "blue-text-gradient",
     },
     {
       name: "JS",
       color: "green-text-gradient",
     },
     {
       name: "Socket",
       color: "pink-text-gradient",
     },
     {
       name: "html & css",
       color: "red-text-gradient",
     },
   ],
   image: chatApp,
   source_code_link: "https://github.com/aramali0/chat-app",
 },
];

export { services, technologies, experiences, testimonials, projects };