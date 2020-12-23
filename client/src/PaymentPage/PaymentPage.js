import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createNewOrder } from "./../api";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPizza } from "./../state/pizza/selectors";

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
  return "";
};

export const PaymentPage = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [cardType, setCardType] = useState("");
  const pizza = useSelector(getPizza);

  if (!pizza) {
    return <Redirect to="/" />;
  }

  const onSubmit = async (data) => {
    const obj = {
      ingredients: [pizza.size, pizza.dough, pizza.sauce, ...pizza.ingredients],
      address: data.address,
      name: data.name,
      card_number: data.cardNumber,
    };
    const result = await createNewOrder(obj);
    let cardType = getCardType(data.cardNumber[0]);
    setCardType(cardType);
  };

  const onChange = (event) => {
    const { value } = event.target;
    setValue("cardNumber", normalizeCardNumber(value));
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
