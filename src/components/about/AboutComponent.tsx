import React from "react";
import styles from "./AboutComponent.module.scss";

type AboutComponentProps = {};

const AboutComponent: React.FC<AboutComponentProps> = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.flex33}>
          <section>
            <h1>Profile</h1>
            <p>
              Energetic and curiosity-driven junior software developer. Eager to learn new technologies and to inherent
              skills to effective utilazation and contribute to the progress of organazation. Currently seeking a
              software developer intern position.
            </p>
          </section>
          <section>
            <h1>Home location</h1>
            <p>
              <p>🏠Vantaa, Finland</p>
            </p>
          </section>
          <section>
            <h1>Skills</h1>
            <p>
              <h3>Languages</h3>
              <span>English - Good</span>
              <span>Finnish - Intermediate</span>
              <span>Amharic - Native</span>
              <span>Russian - Beginner</span>
              <h3>Web Tools</h3> Java, C#, Html, Css,Typescript, Javascript, React, MySql, NoSql, Git
            </p>
          </section>
        </div>
        <div className={styles.flex66}>
          <section>
            <h1>Work Experience</h1>
            <p>
              <span>Teaching in PanAfrica Distance Education for 1 year in Ethiopia</span>
              <span>Operation superviser in Ayka Addis Textile factory </span>
              <span> B2b sales person in Dubai mall for short period</span>
              <span>Class asistant at Ilola, vantaa school</span>
              <span>Sales person in Helsinki outlet in Polarn O.pyret shop as intern</span>
              <span>
                Also, I was model for Paula Vesala music video and actress for finnish tv series. examples: Karkurit,
                Omerta 6/12
              </span>
            </p>
          </section>
          <section>
            <h1>Education</h1>
            <p>
              <span>Asella Teachers college 2010-2013 Bachelor of Education</span>{" "}
              <span>Vantaa Ammatiopisto Axell 2018 Finnish language and culture</span>{" "}
              <span>Vantaa Ammatiopisto Varia 2020 -2023 Information and Technology Specialization in Programming</span>
            </p>
          </section>
          <footer>
            <p>Contact information!</p>
            <p>
              <a href="https://www.linkedin.com/in/bikiltu-t-94960a1b6/" target="_blank" rel="noreferrer">
                Linkedin
              </a>{" "}
              📧 <a href="mailto:bikiltu.beyene@outlook.com" target="_blank" rel="noreferrer">bikiltu.beyene@outlook.com</a>{" "}
              <a href="https://github.com/biki-code" target="_blank" rel="noreferrer">Github</a>
            </p>
          </footer>
        </div>
      </main>
    </>
  );
};

export default AboutComponent;
