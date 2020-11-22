import React, { useState } from "react";
import { Link } from "react-router-dom";

export const RegistrationPage = () => {
  const [loginName, setLoginName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(loginName + " " + password);
  };

  const handleLoginNameInputChange = (event) => {
    setLoginName(event.target.value);
  };

  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div>
      <h1>Registration</h1> <br />
      <form onSubmit={handleSubmit}>
        <label>
          Login name:
          <input
            name="loginName"
            type="text"
            value={loginName}
            onChange={handleLoginNameInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            name="password"
            type="text"
            value={password}
            onChange={handlePasswordInputChange}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
};
