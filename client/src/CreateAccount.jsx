import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const usernameInput = useRef("");
  const passwordInput = useRef("");
  const reEnterPasswordInput = useRef("");

  const navigate = useNavigate();

  const handleRequest = (e) => {
    e.preventDefault();

    const userData = {
      user_name: usernameInput.current.value,
      password: passwordInput.current.value,
    };

    fetch("/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then((res) => {
      res.status == 200 ? navigate("/home") : console.log(res.status);
    });
  };

  return (
    <form action="#" onSubmit={handleRequest}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" ref={usernameInput} />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" ref={passwordInput} />
      <label htmlFor="repassword">Re-enter Password</label>
      <input type="password" name="repassword" ref={reEnterPasswordInput} />
      <button>Create Account</button>
    </form>
  );
};

export default CreateAccount;
