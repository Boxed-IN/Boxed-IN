import "./styles/UserHome.css";
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
    <h1 className="title-createacc" >Boxed IN</h1>
      <div className="box-userhome">
      <div className="greet-userhome" >Hello, {currentUser}</div>
      <button
        className="button-userhome"
        onClick={() => {
          navigate("/play");
        }}
      >
        Play
      </button>
      <button className="button-userhome" onClick={handleClick}>
        Logout
      </button>
      </div>
    </>
  );
};

export default UserHome;
