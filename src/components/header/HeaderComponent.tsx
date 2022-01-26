import { NAV_DATA } from "../../utils/navbar-data";
import styles from "./HeaderComponent.module.scss";
import NavItemComponent from "./navitem/NavItemComponent";
import ThemeToggleComponent from "./theme-toggle/ThemeToggleComponent";
import Logo from "./logo/LogoComponent"

type HeaderComponentProps = {};

const HeaderComponent: React.FC<HeaderComponentProps> = () => {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <Logo />
          <span>
            {NAV_DATA.map(({ key, title, linkTo }) => (
              <NavItemComponent key={key} title={title} linkTo={linkTo} />
            ))}
          </span>
          <ThemeToggleComponent />
        </nav>
      </header>
    </>
  );
};

// This is a default export which means that it can be imported under any name in any other module
export default HeaderComponent;
