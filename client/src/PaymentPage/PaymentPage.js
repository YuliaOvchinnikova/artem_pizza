import React, { useState } from "react";
import { useForm } from "react-hook-form";

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

  const onSubmit = (data) => {
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
          <p>{cardType}</p>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
