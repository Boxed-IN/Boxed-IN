import { useState } from "react";

const Homepage = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <>
      <form action="/" method="GET">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={usernameInput}
          onChange={(e) => {
            setUsernameInput(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={passwordInput}
          onChange={(e) => {
            setPasswordInput(e.target.value);
          }}
        />
        <button>Login</button>
      </form>
      <a href="/new">Create An Account</a>
    </>
  );
};

export default Homepage;
