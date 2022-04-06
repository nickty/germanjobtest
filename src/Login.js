import React, { useState } from "react";

const Login = ({ setLogin }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  let errorMessage = "";

  const handleButton = () => {
    if (!name && !password) {
      console.log("Please insert username and password");
      errorMessage = "please insert credentials";
      return;
    }

    setLogin(true);
  };

  return (
    <>
      {errorMessage}
      <h2 className="text-center">Login</h2>
      <div className="container">
        <p>Username</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <br />
        <button onClick={handleButton}>Login</button>
      </div>
    </>
  );
};

export default Login;
