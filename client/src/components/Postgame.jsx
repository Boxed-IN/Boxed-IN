import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Game } from "./Game";
import "../styles/Postgame.css";

const Postgame = ({ score, leaderboard }) => {
  const [playAgain, setPlayAgain] = useState(false);

  const navigate = useNavigate();

  const handleHomeButton = () => {
    return navigate("/home");
  };

  const handleReplayButton = () => {
    return setPlayAgain(true);
  };
  return playAgain ? (
    <Game />
  ) : (
    <>
      <h1 className="title">Boxed IN</h1>
      <div className="leaderboard-container">
        <h1>Leaderboard</h1>
        <ul>
          {leaderboard.map((user) => {
            return (
              <li className="li">
                {user.user}: {user.score}
              </li>
            );
          })}
        </ul>
        <div>Your Score: {score}</div>
        <button className="button-postgame" onClick={handleHomeButton}>
          Home
        </button>
        <button className="button-postgame" onClick={handleReplayButton}>
          Play Again
        </button>
      </div>
    </>
  );
};

export default Postgame;
