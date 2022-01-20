import { NAV_DATA } from "../../utils/navbar-data";

type HeaderComponentProps = {};

const HeaderComponent: React.FC<HeaderComponentProps> = () => {
  return (
    <>
      <header>
        <nav>
          <span>
            {NAV_DATA.map(({ key, title, linkTo }) => {
              return (
                <a key={key} href={linkTo}>
                  <span>{title}</span>
                </a>
              );
            })}
          </span>
        </nav>
      </header>
    </>
  );
};

// This is a default export which means that it can be imported under any name in any other module
export default HeaderComponent;
