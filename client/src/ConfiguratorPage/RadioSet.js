import React, { useState } from "react";
import styled from "styled-components";

const SwitcherContainer = styled.div`
  background-color: #f9f9fb;
  border-radius: 12px;
  padding: 2px;
  display: flex;
  overflow: auto;
`;

const SwitcherItem = styled.div`
  display: inline-block;
  font-size: 14px;
  padding: 4px 12px;
  white-space: nowrap;
  color: ${({ isSelected }) => (isSelected ? "#1F1F33" : "#4B4B7C")};
  background: ${({ isSelected }) => (isSelected ? "white" : "transparent")};
  border-radius: ${({ isSelected }) => (isSelected ? "10px" : "inherit")};
  font-weight: ${({ isSelected }) => (isSelected ? "500" : "400")};
  box-shadow: ${({ isSelected }) =>
    isSelected &&
    "0px 3px 4px rgba(75, 75, 124, 0.05), 0px 0px 2px rgba(75, 75, 124, 0.2)"};
  cursor: ${({ isSelected }) => (isSelected ? "default" : "pointer")};
`;

export const RadioSet = ({ name, values, setter }) => {
  const [selected, setSelected] = useState(0);

  const Clicked = (selectedIndex) => {
    setSelected(selectedIndex);
    setter(values[selectedIndex].slug);
  };

  return (
    <>
      <SwitcherContainer>
        {values.map((value, i) => (
          <SwitcherItem
            key={value.id}
            onClick={() => Clicked(i)}
            name={name}
            value={value.slug}
            isSelected={i === selected}
          >
            {value.name}
          </SwitcherItem>
        ))}
      </SwitcherContainer>
    </>
  );
};
