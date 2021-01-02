import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { calculateSum } from "./../calculateSum";
import * as DATA from "./../pizzaData";
import { useForm } from "react-hook-form";
import { RadioSet } from "./RadioSet";
import { CheckboxSet } from "./CheckboxSet";
import {
  getIngredientsStatus,
  getIngredientsByCategory,
  getIngredients,
  fetchIngredients,
  set_pizza,
} from "./../state";

export const ConfiguratorPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const status = useSelector(getIngredientsStatus);

  const sauces = useSelector(getIngredientsByCategory("Sauce"));
  const cheeses = useSelector(getIngredientsByCategory("Cheese"));
  const vegetables = useSelector(getIngredientsByCategory("Vegetables"));
  const meat = useSelector(getIngredientsByCategory("Meat"));

  const allIngredients = useSelector(getIngredients);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      size: "size_small",
      dough: "dough_thin",
      sauce: "tomato sauce",
      ingredients: [],
    },
  });

  if (status === "loading") {
    return <>Loading...</>;
  } else if (status === "error") {
    return <>Error...</>;
  }

  const values = watch();
  const sum = calculateSum(values, allIngredients);

  const onSubmit = (data) => {
    dispatch(set_pizza(data));
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
          values={DATA.SIZE}
          register={register}
        />

        <RadioSet
          text="dough"
          name="dough"
          values={DATA.DOUGH}
          register={register}
        />

        <RadioSet
          text="sauce"
          name="sauce"
          values={sauces}
          register={register}
        />

        <CheckboxSet
          text="cheese"
          name="ingredients"
          values={cheeses}
          register={register}
        />

        <CheckboxSet
          text="vegetables"
          name="ingredients"
          values={vegetables}
          register={register}
        />

        <CheckboxSet
          text="meat"
          name="ingredients"
          values={meat}
          register={register}
        />

        <button>Your order: {sum} RUB</button>
      </form>
    </>
  );
};
