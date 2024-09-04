import Image from "next/image";
import styles from "./page.module.css";
import formalpic from "src/img/formalpic.jpg"
import Link from "next/link";
import GroupList from "./group/page";
import React from 'react';
import Head from 'next/head';


export default function Home() {
  return (
    <>
    <main className={styles.main}>
      
      <div className={styles.navigationbar}>
        HEADER PLACEHOLDER
      </div>
    
      <div className={styles.description}>
        <p className={styles.introheader}>
          Hello! I'm Ruzle...
        </p>
      </div>
      
      <div className={styles.descriptiontext}>
        <p className={styles.mydescription}>I’m a versatile software developer specializing in web development and a software QA. Through hands-on experience and project work, I’ve developed a unique blend of coding and testing expertise, allowing me to deliver robust, high-quality solutions.        <br></br>
        <button className={styles.downloadCV}> Download CV</button>
        </p>
        <Image src="/formalpic.jpg" className={styles.mypicture}
        width={300}
        height={300}
        alt="Ruzle Jhon">
        </Image>
      </div>

      <div className={styles.cuteborders}>
        <p>BORDER PLACEHOLDER</p> 
      </div>

      <div className={styles.technicalSkills}>
        <p>MY TECHNICAL STACKS</p> 
      </div>
      
    </main>
    </>
  );
}
