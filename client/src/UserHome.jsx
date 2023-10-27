import { useState } from "react";
import { Game } from "./Game";

const UserHome = ({ user }) => {
  const [startGame, setStartGame] = useState(false);
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
