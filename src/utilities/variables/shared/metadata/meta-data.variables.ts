import { amountOfExperience } from "@utilities/variables/common/about/about-cards.variables";

export const PAGE_METADATA = {
  home: {
    title: "Home page",
    description: `Hello! My name is Younes LAHOUITI and I am a skilled web developer with ${amountOfExperience} years of experience in JavaScript. My passion lies in creating captivating and immersive web experiences for users, utilizing modern web technologies to build dynamic and responsive websites. I am dedicated to crafting clean, efficient, and maintainable code that optimizes performance and scalability. Outside of work, I enjoy staying active by going to the gym and playing video-games. Thank you for taking the time to visit my portfolio. I look forward to collaborating with you!`,
    pageUri: "/",
    needsIndexation: true,
    allowRobotCrawlers: true,
  },
  about: {
    title: "About page",
    description: `Get to know me better! I'm Younes LAHOUITI, a passionate web developer with ${amountOfExperience} years of experience in JavaScript. In this page, I share my story, skills, and interests. Learn about my professional journey and discover how I can help you build engaging web experiences.`,
    pageUri: "/about",
    needsIndexation: true,
    allowRobotCrawlers: true,
  },
  skills: {
    title: "Skills page",
    description:
      "Take a closer look at my technical skills as a web developer. From front-end to back-end technologies, I'm proficient in a range of tools and languages that can help bring your projects to life",
    pageUri: "/skills",
    needsIndexation: true,
    allowRobotCrawlers: true,
  },
  services: {
    title: "Services page",
    description:
      "Welcome to my services page. As a skilled web developer with experience in integrating mockups and conducting unit and integration tests with Jest, I offer services in website development. I specialize in building dynamic and responsive websites using modern web technologies to enhance user experience. Whether you need a website built from scratch or require debugging of an existing one, I can help. Let's work together to bring your ideas to life!",
    pageUri: "/services",
    needsIndexation: true,
    allowRobotCrawlers: true,
  },
  portfolio: {
    title: "Portfolio page",
    description:
      "Check out my latest work! This page showcases some of my most recent projects, from simple landing pages to complex web applications. Each project highlights my technical skills and my commitment to delivering high-quality and user-friendly web experiences!",
    pageUri: "/portfolio",
    needsIndexation: true,
    allowRobotCrawlers: true,
  },
  contact: {
    title: "Contact page",
    description:
      "Let's get in touch! I'm always eager to connect with new people and discuss exciting projects. On this page, you'll find different ways to reach out to me, from email to social media. Don't hesitate to drop me a message and let's create something amazing together!",
    pageUri: "/contact",
    needsIndexation: true,
    allowRobotCrawlers: true,
  },
  error404: {
    title: "Error 404 - Page not found",
    description:
      "Sorry, the page you were looking for is not available. Please try again or contact me for assistance.",
    pageUri: "/404",
    needsIndexation: true,
    allowRobotCrawlers: false,
  },
  error500: {
    title: "Error 500 - Server error",
    description:
      "Oops, something went wrong. We apologize for the inconvenience and are working to fix the issue. Please try again later or contact me for assistance",
    pageUri: "/500",
    needsIndexation: true,
    allowRobotCrawlers: false,
  },
};

export const OPEN_GRAPH = {
  image: {
    url: "https://younes-portfolio-dev.vercel.app/_next/image?url=%2Fjpg%2Fprofile-pic.jpg&w=256&q=75",
    width: 130,
    height: 170,
  },
};
