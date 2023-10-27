import { useRef, useState } from "react";
import {Timer} from "./timer"

const Homepage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const usernameInput = useRef("");
  const passwordInput = useRef("");

  const handleRequest = (e) => {
    e.preventDefault();
    const userData = {
      user_name: usernameInput.current.value,
      password: passwordInput.current.value,
    };

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then((res) => 
      res.status == 200 ? setIsLoggedIn(true) : console.log(res.status)
    );
  };

  return isLoggedIn ? (
    <>
    <h1>Welcome</h1>
    <Timer className="timer" time_limit={30}></Timer>
    </>
  ) : (
    <>
      <form action="#" onSubmit={handleRequest}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" ref={usernameInput} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" ref={passwordInput} />
        <button>Login</button>
      </form>
      <a href="/new">Create An Account</a>
    </>
  );
};

export default Homepage;
