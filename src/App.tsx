import { BrowserRouter as Router } from "react-router-dom";
import styles from "./App.module.scss";
import Homepage from "./pages";

const App: React.FC = () => {
  return (
    <Router basename="/portfolio">
      <div className={styles.container}>
        <Homepage />
      </div>
    </Router>
  );
};

export default App;
