import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const usernameInput = useRef("");
  const passwordInput = useRef("");

  const navigate = useNavigate();

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
      res.status == 200 ? navigate("/home") : console.log(res.status)
    );
  };

  return (
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
