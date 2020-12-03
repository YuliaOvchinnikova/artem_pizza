import React from "react";
import { useHistory } from "react-router-dom";
import { calculateSum } from "./../calculateSum";
import * as DATA from "./../pizzaData";
import { usePizza } from "./../PizzaContext";
import { useForm } from "react-hook-form";
import { RadioSet } from "./RadioSet";
import { CheckboxSet } from "./CheckboxSet";

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
        <RadioSet
          text="size"
          name="size"
          values={["small", "large"]}
          register={register}
          data={DATA.SIZE}
        />

        <RadioSet
          text="dough"
          name="dough"
          values={["thin", "thick"]}
          register={register}
          data={DATA.DOUGH}
        />

        <RadioSet
          text="sauce"
          name="sauce"
          values={["tomato", "white", "hot"]}
          register={register}
          data={DATA.SAUCE}
        />

        <CheckboxSet
          text="cheese"
          name="ingredients"
          values={["mozzarella", "cheddar", "dorblu"]}
          register={register}
          data={DATA.INGREDIENTS}
        />

        <CheckboxSet
          text="vegetables"
          name="ingredients"
          values={["tomato", "mushrooms", "paprika"]}
          register={register}
          data={DATA.INGREDIENTS}
        />

        <CheckboxSet
          text="meat"
          name="ingredients"
          values={["bacon", "pepperoni", "ham"]}
          register={register}
          data={DATA.INGREDIENTS}
        />

        <button>Your order: {sum} RUB</button>
      </form>
    </>
  );
};
