import "./scss/_global.scss";
import Homepage from "./pages";
import About from "./pages/about";
import Projects from "./pages/projects";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import { useThemeContext } from "./contexts/ThemeProvider";

const App: React.FC = () => {
  const { theme } = useThemeContext();

  // set data-color-theme on the root html tag depending on the theme to change color css variables
  document.documentElement.setAttribute("data-color-theme", theme);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
};

export default App;
