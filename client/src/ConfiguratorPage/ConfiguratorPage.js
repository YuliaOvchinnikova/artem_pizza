import React, { useState, useEffect } from "react";
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
  INGREDIENTS_LOADING,
  INGREDIENTS_ERROR,
} from "./../state";
import { AppTopField } from "./../shared/AppTopField";
import styled from "styled-components";
import plate from "./assets/plate.svg";
import thin from "./assets/thin.svg";
import thick from "./assets/thick.svg";
import { ADDRESS } from "./../api";

const Container = styled.div`
  max-width: 350px;
  margin: 0 auto;
  overflow-x: auto;
`;

const Title = styled.h2`
  /* font-family: Rounded Mplus 1c; */
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 36px;
  color: #1f1f33;
  margin: 16px 69px 0 16px;
`;
const PizzaView = styled.div`
  position: relative;
  left: 0;
  top: 0;
  margin: 15px;
`;

const StylePlate = styled.img`
  width: 300px;
  height: 275px;
  position: relative;
  top: 0;
  left: 0;
`;

const StyleIngredient = styled.img`
  width: 220px;
  height: 220px;
  position: absolute;
  top: 15px;
  left: 25px;
`;

const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 296px;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 16px;
  flex: none;
`;

const Description = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 12px;
  line-height: 18px;
  color: #4b4b7c;
  margin: 0px 8px;
`;

const RadioSetHorizontalContainer = styled.div`
  display: flex;
  margin: 24px 0;
`;

const RadioSetHorizontalItem = styled.div`
  margin: 0 24px 0 0;
  display: flex;
  flex-direction: column;
`;

const RadioSetHorizontalItemLabel = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #4b4b7c;
  margin-bottom: 4px;
  margin-left: 2px;
`;

const StyleAroundButton = styled.div`
  display: flex;
  height: 72px;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 12px 0px;
  background: #ffffff;
  box-shadow: 0px -16px 32px rgba(75, 75, 124, 0.05),
    0px 0px 4px rgba(75, 75, 124, 0.1);
  border: none;
  text-align: center;
`;

const StyleButton = styled.button`
  width: 100%;
  justify-content: center;
  align-items: center;
  /* padding: 12px 16px; */
  background: #00a896;
  border-radius: 16px;
  /* margin: 0px 16px; */
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  border: none;
`;

const ScrollContainer = styled.div`
  overflow-x: scroll;
  padding-bottom: 12px;
`;

export const ConfiguratorPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const status = useSelector(getIngredientsStatus);

  const cheeses = useSelector(getIngredientsByCategory("cheese"));
  const vegetables = useSelector(getIngredientsByCategory("vegetables"));
  const meat = useSelector(getIngredientsByCategory("meat"));

  const allIngredients = useSelector(getIngredients);

  const [size, setSize] = useState("size_small");
  const [dough, setDough] = useState("thin");
  const [sauce, setSauce] = useState("sauce_tomato");

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      ingredients: [],
    },
  });

  if (status === INGREDIENTS_LOADING) {
    return <>Loading...</>;
  } else if (status === INGREDIENTS_ERROR) {
    return <>Error...</>;
  }

  const { ingredients } = watch();
  const sum = calculateSum({ size, dough, sauce, ingredients }, allIngredients);

  const onSubmit = () => {
    dispatch(set_pizza({ size, dough, sauce, ingredients }));
    history.push("/payment");
  };

  return (
    <>
      <AppTopField />
      <Container>
        <Title>Put your pizza together:</Title>
        <PizzaView>
          <StylePlate src={plate} alt="pizza plate" />
          {dough === "thin" ? (
            <StyleIngredient src={thin} alt="thin dough" />
          ) : (
            <StyleIngredient src={thick} alt="thick dough" />
          )}

          {ingredients.map((ingredientSlug) => {
            const selectedIngredient = allIngredients.find(
              (ingredient) => ingredient.slug === ingredientSlug
            );
            return (
              <StyleIngredient
                key={selectedIngredient.id}
                src={ADDRESS + `/${selectedIngredient.image}`}
                alt={selectedIngredient.name}
              />
            );
          })}
        </PizzaView>

        <OrderSummaryContainer>
          <Description>{ingredients.join(" • ")}</Description>
        </OrderSummaryContainer>

        <form onSubmit={handleSubmit(onSubmit)}>
          <RadioSetHorizontalContainer>
            <RadioSetHorizontalItem>
              <RadioSetHorizontalItemLabel>Size</RadioSetHorizontalItemLabel>
              <RadioSet name="size" values={DATA.SIZE} setter={setSize} />
            </RadioSetHorizontalItem>

            <RadioSetHorizontalItem>
              <RadioSetHorizontalItemLabel>Dough</RadioSetHorizontalItemLabel>
              <RadioSet name="dough" values={DATA.DOUGH} setter={setDough} />
            </RadioSetHorizontalItem>
          </RadioSetHorizontalContainer>

          <ScrollContainer>
            <RadioSetHorizontalItemLabel>
              Choose sauce
            </RadioSetHorizontalItemLabel>
            <RadioSet name="sauce" values={DATA.SAUCES} setter={setSauce} />
          </ScrollContainer>

          <ScrollContainer>
            <RadioSetHorizontalItemLabel>
              Add cheese
            </RadioSetHorizontalItemLabel>
            <CheckboxSet
              name="ingredients"
              values={cheeses}
              register={register}
            />
          </ScrollContainer>

          <ScrollContainer>
            <RadioSetHorizontalItemLabel>
              Add vegetables
            </RadioSetHorizontalItemLabel>
            <CheckboxSet
              name="ingredients"
              values={vegetables}
              register={register}
            />
          </ScrollContainer>

          <ScrollContainer>
            <RadioSetHorizontalItemLabel>Add meat</RadioSetHorizontalItemLabel>
            <CheckboxSet name="ingredients" values={meat} register={register} />
          </ScrollContainer>
          <StyleAroundButton>
            <StyleButton>Your order: {sum} RUB</StyleButton>
          </StyleAroundButton>
        </form>
      </Container>
    </>
  );
};
