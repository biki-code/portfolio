import React from "react";
import styles from "./AboutComponent.module.scss";

type AboutComponentProps = {};

const AboutComponent: React.FC<AboutComponentProps> = () => {
  return (
    <>
      <main className={styles.about}>
        <div className={styles.flex33}>
          <section>
            <h1> Profile </h1>
            <p>
              Energetic and curiosity-driven junior software developer. Eager to learn new technologies and to inherent
              skills to effective utilazation and contribute to the progress of organazation. Currently seeking a
              software developer intern position.
            </p>
          </section>
          <section>
            <h1>Contact</h1>
            <p>
              <div>
                Birthday: 15.04.199x 
                <a href="mailto:bikiltu.beyene@outlook.com">Email:{" "}bikiltu.beyene@outlook.com</a>{"  "}
                Phone number: +358449768258 {" "}
                Address:{" "}Viisukuja 2, 01390 Vantaa
              </div>
            </p>
          </section>
          <section>
            <h1>Skills</h1>
            <p>
              Languages:
              English - Good
              Finnish - Intermediate
              Amharic - Native
              Russian - Beginner
              Web Tools: Java, C#, Html, Css,Typescript, Javascript, MySql,NoSql, Github
            </p>
          </section>
        </div>
        <div className={styles.flex66}>
          <section>
            <h1>Work Experience</h1>
            <p>
              - Teaching in PanAfrica Distance Education for 1 year in Ethiopia {'   '}
              -Opertion superviser in Ayka Addis
              Textile factory - B2b sales person in Dubai mall for short period - Class asistant at Ilola, vantaa school
              - Sales person in Helsinki outlet in Polarn O.pyret shop as intern
            </p>
          </section>
          <section>
            <h1>Education</h1>
            <p>
              - Asella Teachers college 2010-2013 Bachelor of Education - Vantaa Ammatiopisto Axell 2018 Finnish
              language and culture 
              - Vantaa Ammatiopisto Varia 2020 -2023 Information and Technology Specialization in
              Programming
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default AboutComponent;
