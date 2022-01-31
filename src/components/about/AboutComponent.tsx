import React from "react";
import styles from "./AboutComponent.module.scss";

type AboutComponentProps = {};

const AboutComponent: React.FC<AboutComponentProps> = () => {
  return (
    <>
      <main className={styles.about}>
        <div className={styles.flex33}>
          <section>
            <h1>Summary</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere cumque voluptatum repellat blanditiis
              quis quo omnis obcaecati ex delectus id? At laudantium quod vel debitis porro ratione ipsa harum tenetur?
            </p>
          </section>
          <section>
            <h1>Contact</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere cumque voluptatum repellat blanditiis
              quis quo omnis obcaecati ex delectus id? At laudantium quod vel debitis porro ratione ipsa harum tenetur?
            </p>
          </section>
          <section>
            <h1>Skills</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere cumque voluptatum repellat blanditiis
              quis quo omnis obcaecati ex delectus id? At laudantium quod vel debitis porro ratione ipsa harum tenetur?
            </p>
          </section>
        </div>

        <div className={styles.flex66}>
          <section>
            <h1>Work Experience</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere cumque voluptatum repellat blanditiis
              quis quo omnis obcaecati ex delectus id? At laudantium quod vel debitis porro ratione ipsa harum tenetur?
            </p>
          </section>
          <section>
            <h1>Education</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere cumque voluptatum repellat blanditiis
              quis quo omnis obcaecati ex delectus id? At laudantium quod vel debitis porro ratione ipsa harum tenetur?
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default AboutComponent;
