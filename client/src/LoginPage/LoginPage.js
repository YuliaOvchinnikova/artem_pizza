import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuthorized, login, logout } from "./../state";

const GeneralFrame = styled.div`
  /* Auth--initial */

  /* Auto Layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: relative;
  width: 360px;
  height: 640px;

  /* gray/100 */

  background: #f9f9fb;
`;

const Wrapped = styled(GeneralFrame)`
  /* Content */

  /* Auto Layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 360px;
  height: 296px;
  left: 0px;
  top: 0px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;

const AroundForm = styled(GeneralFrame)`
  /* Form */

  /* Auto Layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 16px;

  position: static;
  width: 360px;
  height: 240px;
  left: 0px;
  top: 56px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px;
`;

const StyledTitle = styled.h1`
  /* Авторизация */

  position: static;
  width: 130px;
  height: 28px;
  left: 48px;
  top: 6px;

  /* text/lg | bold */

  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 140% */

  display: flex;
  align-items: center;
  text-align: center;

  /* black */

  color: #1f1f33;

  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 8px 0px;
`;

const StyledLabel = styled.label`
  /* Пароль */

  position: static;
  width: 296px;
  height: 20px;
  left: 0px;
  top: 0px;

  /* text/sm | medium */

  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  /* gray/600 */

  color: #4b4b7c;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 8px;
`;

const StyledInput = styled.input`
  /* Auto Layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;

  position: static;
  left: 0%;
  right: 0%;
  top: 41.18%;
  bottom: 0%;

  /* white */

  background: #ffffff;
  /* gray/200 */

  border: 2px solid #e1e1ed;
  box-sizing: border-box;
  border-radius: 6px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 8px;
`;

const StyledForm = styled.form`
  /* Auth / Form */

  /* Auto Layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;

  position: static;
  width: 328px;
  height: 240px;
  left: 16px;
  top: 0px;

  /* white */

  background: #ffffff;
  /* shadow/lg */

  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 16px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 10px;
`;

const StyledButton = styled.button`
  /* Form / Button */

  /* Auto Layout */

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 16px;

  position: static;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  /* gray/100 */

  background: #f9f9fb;
  border-radius: 16px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 0px;
`;

export const LoginPage = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const isAuthorized = useSelector(getIsAuthorized);

  const onLogout = () => {
    dispatch(logout());
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
    dispatch(login({ name: data.loginName, password: data.password }));
  };

  return (
    <GeneralFrame>
      <Wrapped>
        <StyledTitle>Login</StyledTitle>
        <AroundForm>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div>
              <StyledLabel>
                Login name:
                <StyledInput
                  name="loginName"
                  placeholder="Login"
                  ref={register({
                    required: {
                      value: true,
                      message: "Login is required field",
                    },
                    pattern: {
                      value: /[A-Za-z]+$/i,
                      message: "Just latin letters",
                    },
                  })}
                />
              </StyledLabel>
              {errors.loginName && <p>{errors.loginName.message}</p>}
            </div>

            <div>
              <StyledLabel>
                Password:
                <StyledInput
                  name="password"
                  placeholder="Password"
                  ref={register({
                    required: {
                      value: true,
                      message: "Password is required field",
                    },
                  })}
                />
              </StyledLabel>
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <StyledButton>Submit</StyledButton>
          </StyledForm>
        </AroundForm>
      </Wrapped>
    </GeneralFrame>
  );
};
