import React from "react";
import styled from "styled-components";
import {GRAY100} from "../colors";

const SwitcherContainer = styled.div`
    background-color: ${GRAY100};
    border-radius: 12px;
    padding: 2px;
    display: flex;
    overflow: auto;
`

const SwitcherItem = styled.div`
    display: inline-block;
    font-size: 14px;
    padding: 4px 12px;
    white-space: nowrap;

    color: ${({isSelected}) => isSelected ? '#1F1F33' : '#4B4B7C'};
    background: ${({isSelected}) => isSelected ? 'white' : 'transparent'};
    border-radius: ${({isSelected}) => isSelected ? '10px' : 'inherit'};
    font-weight: ${({isSelected}) => isSelected ? '500' : '400'};
    box-shadow: ${({isSelected}) => isSelected && '0px 3px 4px rgba(75, 75, 124, 0.05), 0px 0px 2px rgba(75, 75, 124, 0.2)'};
    cursor: ${({isSelected}) => isSelected ? 'default' : 'pointer'}
`

export const RadioSet = ({ text, name, values, register, watch }) => {
  const watchValues = watch();

  // TODO: make it work :)
  return (
    <>
      {/* <fieldset style={{display: 'none'}}>
        <legend>Choose {text}:</legend>
        {values.map((value) => (
          <div key={value.id}>
            <label>
              <input
                name={name}
                type="radio"
                value={value.slug}
                ref={register}
              />
              {value.name}
            </label>
          </div>
        ))}
      </fieldset> */}
      <SwitcherContainer>
        {values.map((value, i) => (
          <SwitcherItem isSelected={i === 0}>{value.name}</SwitcherItem>
        ))}
            
        </SwitcherContainer>
    </>
  );
};
