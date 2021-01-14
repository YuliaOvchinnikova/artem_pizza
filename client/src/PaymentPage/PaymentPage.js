import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrderPizza,
  getOrderStatus,
  createOrder,
  set_payment_data,
} from "../state";

export const normalizeCardNumber = (value) => {
  if (
    value === undefined ||
    typeof value !== "string" ||
    !/^(\d+\s*)+$/.test(value)
  ) {
    return "";
  }
  return (
    value
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      ?.join(" ")
      .substr(0, 19) || ""
  );
};

export const getCardType = (firstCharacter) => {
  if (firstCharacter === "4") {
    return "Visa";
  } else if (firstCharacter === "5") {
    return "MasterCard";
  }
  return "Unknown card type";
};

export const PaymentPage = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, setValue } = useForm();
  const [cardType, setCardType] = useState("");
  const pizza = useSelector(getOrderPizza);
  const status = useSelector(getOrderStatus);

  if (!pizza) {
    return <Redirect to="/" />;
  }
  if (status === "sending") {
    return <p>Sending</p>;
  } else if (status === "success") {
    return <Redirect to="/orderConfirmation" />;
  } else if (status === "error") {
    return <p>Error</p>;
  }

  const onSubmit = async (paymentData) => {
    dispatch(set_payment_data(paymentData));
    dispatch(createOrder({ pizza, paymentData }));
  };

  const onChange = (event) => {
    const { value } = event.target;
    setValue("cardNumber", normalizeCardNumber(value));
    let cardType = getCardType(value[0]);
    setCardType(cardType);
  };

  return (
    <>
      <h1>Payment page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            placeholder="0000 0000 0000 0000"
            type="tel"
            inputMode="numeric"
            autoComplete="cc-number"
            name="cardNumber"
            id="cardNumber"
            onChange={onChange}
            ref={register}
          />
          <label>
            Name:
            <input name="name" ref={register} />
          </label>
          <label>
            Address:
            <input name="address" ref={register} />
          </label>
          <p>{cardType}</p>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
