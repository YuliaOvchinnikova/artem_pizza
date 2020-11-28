import React from "react";
import { useHistory } from "react-router-dom";
import { calculateSum } from "./../calculateSum";
import * as DATA from "./../pizzaData";
import { usePizza } from "./../PizzaContext";
import { useForm } from "react-hook-form";

export const ConfiguratorPage = () => {
  const history = useHistory();
  const { setPizza } = usePizza();

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      size: "small",
      dough: "thin",
      sauce: "tomato",
      ingredients: [],
    },
  });

  const values = watch();
  const sum = calculateSum(values);

  const onSubmit = (data) => {
    setPizza(data);
    history.push("/order");
  };

  return (
    <>
      <h1>Artem pizza</h1>
      <h2>Choose your pizza:</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Choose pizza size:</legend>
          <label>
            <input name="size" type="radio" value="small" ref={register} />
            {DATA.SIZE.small.name}
          </label>
          <br />
          <label>
            <input name="size" type="radio" value="large" ref={register} />
            {DATA.SIZE.large.name}
          </label>
          <br />
        </fieldset>

        <br />

        <fieldset>
          <legend>Choose pizza dough:</legend>
          <label>
            <input name="dough" type="radio" value="thin" ref={register} />
            {DATA.DOUGH.thin.name}
          </label>
          <br />

          <label>
            <input name="dough" type="radio" value="thick" ref={register} />
            {DATA.DOUGH.thick.name}
          </label>
          <br />
        </fieldset>
        <br />
        <fieldset>
          <legend>Choose pizza sauce:</legend>
          <label>
            <input name="sauce" type="radio" value="tomato" ref={register} />
            {DATA.SAUCE.tomato.name}
          </label>
          <br />
          <label>
            <input name="sauce" type="radio" value="white" ref={register} />
            {DATA.SAUCE.white.name}
          </label>
          <br />
          <label>
            <input name="sauce" type="radio" value="hot" ref={register} />
            {DATA.SAUCE.hot.name}
          </label>
          <br />
        </fieldset>

        <br />

        <fieldset>
          <legend>Choose cheese:</legend>

          <label>
            <input
              name="ingredients"
              type="checkbox"
              value="mozzarella"
              ref={register}
            />
            {DATA.INGREDIENTS.mozzarella.name}
          </label>
          <br />

          <label>
            <input
              name="ingredients"
              type="checkbox"
              value="cheddar"
              ref={register}
            />
            {DATA.INGREDIENTS.cheddar.name}
          </label>
          <br />

          <label>
            <input
              name="ingredients"
              type="checkbox"
              value="dorblu"
              ref={register}
            />
            {DATA.INGREDIENTS.dorblu.name}
          </label>
          <br />
        </fieldset>

        <br />

        <fieldset>
          <legend>Choose vegetables:</legend>
          <label>
            <input
              name="ingredients"
              type="checkbox"
              value="tomato"
              ref={register}
            />
            {DATA.INGREDIENTS.tomato.name}
          </label>
          <br />

          <label>
            <input
              name="ingredients"
              type="checkbox"
              value="mushrooms"
              ref={register}
            />
            {DATA.INGREDIENTS.mushrooms.name}
          </label>
          <br />

          <label>
            <input
              name="ingredients"
              type="checkbox"
              value="paprika"
              ref={register}
            />
            {DATA.INGREDIENTS.paprika.name}
          </label>
          <br />
        </fieldset>

        <br />

        <fieldset>
          <legend>Choose meat:</legend>

          <label>
            <input
              name="ingredients"
              type="checkbox"
              value="bacon"
              ref={register}
            />
            {DATA.INGREDIENTS.bacon.name}
          </label>
          <br />

          <label>
            <input
              name="ingredients"
              type="checkbox"
              value="pepperoni"
              ref={register}
            />
            {DATA.INGREDIENTS.pepperoni.name}
          </label>
          <br />

          <label>
            <input
              name="ingredients"
              type="checkbox"
              value="ham"
              ref={register}
            />
            {DATA.INGREDIENTS.ham.name}
          </label>
          <br />
        </fieldset>

        <br />

        <button>Your order: {sum} RUB</button>
      </form>
    </>
  );
};
