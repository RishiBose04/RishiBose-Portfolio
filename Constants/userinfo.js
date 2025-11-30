//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faItchIo,faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"
import Logo from '../styles/projects/dgre.png' //import your logo here

export const userinfo = {
    logoText: "Rishi Bose", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'rishibose00@gmail.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '8939671797', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+91' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'github', link: 'https://github.com/RishiBose04', icon: faGithubAlt },
        { type: 'linkedin', link: 'https://www.linkedin.com/in/rishi-bose-9a7848271/', icon: faLinkedinIn },
        { type: 'itchio', link: 'https://rishi-bose.itch.io/', icon: faItchIo },
    ],
    greeting: {
        //this text goes on your landing page
        title: "Rishi Bose",
        subtitle: "Game Designer | Developer | Software Engineer",
    },
 capabilities: [
     {
    category: "Game Development",
    skills: ["Unity", "Unreal Engine", "Blender (basic)"]
  },
  {
    category: "Web Development",
    skills: ["React.js", "Next.js", "HTML", "CSS", "JavaScript"]
  },
 
  {
    category: "Programming Languages",
    skills: ["C#", "Java", "Python", "C"]
  },
  {
    category: "Languages Spoken",
    skills: ["Tamil", "English", "Japanese (Certified N5)"]
  }
],
    about: {
        //this text goes at the bottom of your home page.
        content: "I am a passionate Game Developer and Software Engineering graduate focused on crafting immersive and engaging gameplay experiences. I love blending technical problem-solving with creative storytelling to bring interactive worlds to life. In my journey so far, I have built multiple projects in Unity and experimented with Unreal, gaining hands-on experience in gameplay programming, AI, level design, UI, and game feel. Alongside game development, I also work with modern web technologies like React and Next.js to build clean, responsive portfolio and project sites. ",
        resume: "https://drive.google.com/drive/folders/1YWWd9eHp8AVKBzs7L-BrPBrvcVkZmP8S?usp=drive_link" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: '2025', //timespan
                title: 'B.E in Computer Science', //eg. BTech in Compuster Engineering
                organization: 'Rajalakshmi Institute of Technology', //eg. VJTI, Mumbai
                description: '' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: '2021',
                title: 'Higher Secondary Education',
                organization: 'Madras Christian College Higher Secondary School',
                description: ''
            },
            {
                time: '2019',
                title: 'SSLC Education',
                organization: 'Seventh Day Adventist School',
                description: ''
            },
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Defence Geoinformatics Research Establishment', //company name eg.Microsoft
                companylogo: Logo, //companylogo
                position: 'Research Fellow Intern', //post you held eg.Senior SDE
                time: 'August 2023 - November 2023', //timespan
                description: 'Developed and validated algorithms using DEMs, raster layers, and Cesium Ion for real-time 3D terrain visualization. Collaborated with scientists to strengthen expertise in GIS, geospatial analysis, and algorithm design.' //eg. spearheaded the graphics team in designing SASS product UIs
            }, 
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: false,
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Projects',
    workMainPage: 'Projects',
    capabilities: 'Skills & Capabilities',
    about: 'About Me',
    education: 'Education',
    experience: 'Experiences',
    blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My Projects',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}