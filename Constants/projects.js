// import project demo images as follows.
import PROJECT1_1 from '../styles/projects/MyOrbPoster.png';
import PROJECT1_2 from '../styles/projects/Screenshot2.jpg';
import PROJECT1_3 from '../styles/projects/Screenshot3.jpg';
import PROJECT2_1 from '../styles/projects/HG1.png';
import PROJECT2_2 from '../styles/projects/HG2.png';
import PROJECT2_3 from '../styles/projects/HG3.png';
import PROJECT3_1 from '../styles/projects/CP1.png';
import PROJECT3_2 from '../styles/projects/CP2.png';
import PROJECT3_3 from '../styles/projects/CP3.png';
import PROJECT4_1 from '../styles/projects/TT1.png';
import PROJECT4_2 from '../styles/projects/TT2.png';
import PROJECT4_3 from '../styles/projects/TT3.png';
import PROJECT5_1 from '../styles/projects/CR1.png';
import PROJECT5_2 from '../styles/projects/CR2.png';
import PROJECT5_3 from '../styles/projects/CR3.png';


// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
    //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
    //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
    {
        name: 'My Orb', //project name
        description: 'A RPG Game blends fast-paced combat, smart enemy behavior, and clean visual design to create an immersive experience.', //project description
        githubLink: 'https://github.com/RishiBose04/RPG_Project', //github repo link
        projectLink: 'https://rishi-bose.itch.io/my-orb', //deployed project link
        tech: ['Unity', 'c#'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: [PROJECT1_1, PROJECT1_2, PROJECT1_3],
        
    },
    {
        name: 'Mare-Nite',
        description: 'Mare-Nite is a short atmospheric first-person horror experience where tension, shadows, and sound shape your every step.',
        githubLink: 'https://github.com/RishiBose04/HorrorGame',
        projectLink: 'https://rishi-bose.itch.io/mare-nite',
        tech: ['Unity', 'c#'],
        photo: [PROJECT2_1, PROJECT2_2, PROJECT2_3],
    },
    {
        name: 'Chaos Platform',
        description: 'Chaos Platform is a fast-paced platformer where a player must survive waves of enemies(Bombs) while navigating through Platforms.',
        githubLink: 'https://github.com/RishiBose04/Platform-Survival',
        projectLink: 'https://rishi-bose.itch.io/chaos-platform',
        tech: ['Unity', 'c#'],
        photo: [PROJECT3_1, PROJECT3_2, PROJECT3_3],
    },
     {
        name: 'Toont Tank',
        description: 'In this the Tank is a Player and it needs to complete the Level which contains different Enemies to kill and Pickups for the Health and PowerUps.',
        githubLink: '',
        projectLink: 'https://youtu.be/GCOt901Mdsg',
        tech: ['Unreal', 'c++','Blueprints'],
        photo: [PROJECT4_1, PROJECT4_2, PROJECT4_3],
    },
    {
        name: 'CryptRaider',
        description: 'It contains a puzzle Level the player should solve the puzzle and reach the treasure, the Gorgoyle is a treasure.',
        githubLink: '',
        projectLink: 'https://youtu.be/NAACipdubOw',
        tech: ['Unreal', 'c++','Blueprints'],
        photo: [PROJECT5_1, PROJECT5_2, PROJECT5_3],  
    }
]
