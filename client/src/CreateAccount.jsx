import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [reenterPasswordInput, setReenterPasswordInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleClick = (e) => {
    setIsSubmitted(true);
  };

  useEffect(() => {
    const userData = {
      user_name: usernameInput,
      password: passwordInput,
    };

    fetch("http://localhost:5001/create", {
      method: "POST",
      headers: { "Content-Type": "applicataion/json" },
      body: JSON.stringify(userData),
    }).then((res) => {
      res.status == 200 ? navigate("/") : window.alert(res.body);
    });
  }, [isSubmitted]);

  return (
    <form action="#" onSubmit={handleClick}>
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
      <label htmlFor="repassword">Re-enter Password</label>
      <input
        type="password"
        name="repassword"
        value={reenterPasswordInput}
        onChange={(e) => {
          setReenterPasswordInput(e.target.value);
        }}
      />
      <button>Create Account</button>
    </form>
  );
};

export default CreateAccount;
