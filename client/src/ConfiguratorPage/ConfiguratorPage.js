import React, { useEffect } from "react";
import styled from 'styled-components';
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

import {GRAY500} from "../colors";

const PageContainer = styled.div`
  max-width: 350px;
  margin: 0 auto;
`

const RadioSetHorizontalContainer = styled.div`
  display: flex;
  margin: 24px 0;
`

const RadioSetHorizontalItem = styled.div`
  margin: 0 24px 0 0;
  display: flex;
  flex-direction: column;
`

const RadioSetHorizontalItemLabel = styled.div`
  font-size: 14px;
  color: ${GRAY500};
  margin-bottom: 4px;
  margin-left: 2px;
`

const ScrollableContainer = styled.div`
  overflow-x: scroll;
  padding-bottom: 12px;
`

export const ConfiguratorPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const status = useSelector(getIngredientsStatus);

  const cheeses = useSelector(getIngredientsByCategory("cheese"));
  const vegetables = useSelector(getIngredientsByCategory("vegetables"));
  const meat = useSelector(getIngredientsByCategory("meat"));

  const allIngredients = useSelector(getIngredients);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      size: "size_small",
      dough: "dough_thin",
      sauce: "sauce_tomato",
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
    <PageContainer>
      <h1>Artem pizza</h1>
      <h2>Choose your pizza:</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <RadioSetHorizontalContainer>
          
          <RadioSetHorizontalItem>
            <RadioSetHorizontalItemLabel>Размер</RadioSetHorizontalItemLabel>
            <RadioSet
              text="size"
              name="size"
              values={DATA.SIZE}
              register={register}
              watch={watch}
            />
          </RadioSetHorizontalItem>

          <RadioSetHorizontalItem>
            <RadioSetHorizontalItemLabel>Тесто</RadioSetHorizontalItemLabel>
            <RadioSet
              text="dough"
              name="dough"
              values={DATA.DOUGH}
              register={register}
              watch={watch}
            />
          </RadioSetHorizontalItem>
        </RadioSetHorizontalContainer>

        <ScrollableContainer>
          <RadioSetHorizontalItemLabel>Выберите соус</RadioSetHorizontalItemLabel>
          <RadioSet
            text="sauce"
            name="sauce"
            values={DATA.SAUCES}
            register={register}
            watch={watch}
          />
        </ScrollableContainer>

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
    </PageContainer>
  );
};
