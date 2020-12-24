import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuthorized } from "./../state/auth/selectors";
import { authLogin, authLogout } from "./../state/auth/actions";

export const RegistrationPage = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const isAuthorized = useSelector(getIsAuthorized);

  const onLogout = () => {
    dispatch(authLogout());
  };

  if (isAuthorized) {
    return (
      <>
        <h2>You are authorized!</h2>
        <button onClick={onLogout}>Logout</button>
      </>
    );
  }

  const onSubmit = (data) => {
    dispatch(authLogin(data.loginName, data.password));
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
                required: { value: true, message: "Login is required field" },
                pattern: {
                  value: /[A-Za-z]+$/i,
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
                required: {
                  value: true,
                  message: "Password is required field",
                },
              })}
            />
          </label>
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
