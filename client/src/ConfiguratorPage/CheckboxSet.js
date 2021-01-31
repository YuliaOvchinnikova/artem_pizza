import React from "react";
import styled from "styled-components";
// import "./styleCheckboxSet.css";
import bacon from "./assets/small_assets/bacon.svg";
import { CheckboxItem } from "./CheckboxItem";

const CheckboxContainer = styled.div`
  background-color: "white";
  padding: 2px;
  display: flex;
  overflow: auto;
`;

export const CheckboxSet = ({ name, values, register }) => {
  return (
    <>
      <CheckboxContainer>
        {values.map((value) => (
          <CheckboxItem
            key={value.id}
            name={name}
            value={value}
            register={register}
            image={value.slug}
          />
        ))}
      </CheckboxContainer>
    </>
  );
};
