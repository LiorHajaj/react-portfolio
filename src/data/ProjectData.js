import smartCityIMG from "../Assets/SmartCity.png";
import myBotImage from "../Assets/MyBotImage.jpg";
import javaImage from "../Assets/java.png";
import nodeJSImage from "../Assets/nodeJS.png";

// --------------------------------------- Project List
export const ProjectList = [
  {
    // need to fix "C:/Users/USER/Portfolio/src/Assets/SmartCity.png"
    img: smartCityIMG,
    title: "Smart City",
    description: 'Smart City, This project is about multithreading "SmartCity" which contains a roadway system that implements the Dijkstra' +
    'algorithm while keeping track of vehicles, traffic lights and oncoming traffic, using Java and OOP principals',
    tech_stack: 'Java',
    github_url: "https://github.com/LiorHajaj/Smart-City",
    // demo_url: "https://clicker-nu.vercel.app",
  },// {
  //   img: "",
  //   title: "Ecommerce",
  //   description: "A ecommerce with the Api of Rakuten, Made it with React and sass.",
  //   tech_stack: "Html, Css, sass, Javascript, React",
  //   github_url: "https://github.com/JoseOrtega02/e-commerce",
  //   demo_url: "https://e-commerce-joseortega02.vercel.app",
  // },
  {
    img: myBotImage,
    title: "MyBot",
    description: 'A WhatsApp bot which its purpose is to make mundane tasks easier, I used whatsapp-web.js library and several technologies like API calls, web scraping and URL manipulation' ,
    tech_stack: "nodeJS, Javascript",
    github_url: "https://github.com/LiorHajaj/MyBot",
    // demo_url: "https://joseortega02.github.io/Eddie-homepage-Devchallenge7-/",
  },
  // {
  //   img: "https://github.com/JoseOrtega02/Weather-App-React-/blob/master/weather-app.PNG?raw=true",
  //   title: "Weather app",
  //   description: "I made simple weather app with the api of Openweather in react.",
  //   tech_stack: "Reactjs, Css, sass",
  //   github_url: "https://github.com/JoseOrtega02/Weather-App-React-",
  //   demo_url: "https://weather-app-react-joseortega02.vercel.app",
  // },
  // {
  //   img: "https://github.com/JoseOrtega02/Pokedex/blob/master/Pokedex.PNG?raw=true",
  //   title: "Pokedex",
  //   description:
  //     "Suck my dick",
  //   tech_stack: "html,Css, Javascript",
  //   github_url: "https://github.com/JoseOrtega02/Pokedex",
  //   demo_url: "https://pokedex-eight-theta.vercel.app",
  // },
];

// --------------------------------------- Skills

export const stackList = [
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/html5.svg",
    name: "HTML",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/css3.svg",
    name: "CSS",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/javascript.svg",
    name: "JavaScript",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/react.svg",
    name: "ReactJS",
  },
  {
    img: nodeJSImage,
    name: "nodeJS",
  },
 
  {
    img: javaImage,
    name: "Java",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/git.svg",
    name: "Git",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/responsive.svg",
    name: "Responsive",
  },
];
