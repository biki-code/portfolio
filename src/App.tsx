import "./scss/_global.scss";
import Homepage from "./pages";
import About from "./pages/about";
import Projects from "./pages/projects";
import { Switch, Route, useHistory } from "react-router-dom";
import { useThemeContext } from "./contexts/ThemeProvider";
import { useEffect } from "react";
import FirebaseServices from "./firebaseServices";
import { logEvent } from "firebase/analytics";

const App: React.FC = () => {
  const { theme } = useThemeContext();

  const history = useHistory();

  // handle Google-Analytics
  useEffect(() => {
    const pingAnalytics = () => {
      const analyticsInstance = FirebaseServices.getAnalytics();
      logEvent(analyticsInstance, "page_view", {
        page_path: window.location.pathname,
      });
    };
    console.log("init GA");
    pingAnalytics();

    return history.listen((location) => {
      console.log("history updated", location);
      pingAnalytics();
    });
  }, [history]);

  // set data-color-theme on the root html tag depending on the theme to change color css variables
  document.documentElement.setAttribute("data-color-theme", theme);

  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
    </Switch>
  );
};

export default App;
