import tailwind from '../assets/tailwind.png';
import css from '../assets/css3.png';
import html from '../assets/html.png';
import nodejs from '../assets/nodejs.png';
import reactjs from '../assets/reactjs.png';
import mongodb from '../assets/mongodb.png';
import javascript from '../assets/javascript.png';
import web from '../assets/web.png';
import typescript from '../assets/typescript.png';
import ux from '../assets/ux.png';
import reactt from '../assets/react.png';
import git from '../assets/git.png';
import java from '../assets/java.png'
import android from '../assets/android.png'
import mysql from '../assets/mysql.png'
import php from '../assets/php.png'
import aws from '../assets/aws.png'
import api from '../assets/api.png'
import or from '../assets/omramconstruction.png'
import reactttt from '../assets/reacttt.png'
import dino from '../assets/dino.png'

const services = [
	{
	title: "Java Developer",
	icon: java,
	},
	{
	title: "React Developer" ,
	icon: reactt,
	},
	{
	title: "Android Developer",
	icon: android,
	},
];

const technologies = [
    {
        name: "HTML",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "Javascript",
        icon: javascript,
    },
    {
        name: "Typescript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Mongo DB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "PhP",
        icon: php,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "API",
        icon: api,
    },
    {
        name: "Web",
        icon: web,
    },
    {
        name: "UI/UX",
        icon: ux,
    }
    
];

const projects = [
    {
        name: "Dino Game",
        description: 
        "Inspired from Dino Game on Google, I have also created the same Game for playing offline.",
        tags: [
            {
                name: "Typescript",
                color: "blue-text-gradient",
            },
            {
                name: "Angular",
                color: "green-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: dino,
        source_code_link : "https://github.com/rajat2222/Dino-Game",
        source_deploy_link : "https://github.com/rajat2222/Dino-Game",
    },
    {
        name: "React Project",
        description: 
        "While learning Reactjs I have developed this project and also this is My First React Project",
        tags: [
            {
                name: "Typescript",
                color: "blue-text-gradient",
            },
            {
                name: "Angular",
                color: "green-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: reactttt,
        source_code_link : "https://github.com/rajat2222/React-Demo-Project",
        source_deploy_link : "https://github.com/rajat2222/React-Demo-Project",
    },
    {
        name: "Android Application",
        description: 
        "Developed on Android this is a Construction Application, Using Php APIs and MySQL Database",
        tags: [
            {
                name: "Typescript",
                color: "blue-text-gradient",
            },
            {
                name: "Angular",
                color: "green-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: or,
        source_code_link : "https://github.com/rajat2222/ConstructionApp/tree/master",
        source_deploy_link : "https://github.com/rajat2222/ConstructionApp/tree/master",
    },
];
export {services, technologies, projects};

