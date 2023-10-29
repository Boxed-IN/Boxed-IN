import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserHome = ({ user }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    fetch("/currentUser")
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));
  }, []);

  return (
    <>
      <div>Hello, {currentUser}</div>
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
