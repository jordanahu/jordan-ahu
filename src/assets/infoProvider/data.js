import corona from "./images/corona.png";
import profile from "./images/profile.jpg"
import about from "./images/about.jpg";
import youtube from "./images/youtube.png"
import jam_resume from "./downloads/jam_resume.pdf";
import netflix from "./images/netflix.png";
import codersNation from "./images/codersNation.png";
import portfolio from "./images/portfolio.png";


let name = "JORDAN AHU"

const data = {
  name,
  images: {
    profile,
    about,
  },
  resume: jam_resume,
  colors: {
    major: "#CC4B2C",
    progressColor: "rgba(204, 75, 44,0.9)",
    buttonColor: "rgba(204, 75, 44, 0.9)",
    footerColor: "#290509",
    footerIcon: "#FFFAFA",
    copy: "#54423D",
  },
  year: "2023",
  footerAbout: `I am ${
    name.split(" ")[0]
  }  and this is my personal website. Contact me here.`,
  projects: 10,
  yrsExp: 5,
  phone: "+233-203-259-227",
  email: "ahujordan@yahoo.com",
  title: "Full Stack Software Engineer",
  aboutText: `Hi, I'm a Full Stack Software Developer. I make ideas come to life by creating fantastic web apps and websites to meet the needs of my clients!
    I inculcate tried and tested software design principles such as MVC(MODEL-VIEW-CONTROLLER) and SOLID design patterns to develop robust software!
    
    I always put the needs of my clients first and I give off my utmost best by providing them with quality user experience!`,

  links: {
    socialMedia: [
      "https://www.linkedin.com/in/jordan-a-700399144/",
      "https://www.instagram.com/ahujord/",
      "https://github.com/jordanahu",
      "https://twitter.com/jordan_ahu",
      "https://t.me/ahujord",
    ],
  },
  skills: {
    Frontend: [
      { name: "HTML5", progress: "95%", icon: "ImHtmlFive" },
      { name: "SASS", progress: "70%", icon: "FaSass" },
      { name: "JAVASCRIPT", progress: "85%", icon: "SiJavascript" },
      { name: "REACTJS", progress: "85%", icon: "FaReact" },
      { name: "ANGULAR", progress: "75%", icon: "SiAngular" },
      { name: "VUEJS", progress: "80%", icon: "RiVuejsLine" },
      { name: "BOOTSTRAP", progress: "90%", icon: "BsBootstrapFill" },
      { name: "MATERIAL-UI", progress: "90%", icon: "SiMaterialUi" },
      { name: "JQUERY", progress: "89%", icon: "SiJquery" },
      { name: "ADOBE PHOTOSHOP", progress: "75%", icon: "SiAdobephotoshop" },
      { name: "TYPESCRIPT", progress: "80%", icon: "SiTypescript" },
      { name: "REDUX", progress: "70%", icon: "SiRedux" },
      { name: "FIGMA", progress: "75%", icon: "SiFigma" },
    ],

    Backend: [
      { name: "PYTHON", progress: "69%" },
      { name: "NODEJS", progress: "85%" },
      { name: "MONGO-DB", progress: "75%" },
      { name: "WEB-SCRAPING", progress: "75%" },
      { name: "GOOGLE FIREBASE", progress: "77%" },
      { name: "API DESIGN", progress: "70%" },
      { name: "GIT AND GITHUB", progress: "80%", icon: "FaGitSquare" },
      { name: "DOCKER", progress: "60%", icon: "FaDocker" },
      { name: "JAVA", progress: "70%", icon: "SiJava" },
    ],
  },
  services: [
    {
      title: "Online Store",
      image:
        "https://image.shutterstock.com/image-photo/ecommerce-add-cart-online-order-260nw-532367254.jpg",
      caption:
        "You want an online store to market your goods and services? Look no further. I will create a professional online store to grasp the attention of your customers!",
      subheading: "E-commerce",
    },
    {
      title: "Web Scraping",
      image: "https://miro.medium.com/max/2000/1*f2-zeAOSNB4RGlqH9emTlQ.jpeg",
      subheading: "data mining",
      caption:
        "I will build a web crawling bot for you to search and track any information you need on the internet!",
      fiver: "https://www.fiverr.com/share/EEBz9y",
    },
    {
      title: "Customized Website/Web App",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      subheading: "web sites and web apps",
      caption:
        "I will build any customized website or web app for you with industry standard technologies and programming languages! You dream, and I make it a reality!",
      fiver: "https://www.fiverr.com/share/a06DyN",
    },
    {
      title: "Logo and Fliers",
      image:
        "https://images.pexels.com/photos/3747266/pexels-photo-3747266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      subheading: "graphic design",
      caption:
        "I will create an eye-catching logo or flier for your brand or comapny!",
    },
    {
      title: "API(Application Programming Interface)",
      subheading: "api design",
      image:
        "https://images.pexels.com/photos/7367/startup-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      caption:
        "I will build an API with tried and tested software design patterns and engineering principles! This will be built with JavaScript runtime environment, NodeJs!",
    },
    {
      title: "HTML, CSS AND JAVASCRIPT Bug Fixes",
      subheading: "debugging",
      image: "https://www.elprocus.com/wp-content/uploads/Featured-image-2.png",
      caption: "I will debug and review your existing web app project for you!",
      fiver: "https://www.fiverr.com/share/5VXj8z",
    },
  ],
  projectsInfo: [
    {
      title: "Live Covid-19 Update",
      demo: "https://covid-19-live-update-b794d.web.app/",
      git: "https://github.com/jordanahu/live-corona-update",
      image: corona,
      caption: "Created using Reactjs and Material-Ui Design",
    },
    {
      title: "Youtube Clone",
      demo: "https://jamtube.netlify.app/",
      git: "https://github.com/jordanahu/youtube-clone/tree/master",
      image: youtube,
      caption: "Built with HTML, CSS and vanilla JavaScript!",
    },

    {
      title: "Netflix Clone",
      demo: "https://netflix-80d59.firebaseapp.com",
      git: "https://github.com/jordanahu/netflix-clone",
      image: netflix,
      caption: "Built with Reactjs and plain CSS",
    },
    {
      title: "Coders Nation",
      demo: "https://coders-nation.web.app/",
      git: "https://github.com/jordanahu/coders-nation",
      image: codersNation,
      caption:
        "This is a team work to create a platform for people of all kinds to learn computer programming.",
    },
    {
      title: "My Personal Website",
      demo: "https://jordan-ahu.web.app/",
      git: "https://github.com/jordanahu/jordan-ahu",
      image: portfolio,
      caption:
        "Build with Reactjs, Material-UI and pure CSS for responsiveness.",
    },
  ],
};

export default data;