import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Game } from "./Game";

const Postgame = ({ score }) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [playAgain, setPlayAgain] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/leaderboard")
      .then((res) => res.json())
      .then((data) => setLeaderboard(data));
  }, []);

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
      <h1>Leaderboard</h1>
      <ul>
        {leaderboard.map((user) => {
          return (
            <li>
              {user.user}: {user.score}
            </li>
          );
        })}
      </ul>
      <div>Your Score: {score}</div>
      <button onClick={handleHomeButton}>Home</button>
      <button onClick={handleReplayButton}>Play Again</button>
    </>
  );
};

export default Postgame;
