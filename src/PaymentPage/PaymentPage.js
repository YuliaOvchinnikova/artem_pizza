import React, { useState } from "react";
import { useForm } from "react-hook-form";

const normalizeCardNumber = (value) => {
  return (
    value
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      ?.join(" ")
      .substr(0, 19) || ""
  );
};

export const PaymentPage = () => {
  const { register, handleSubmit } = useForm();
  const [cardType, setCardType] = useState("");

  const onSubmit = (data) => {
    if (data.cardNumber[0] === "4") {
      setCardType("Visa");
    } else if (data.cardNumber[0] === "5") {
      setCardType("MasterCard");
    } else {
      setCardType("");
    }
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
            onChange={(event) => {
              const { value } = event.target;
              event.target.value = normalizeCardNumber(value);
            }}
            ref={register}
          />
          <p>{cardType}</p>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
