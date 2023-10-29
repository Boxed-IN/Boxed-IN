import { useState } from "react";
import { Game } from "./Game";
import "./styles/UserHome.css";

const UserHome = ({ user }) => {
  const [startGame, setStartGame] = useState(false);
  const handleClick = () => {
    window.location.reload();
  };

  return startGame ? (
    <Game />
  ) : (
    <>
      <h1 className="title-createacc" >Boxed IN</h1>
      <div className="box-userhome" >
      <div className="greet-userhome" >Hello, {user}</div>
      <button className="button-userhome"
        onClick={() => {
          setStartGame(true);
        }}
      >
        Play
      </button>
      <button className="button-userhome" onClick={handleClick}>Logout</button>
      </div>
    </>
  );
};

export default UserHome;
