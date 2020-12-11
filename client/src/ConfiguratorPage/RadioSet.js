import React from "react";

export const RadioSet = ({ text, name, values, register }) => {
  return (
    <>
      <fieldset>
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
      </fieldset>
    </>
  );
};
