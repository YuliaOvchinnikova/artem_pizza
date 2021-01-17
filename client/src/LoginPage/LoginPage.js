import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuthorized, login, logout } from "../state";
import { NavBar } from "./NavBar";
import { LoginPageForm } from "./LoginPageForm";

const GeneralFrame = styled.div``;

export const LoginPage = () => {
  const { register, watch, errors } = useForm();
  const dispatch = useDispatch();
  const [activated, setActivated] = useState();

  const watchAllFields = watch();

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

  const onSubmit = (data, error) => {
    console.log(error);
    dispatch(login({ name: data.loginName, password: data.password }));
  };

  const onChange = () => {
    if (
      watchAllFields != undefined &&
      watchAllFields.loginName != "" &&
      watchAllFields.password != ""
    ) {
      setActivated(true);
    } else {
      setActivated(false);
    }
  };

  return (
    <>
      <NavBar />
      <LoginPageForm
        onSubmit={onSubmit}
        onChange={onChange}
        register={register}
        activated={activated}
        errors={errors}
      />
    </>
  );
};
