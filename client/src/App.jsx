import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Homepage from "./Homepage";
import CreateAccount from "./CreateAccount";
import "./styles/App.css";
import UserHome from "./UserHome";
import { Game } from "./Game";

const App = () => {
  return (
    <div className="container" >
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="new" element={<CreateAccount />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/play" element={<Game />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
