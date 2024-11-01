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
 vote,
 market,
 bistro,
 ehc,
 docker,
 aws,
 nextjs,
 fsts,
 fstm,
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
   id: "education",
   title: "Education",
 },
 {
   id: "contact",
   title: "Contact",
 },
];

const services = [
 {
   title: "Full Stack Developer",
   icon: web,
 },
 {
   title: "Spring Boot Developer",
   icon: backend,
  },
  {
    title: "Next Ts Developer",
    icon: creator,
  },
 {
   title: "DevOps Engineer",
   icon: mobile,
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
   name: "Next Js",
   icon: nextjs,
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
 {
   name: "Docker",
   icon: docker,
 },
 {
   name: "AWS",
   icon: aws,
 },
];

const experiences = [
 {
   titleEn: "Fullstack Developer",
   titleFr: "Développeur Fullstack",
   company_name: "EHC Group",
   icon: ehc,
   iconBg: "#383E56",
   dateEn: "July 2024 - October 2024",
   dateFr: "Juillet 2024 - Octobre 2024",
   pointsFr: [
     " Développé et personnalisé une plateforme E-learning avec des modules sur mesure, intégration de notifications en temps réel via WebSockets.",
     "Mis en place de dashboards pour la gestion des utilisateurs, des formations en direct et différé, et des quiz interactifs.",
     "Actively participated in the development and optimization of systems, providing a rewarding experience to acquire essential software development skills.",
     "Collaboré avec des équipes pour optimiser les solutions d'apprentissage en ligne, en utilisant Spring Cloud pour une architecture distribuée",
   ],
   pointsEn: [
     "Developed and customized an E-learning platform with custom modules, integrating real-time notifications via WebSockets.",
     "Set up dashboards for managing users, live and delayed training, and interactive quizzes.",
     "Actively participated in the development and optimization of systems, providing a rewarding experience to acquire essential software development skills.",
     "Collaborated with teams to optimize online learning solutions, using Spring Cloud for distributed architecture.",
   ],
 },
 {
   titleEn: "Odoo System Developer",
   titleFr: "Développeur de systèmes Odoo",
   company_name: "Xatis",
   icon: xatis,
   iconBg: "#383E56",
   dateEn: "July 2023 - August 2023",
   dateFr: "Juillet 2023 - Août 2023",
   pointsEn: [
     "Created new modules and adapted existing ones for the Odoo system during my internship, addressing the unique needs of the company effectively and personally.",
     "Collaborated with a skilled team to enhance the system as a whole and ensure its proper functioning.",
     "Actively participated in the development and optimization of systems, providing a rewarding experience to acquire essential software development skills.",
     "Contributed significantly to the company's management solutions.",
   ],
   pointsFr: [
     "Créé de nouveaux modules et adapté des modules existants pour le système Odoo lors de mon stage, répondant efficacement et personnellement aux besoins uniques de l'entreprise.",
     "Collaboré avec une équipe qualifiée pour améliorer le système dans son ensemble et assurer son bon fonctionnement.",
     "Participé activement au développement et à l'optimisation des systèmes, offrant une expérience enrichissante pour acquérir des compétences essentielles en développement logiciel.",
     "Contribué de manière significative aux solutions de gestion de l'entreprise.",
   ],
 },
 {
   titleEn: "Dropshipping Specialist",
   titleFr: "Spécialiste du dropshipping",
   company_name: "Shopify - Youcan",
   icon: shopify,
   iconBg: "#E6DEDD",
   dateEn: "Jan 2019 - Present",
   dateFr: "Jan 2019 - Présent",
   pointsEn: [
     "Specialized in dropshipping, creating stores on Shopify and Youcan.",
     "Managed the entire process of purchasing products from AliExpress and selling them on the company's websites in England and the USA.",
    ],
    pointsFr: [
      "Spécialisé dans le dropshipping, création de magasins sur Shopify et Youcan.",
      "Géré l'ensemble du processus d'achat de produits sur AliExpress et de vente sur les sites Web de l'entreprise en Angleterre et aux États-Unis.",
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
   image:"" ,
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
   name: " Orderly",
   description:
     "Developed a robust e-commerce platform for managing stores, products, and orders, with features for inventory control, order tracking, and promotion management, supporting secure, scalable multi-user roles.",
   tags: [
     {
       name: "Spring Cloud",
       color: "blue-text-gradient",
     },
     {
       name: "Next Ts",
       color: "green-text-gradient",
     },
     {
       name: "Kafka",
       color: "pink-text-gradient",
     },
     {
       name: "Zipkin",
       color: "orange-text-gradient",
     },
   ],
   image: market,
   source_code_link: "https://github.com/aramali0/Orderly",
 },
 {
   name: "Bistro Management",
   description:
     "Developed a restaurant management system with roles (Creator, Admin, User) that includes menu management, meal tracking, and order processing. Created an intuitive interface for seamless ordering and tracking, with collaborative GitHub contributions for efficient development.",
   tags: [
     {
       name: "Spring Boot",
       color: "blue-text-gradient",
     },
     {
       name: "React js",
       color: "green-text-gradient",
     },
     {
       name: "Tailwind CSS",
       color: "pink-text-gradient",
     },
   ],
   image: bistro,
   source_code_link: "https://github.com/aramali0/restaurant-management-system",
 },
 {
   name: "AeroLogic",
   description:
     "This project is an air traffic control simulation designed to demonstrate the coordination and management of aircraft within controlled airspace. It provides a realistic environment for training and understanding the complexities of air traffic control.",
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
       name: "Html & Css",
       color: "pink-text-gradient",
     },
   ],
   image: airTrafic,
   source_code_link: "https://github.com/aramali0/Simulation-Du-Controle-Aearien",
 },
 {
   name: "VoteSphere",
   description:
     "Developed a mobile app enabling users to create private voting rooms with multi-program voting and secure access codes, allowing only authorized participants to join each session.",
   tags: [
     {
       name: "Spring Boot",
       color: "blue-text-gradient",
     },
     {
       name: "Flutter",
       color: "green-text-gradient",
     },
   ],
   image: vote ,
   source_code_link: "https://github.com/bachriotmane/Internet-voting-system/tree/main",
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
   name: "TalkSphere",
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

const educations = [
  {
    institution:"Fst Settat",
    degreeEn: "Engineering Degree in Software Quality",
    degreeFr: "Diplôme d'ingénieur en qualité logicielle",
    date: "2022-2025",
    icon: fsts,
    pointsEn:[
      "Currently pursuing a State Engineer Diploma in Software Engineering at Faculté des Sciences et Techniques de Settat, emphasizing a blend of computer science fundamentals and advanced software engineering training.",
      "Proficient in object-oriented programming, data structures, algorithms, web and mobile development, and cloud computing",
      "Gaining hands-on experience in collaborative projects, problem-solving, and critical thinking, fostering technical and project management skills",
      "Committed to continuous learning and professional growth, with a passion for innovating and solving complex challenges in the tech industry",
    ],
    pointsFr:[
      "Actuellement en cours de préparation d'un diplôme d'ingénieur d'État en génie logiciel à la Faculté des sciences et techniques de Settat, mettant l'accent sur un mélange de fondamentaux de l'informatique et de formation avancée en génie logiciel.",
      "Maîtrise de la programmation orientée objet, des structures de données, des algorithmes, du développement web et mobile et de l'informatique en nuage",
      "Acquisition d'une expérience pratique dans des projets collaboratifs, la résolution de problèmes et la pensée critique, favorisant les compétences techniques et en gestion de projet",
      "Engagé dans l'apprentissage continu et la croissance professionnelle, avec une passion pour l'innovation et la résolution de défis complexes dans l'industrie technologique",
    ]
    
  },
  {
    institution:"Fst Mohammedia",
    degreeEn: "University Diploma in Scientific and Technical Studies (DEUST)",
    degreeFr: "Diplôme universitaire d'études scientifiques et techniques (DEUST)",
    date: "2020-2022",
    icon: fstm,
    pointsEn:[
      "DEUST program at FST Mohammedia focuses on Mathematics, Computer Science, and Physics (MIP).Aims to equip students with theoretical and practical knowledge in the field.",
      "Covers diverse subjects like algebra, analysis, probability, statistics, programming, databases, and algorithms.Emphasizes analytical and problem-solving skills, providing hands-on experience with industry tools.",
      "Offers internships and projects for real-world application of knowledge. Graduates well-prepared for careers in data science, software development, and information technology.",
    ],
    pointsFr:[
      "Le programme DEUST à la FST Mohammedia met l'accent sur les mathématiques, l'informatique et la physique (MIP). Vise à doter les étudiants de connaissances théoriques et pratiques dans le domaine.",
      "Couvre des sujets divers comme l'algèbre, l'analyse, la probabilité, les statistiques, la programmation, les bases de données et les algorithmes. Met l'accent sur les compétences analytiques et la résolution de problèmes, offrant une expérience pratique avec des outils industriels.",
      "Propose des stages et des projets pour l'application du savoir-faire dans le monde réel. Les diplômés sont bien préparés pour des carrières en science des données, développement logiciel et technologie de l'information.",
    ]
  }
];

export { services, technologies, experiences, testimonials, projects,educations };