import React from "react";

export const CheckboxSet = ({ text, name, values, register }) => {
  return (
    <>
      <fieldset>
        <legend>Choose {text}:</legend>
        {values.map((value) => (
          <div key={value.id}>
            <label>
              <input
                name={name}
                type="checkbox"
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
