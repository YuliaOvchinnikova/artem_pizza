import React from "react";

export const FieldSet = ({ text, name, type, values, register, data }) => {
  return (
    <>
      <fieldset>
        <legend>Choose {text}:</legend>
        {values.map((value) => (
          <div key={value}>
            <label>
              <input name={name} type={type} value={value} ref={register} />
              {data[value].name}
            </label>
            <br />
          </div>
        ))}
      </fieldset>
      <br />
    </>
  );
};
