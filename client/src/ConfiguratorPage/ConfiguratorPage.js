import React from "react";
import { useHistory } from "react-router-dom";
import { calculateSum } from "./../calculateSum";
import * as DATA from "./../pizzaData";
import { usePizza } from "./../PizzaContext";
import { useForm } from "react-hook-form";
import { FieldSet } from "./FieldSet";

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
        <FieldSet
          text="size"
          name="size"
          type="radio"
          values={["small", "large"]}
          register={register}
          data={DATA.SIZE}
        />

        <FieldSet
          text="dough"
          name="dough"
          type="radio"
          values={["thin", "thick"]}
          register={register}
          data={DATA.DOUGH}
        />

        <FieldSet
          text="sauce"
          name="sauce"
          type="radio"
          values={["tomato", "white", "hot"]}
          register={register}
          data={DATA.SAUCE}
        />

        <FieldSet
          text="cheese"
          name="ingredients"
          type="checkbox"
          values={["mozzarella", "cheddar", "dorblu"]}
          register={register}
          data={DATA.INGREDIENTS}
        />

        <FieldSet
          text="vegetables"
          name="ingredients"
          type="checkbox"
          values={["tomato", "mushrooms", "paprika"]}
          register={register}
          data={DATA.INGREDIENTS}
        />

        <FieldSet
          text="meat"
          name="ingredients"
          type="checkbox"
          values={["bacon", "pepperoni", "ham"]}
          register={register}
          data={DATA.INGREDIENTS}
        />

        <button>Your order: {sum} RUB</button>
      </form>
    </>
  );
};
