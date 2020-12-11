import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { calculateSum } from "./../calculateSum";
import * as DATA from "./../pizzaData";
import { usePizza } from "./../PizzaContext";
import { useData } from "./../DataContext";
import { useForm } from "react-hook-form";
import { RadioSet } from "./RadioSet";
import { CheckboxSet } from "./CheckboxSet";
import { getIngredients } from "./../api";

export const ConfiguratorPage = () => {
  const history = useHistory();
  const { setPizza } = usePizza();

  const [isLoading, setIsLoading] = useState(true);
  const { data, setData } = useData();

  const loadData = async () => {
    const dataFromServer = await getIngredients();
    setData(dataFromServer.map((i) => ({ ...i, price: parseInt(i.price) })));
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      size: "size_small",
      dough: "dough_thin",
      sauce: "tomato sauce",
      ingredients: [],
    },
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  const values = watch();
  const sum = calculateSum(values, data);

  const onSubmit = (data) => {
    setPizza(data);
    history.push("/order");
  };

  const getDataByCategory = (category) => {
    return data.filter((i) => i.category === category);
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
          values={getDataByCategory("Sauce")}
          register={register}
        />

        <CheckboxSet
          text="cheese"
          name="ingredients"
          values={getDataByCategory("Cheese")}
          register={register}
        />

        <CheckboxSet
          text="vegetables"
          name="ingredients"
          values={getDataByCategory("Vegetables")}
          register={register}
        />

        <CheckboxSet
          text="meat"
          name="ingredients"
          values={getDataByCategory("Meat")}
          register={register}
        />

        <button>Your order: {sum} RUB</button>
      </form>
    </>
  );
};
