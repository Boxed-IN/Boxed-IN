import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserHome = ({ user }) => {
  const [startGame, setStartGame] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    window.location.reload();
  };

  return startGame ? (
    <Game />
  ) : (
    <>
      <div>Hello, {user}</div>
      <button
        onClick={() => {
          setStartGame(true);
        }}
      >
        Play
      </button>
      <button onClick={handleClick}>Logout</button>
    </>
  );
};

export default UserHome;
