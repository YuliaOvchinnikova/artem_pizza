import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const [loginName, setLoginName] = useState("");
  const [password, setPassword] = useState("");

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setLoginName(data.loginName);
    setPassword(data.password);
  };

  return (
    <div>
      <h1>Login</h1> <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Login name:
            <input
              name="loginName"
              placeholder="Login"
              ref={register({
                required: { value: true, message: "Required field" },
                pattern: {
                  value: /[A-Za-z]/,
                  message: "Just latin letters",
                },
              })}
            />
          </label>
          {errors.loginName && <p>{errors.loginName.message}</p>}
        </div>

        <div>
          <label>
            Password:
            <input
              name="password"
              placeholder="Password"
              ref={register({
                required: { value: true, message: "Required field" },
              })}
            />
          </label>
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button>Submit</button>
      </form>
      <Link to="/registration">Registration</Link>
    </div>
  );
};
