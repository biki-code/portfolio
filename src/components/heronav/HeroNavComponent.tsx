import styles from "./HeroNavComponent.module.scss";
import LinkButtonComponent from "../link-button/LinkButtonComponent";

type HeroNavComponentProps = {};

const HeroNavComponent: React.FC<HeroNavComponentProps> = () => {
  return (
    <>
      <div className={styles.heronav}>
        <div>
          <LinkButtonComponent name={"About me"} linkTo={"/about"} />
          <LinkButtonComponent name={"Projects"} linkTo={"/projects"} inverted={true} />
        </div>

        {/* <div className={styles.github}>
          <a target="_blank" rel="noreferrer" href="https://github.com/biki-code">
            Github
          </a>
        </div> */}
      </div>
    </>
  );
};

export default HeroNavComponent;
