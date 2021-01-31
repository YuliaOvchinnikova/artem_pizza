import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  getOrderPizza,
  getOrderStatus,
  getIngredients,
  createOrder,
  set_payment_data,
  ORDER_SUCCESS,
  ORDER_SENDING,
  ORDER_ERROR,
} from "../state";
import { getCardType } from "./../utils";
import { DELIVERY_PRICE } from "./../pizzaData";
import { calculateSum } from "./../calculateSum";
// import { NavBar } from "./../LoginPage/NavBar";
import { TopBarWithCross } from "./../shared/TopBarWithCross";
import { AppTopField } from "./../shared/AppTopField";
import { getSizeName, getDoughName, getSauceName } from "./../pizzaData";

const Container = styled.div`
  height: 584px;
  overflow-x: auto;
  background: #f9f9fb;
  box-shadow: inset 0px 2px 2px rgba(20, 20, 55, 0.1);
  flex: none;
  order: 1;
  flex-grow: 1;
  margin: 0px 0px;
  max-width: 400px;
  overflow-x: auto;
`;

const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 16px 16px;
  width: 328px;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 16px;
  flex: none;
`;

const SeparatorLine = styled.div`
  width: 296px;
  border: 1px dashed #e1e1ed;
  margin: 8px 0px 8px 0px;
`;

const PizzaName = styled.h2`
  display: flex;
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1f1f33;
  align-items: flex-start;
  align-self: stretch;
  margin: 0px 8px 10px 8px;
  padding-top: 10px;
`;

const Description = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 12px;
  line-height: 18px;
  color: #4b4b7c;
  margin: 0px 8px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  width: 158px;
  font-family: Rounded Mplus 1c;
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
  color: #4b4b7c;
  margin: 0px 8px 10px 8px;
`;
const Title = styled.h2`
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1f1f33;
  margin: 10px 16px;
`;

const LargeInput = styled.input`
  display: flex;
  width: 328px;
  padding: 8px;
  background: #ffffff;
  border: 2px solid #e1e1ed;
  box-sizing: border-box;
  border-radius: 6px;
  margin: 0px 16px;
`;

const HorizontalContainer = styled.div`
  display: flex;
  margin: 0px 16px 16px 16px;
`;

const HorizontalItem = styled.div`
  display: inline-block;
  margin: 0px;
  margin-top: 10px;
`;

const HorizontalItemLabel = styled.div`
  font-size: 14px;
  color: #4b4b7c;
  margin-bottom: 4px;
  margin-left: 2px;
`;
const AddressInput = styled.input`
  width: 90%;
  background: #ffffff;
  border: 2px solid #e1e1ed;
  box-sizing: border-box;
  border-radius: 6px;
  margin-top: 10px;
`;

const CardDateInput = styled.input`
  width: 50%;
  background: #ffffff;
  border: 2px solid #e1e1ed;
  box-sizing: border-box;
  border-radius: 6px;
`;

const CardCVVInput = styled.input`
  width: 20%;
  background: #ffffff;
  border: 2px solid #e1e1ed;
  box-sizing: border-box;
  border-radius: 6px;
  margin: 0px 0px 0px 85px;
`;

const AddressSeparatorLine = styled.div`
  border: 1px solid #e1e1ed;
  margin: 10px 16px;
  width: 328px;
`;

const Footer = styled.div`
  position: static;
  /* display: flex; */

  width: 100%;
  height: 148px;
  /* bottom: 10px; */
  background: #ffffff;
  box-shadow: 0px -16px 32px rgba(75, 75, 124, 0.05),
    0px 0px 4px rgba(75, 75, 124, 0.1);
  padding: 0px 16px;
`;

const BlockColumn = styled.div`
  display: inline-block;
  margin-left: 6px;
  margin-right: -30px;
  margin-top: 10px;
  width: 50%;
  padding: 0px;
`;
const BlockColumnText = styled.div`
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #4b4b7c;
`;
const StyledButton = styled.button`
  /* display: flex; */
  width: 328px;
  /* height: 72px; */
  margin-top: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  background: ${(props) => (props.activated ? "#00A896" : "#f9f9fb")};
  border-radius: 16px;
  border: none;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`;

const StyledButtonText = styled.p`
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
  color: ${(props) => (props.activated ? "#FFFFFF" : "#8181b1")};
  opacity: ${(props) => (props.activated ? "1" : "0.5")};
  flex: none;
  margin: 0px 0px;
`;

export const normalizeCardNumber = (value) => {
  if (
    value === undefined ||
    typeof value !== "string" ||
    !/^(\d+\s*)+$/.test(value)
  ) {
    return "";
  }
  return (
    value
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      ?.join(" ")
      .substr(0, 19) || ""
  );
};

export const normalizeCVV = (value) => {
  if (
    value === undefined ||
    typeof value !== "string" ||
    !/^(\d+)+$/.test(value)
  ) {
    return "";
  }
  return value.substr(0, 3);
};

export const PaymentPage = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, setValue, watch } = useForm();
  const [cardType, setCardType] = useState("");
  const pizza = useSelector(getOrderPizza);
  const status = useSelector(getOrderStatus);
  const data = useSelector(getIngredients);
  const [activated, setActivated] = useState();

  if (!pizza) {
    return <Redirect to="/" />;
  }

  const { size, dough, sauce, ingredients } = pizza;
  const sum = calculateSum(pizza, data);

  const watchAllFields = watch();

  if (status === ORDER_SENDING) {
    return <p>Sending</p>;
  } else if (status === ORDER_SUCCESS) {
    return <Redirect to="/orderConfirmation" />;
  } else if (status === ORDER_ERROR) {
    return <p>Error</p>;
  }
  let sumPlusDelivery = sum + DELIVERY_PRICE;

  const onSubmit = async (paymentData) => {
    const address = `${paymentData.address} ${paymentData.staircase} ${paymentData.apartment} ${paymentData.floor}`;
    const payment = {
      address: address,
      name: paymentData.name,
      cardNumber: paymentData.cardNumber,
      price: sumPlusDelivery,
    };
    dispatch(set_payment_data(payment));
    dispatch(createOrder({ pizza, payment }));
  };

  const onChange = (event) => {
    const { value } = event.target;
    setValue("cardNumber", normalizeCardNumber(value));
    let cardType = getCardType(value[0]);
    setCardType(cardType);
  };

  const onChangeCVV = (event) => {
    const { value } = event.target;
    setValue("CVV", normalizeCVV(value));
  };

  const onFormChange = () => {
    if (
      watchAllFields !== undefined &&
      watchAllFields.address !== "" &&
      watchAllFields.staircase !== "" &&
      watchAllFields.apartment !== "" &&
      watchAllFields.floor !== "" &&
      watchAllFields.cardNumber !== "" &&
      watchAllFields.expirationDate !== "" &&
      watchAllFields.verificationValue !== "" &&
      watchAllFields.name !== ""
    ) {
      console.log("activated");
      setActivated(true);
    } else {
      console.log("non-activated");
      setActivated(false);
    }
  };

  return (
    <>
      <AppTopField />
      <TopBarWithCross />
      <Container>
        <OrderSummaryContainer>
          <PizzaName>Lazy Margoritta</PizzaName>
          <Description>
            {[
              getSizeName(size),
              getDoughName(dough),
              getSauceName(sauce),
              ...ingredients,
            ].join(" • ")}
          </Description>
          <SeparatorLine />
          <Bottom>{sum}</Bottom>
        </OrderSummaryContainer>

        <Title>Put your address:</Title>

        <form
          onSubmit={handleSubmit(onSubmit)}
          onChange={onFormChange}
          activated={`${activated}`}
        >
          <div>
            <LargeInput
              name="address"
              placeholder="Your address"
              ref={register}
            />
            <HorizontalContainer>
              <HorizontalItem>
                <HorizontalItemLabel htmlFor="staircase">
                  Staircase:
                </HorizontalItemLabel>
                <AddressInput
                  name="staircase"
                  placeholder="staircase"
                  ref={register}
                />
              </HorizontalItem>
              <HorizontalItem>
                <HorizontalItemLabel htmlFor="apartment">
                  Apartment:
                </HorizontalItemLabel>
                <AddressInput
                  name="apartment"
                  placeholder="apartment"
                  ref={register}
                />
              </HorizontalItem>
              <HorizontalItem>
                <HorizontalItemLabel htmlFor="floor">
                  Floor:
                </HorizontalItemLabel>
                <AddressInput name="floor" placeholder="floor" ref={register} />
              </HorizontalItem>
            </HorizontalContainer>
            <AddressSeparatorLine />
            <Title>Payment details:</Title>
            <LargeInput
              placeholder="0000 0000 0000 0000"
              type="tel"
              inputMode="numeric"
              autoComplete="cc-number"
              name="cardNumber"
              id="cardNumber"
              onChange={onChange}
              ref={register}
            />
            <HorizontalContainer>
              <HorizontalItem>
                <CardDateInput
                  name="expirationDate"
                  placeholder="MM/YYYY"
                  type="month"
                  min="2000-01"
                  defaultValue="2021-01"
                  ref={register({
                    valueAsDate: true,
                  })}
                />
                <CardCVVInput
                  name="CVV"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="cc-number"
                  placeholder="CVV"
                  id="cardNumber"
                  onChange={onChangeCVV}
                  ref={register}
                />
              </HorizontalItem>
            </HorizontalContainer>
            <LargeInput
              name="name"
              placeholder="Cardholder name"
              ref={register}
            />
            <p>{cardType}</p>
          </div>
          <Footer>
            <BlockColumn>
              <BlockColumnText>Order's sum</BlockColumnText>
              <BlockColumnText>Delivery sum</BlockColumnText>
              <BlockColumnText style={{ fontWeight: "bold" }}>
                Sum
              </BlockColumnText>
            </BlockColumn>
            <BlockColumn style={{ textAlign: "right" }}>
              <BlockColumnText>{sum}</BlockColumnText>
              <BlockColumnText>{DELIVERY_PRICE}</BlockColumnText>
              <BlockColumnText style={{ fontWeight: "bold" }}>
                {sumPlusDelivery}
              </BlockColumnText>
            </BlockColumn>

            <StyledButton disabled={!activated} activated={activated}>
              <StyledButtonText activated={activated}>Submit</StyledButtonText>
            </StyledButton>
          </Footer>
        </form>
      </Container>
    </>
  );
};
