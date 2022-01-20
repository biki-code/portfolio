import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages";

const App: React.FC = () => {
  return (
    <Router basename="/portfolio">
      <Homepage />
    </Router>
  );
};

export default App;
