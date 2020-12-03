import React from "react";

export const CheckboxSet = ({ text, name, values, register, data }) => {
  return (
    <>
      <fieldset>
        <legend>Choose {text}:</legend>
        {values.map((value) => (
          <div key={value}>
            <label>
              <input name={name} type="checkbox" value={value} ref={register} />
              {data[value].name}
            </label>
          </div>
        ))}
      </fieldset>
    </>
  );
};
