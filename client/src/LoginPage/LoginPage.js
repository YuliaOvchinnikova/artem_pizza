import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuthorized, login } from "../state";
import { TopBarWithBackArrow } from "./../shared/TopBarWithBackArrow";
import { LoginPageForm } from "./LoginPageForm";
import { Redirect } from "react-router-dom";
import { AppTopField } from "./../shared/AppTopField";
import { useHistory } from "react-router-dom";

export const LoginPage = () => {
  const { register, watch, errors } = useForm();
  const dispatch = useDispatch();
  const [activated, setActivated] = useState();
  const history = useHistory();

  const watchAllFields = watch();

  const isAuthorized = useSelector(getIsAuthorized);

  if (isAuthorized) {
    return <Redirect to="/orderHistory" />;
  }

  const onSubmit = (data, error) => {
    dispatch(login({ name: data.loginName, password: data.password }));
    history.push("/orderHistory");
  };

  const onChange = () => {
    if (
      watchAllFields !== undefined &&
      watchAllFields.loginName !== "" &&
      watchAllFields.password !== ""
    ) {
      setActivated(true);
    } else {
      setActivated(false);
    }
  };

  return (
    <>
      <AppTopField />
      <TopBarWithBackArrow title="Login" />
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
