"use client";

import Image from "next/image";
import styles from "./page.module.css";
import React from 'react';
import {Tooltip} from "@nextui-org/tooltip";
import { useState } from 'react';

{/*DATA FOR MY STACKS*/}
const techStacks = [
    { name: 'Bootstrap', image: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png' },
    { name: 'CSS', image: 'https://andrei-portfolio.vercel.app/pictures/assets/css.svg' },
    { name: 'Go', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/215px-Go_Logo_Blue.svg.png' },
    { name: 'HTML', image: '/icons/html.svg' },
    { name: 'Javascript', image: '/icons/javascript.svg' },
    { name: 'PHP', image: '/icons/php.svg' },
    { name: 'Python', image: '/icons/python.svg' },
    { name: 'React', image: '/icons/webdev/react.svg' },
    { name: 'Rest API', image: '/icons/webdev/restapi.svg' },
    { name: 'SASS', image: '/icons/webdev/sass.svg' },
    { name: 'Next.js', image: '/icons/webdev/nextjs.svg' },
    { name: 'Typescript', image: '/icons/webdev/ts.svg' }
];

const webStacks = [
    { name: 'Bootstrap', image: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png' },
    { name: 'CSS', image: 'https://andrei-portfolio.vercel.app/pictures/assets/css.svg' },
    { name: 'Go', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/215px-Go_Logo_Blue.svg.png' },
    { name: 'HTML', image: '/icons/html.svg' },
];

const toolStacks = [
    { name: 'SASS', image: '/icons/webdev/sass.svg' },
    { name: 'Next.js', image: '/icons/webdev/nextjs.svg' },
    { name: 'Typescript', image: '/icons/webdev/ts.svg' }
];

{/*FOR TITLE HEADER OF STACKS*/}
const typeStacks = [
    {name: 'PROGRAMMING LANGUAGE'},
    {name: 'WEB DEVELOPMENT TECH STACK'},
    {name: 'TOOLS'},
]

const TechStack = () => {

    {/* FOR SWITCHING BETWEEN STACKS */}
    const [currentStacks, setCurrentStacks] = useState(techStacks);
    const [currentGroup, setCurrentGroup] = useState(0);

    const handleNextGroup = () => {
        let nextGroup;
        if (currentGroup === 0) {
            nextGroup = 1;
            setCurrentStacks(webStacks);
        } 
        
        else if (currentGroup === 1) {
            nextGroup = 2;
            setCurrentStacks(toolStacks);
        } 
        
        else {
            nextGroup = 0;
            setCurrentStacks(techStacks);
        }
        setCurrentGroup(nextGroup);
    };

    {/* START OF THE COMPONENT */}
return (
    
    <main className={styles.main}>
        <div className={styles.header}>
            <h1>
                My Technical Stacks
            </h1>
        </div>

        <div className={styles.stackContainer}>  
            <div className={styles.arrowLeft} onClick={handleNextGroup}>
                &#9664; {/* Left Arrow */}
            </div>

            <div className={styles.stackdivs}>
                {currentStacks.map(stack => (
                    <div key={stack.name} className={styles.iconandname}>
                        <Tooltip content={stack.name} className={styles.tooltip}>
                            <img src={stack.image} alt={stack.name} />
                        </Tooltip>
                    </div>
                ))}
            </div>

            <div className={styles.arrowRight} onClick={handleNextGroup}>
                &#9654; {/* Right Arrow */}
            </div>
        </div>
    
    </main>
  );
}
export default TechStack;