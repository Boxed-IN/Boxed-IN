import { useState } from "react";
import { Game } from "./Game";
import Postgame from "./Postgame";
import { useNavigate } from "react-router-dom";

const UserHome = ({ user }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div>Hello, {user}</div>
      <button
        onClick={() => {
          navigate("/play");
        }}
      >
        Play
      </button>
      <button onClick={handleClick}>Logout</button>
    </>
  );
};

export default UserHome;
