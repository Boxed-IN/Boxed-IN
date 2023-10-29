import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Homepage from "./Homepage";
import CreateAccount from "./CreateAccount";
import "./styles/App.css";

const App = () => {
  return (
    <div className="container" >
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="new" element={<CreateAccount />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
