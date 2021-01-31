import React, { useState } from "react";
import { ADDRESS } from "./../api";

import styled from "styled-components";

const CheckboxSetSwitcherItem = styled.div`
  display: inline-block;
  font-size: 14px;
  padding: 12px;
  margin-right: 20px;
  white-space: nowrap;
  color: "#1F1F33";
  background: "white";
  font-weight: "400";
  background: #ffffff;
  border: ${({ checked }) => (checked ? "2px solid #00a896" : "none")};
  box-sizing: border-box;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 12px;
`;

const IngredientName = styled.div`
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: ${({ checked }) => (checked ? "500" : "normal")};
  font-size: 14px;
  line-height: 20px;
  color: #1f1f33;
`;

const IngredientPrice = styled.div`
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1f1f33;
`;

export const CheckboxItem = ({ name, value, register, image }) => {
  const [selected, setSelected] = useState();

  const onChange = () => {
    setSelected(!selected);
  };

  return (
    <CheckboxSetSwitcherItem key={value.id} checked={selected}>
      <input
        name={name}
        type="checkbox"
        value={value.slug}
        ref={register}
        checked={selected}
        onChange={onChange}
      />
      <img src={ADDRESS + `/${value.thumbnail}`} alt={name} />
      <IngredientName checked={selected}>{value.name} </IngredientName>
      <IngredientPrice>{value.price}</IngredientPrice>
    </CheckboxSetSwitcherItem>
  );
};
