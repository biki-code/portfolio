import "./scss/_global.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages";
import { useThemeContext } from "./contexts/ThemeProvider";

const App: React.FC = () => {
  const { theme } = useThemeContext();

  // set data-color-theme on the root html tag depending on the theme to change color css variables
  document.documentElement.setAttribute("data-color-theme", theme);

  return (
    <Router basename="/portfolio">
      <Homepage />
    </Router>
  );
};

export default App;
