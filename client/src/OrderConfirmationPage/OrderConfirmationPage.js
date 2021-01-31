import { getOrderPayment, getOrderPizza, getIngredients } from "../state";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import checkIcon from "./assets/checkIcon.svg";
import { calculateSum } from "./../calculateSum";
import { getCardType } from "./../utils";
import { AppTopField } from "./../shared/AppTopField";
import { getSizeName, getDoughName, getSauceName } from "./../pizzaData";
import { TopBarWithCross } from "./../shared/TopBarWithCross";
import DeliveryLogo from "./delivery.svg";

const ConfirmationSummaryContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
  width: 360px;
  background: #ffffff;
  margin-top: 10px;
`;

const ConfirmationStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 40px;
  box-sizing: border-box;

  position: static;
  width: 328px;
  height: 167px;
  left: 16px;
  top: 16px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  /* margin: 0px 32px; */
`;
// Styles for Icon
const ConfirmedOrderIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;

  position: static;
  width: 67px;
  height: 67px;
  left: 130.5px;
  top: 0px;
  /* status/success */
  background: #00a896;
  border-radius: 99px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 24px;
`;

const IconContainer = styled.div`
  position: static;
  width: 35px;
  height: 35px;
  left: 16px;
  top: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 6px 2px;
  margin: 10px 0px;
`;

// Styled for Thank you for order
const TextFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  position: static;
  width: 248px;
  height: 76px;
  left: 40px;
  top: 91px;
  flex: none;
  /* order: 1; */
  flex-grow: 0;
  margin: 30px 24px;
`;

const ThanksText = styled.div`
  position: static;
  width: 248px;
  height: 28px;
  left: 0px;
  top: 0px;
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #1f1f33;
  flex: none;
  /* order: 0; */
  flex-grow: 0;
  margin: 0px 8px;
`;

const TextAboutDelivery = styled.div`
  position: static;
  width: 248px;
  height: 40px;
  left: 0px;
  top: 36px;
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #4b4b7c;
  flex: none;
  /* order: 1; */
  flex-grow: 0;
  margin: 0px 8px;
`;

// Styles for Order Summary Container

const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* text-align: center; */
  width: 328px;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 16px;
  flex: none;
  left: 40px;
  padding: 16px;
  position: static;
`;

const SeparatorLine = styled.div`
  width: 296px;
  border: 1px dashed #e1e1ed;
  margin: 8px 0px 8px 0px;
`;

const Title = styled.h2`
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
  justify-content: space-between;
  align-items: center;
  width: 158px;
  height: 20px;
  font-family: Rounded Mplus 1c;
  font-size: 12px;
  line-height: 18px;
  font-weight: normal;
  color: #4b4b7c;
  margin: 0px 8px 10px 8px;
`;

const Summa = styled.div`
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;
  color: #1f1f33;
  padding-right: 10px;
`;
const CardTypeLogo = styled.div`
  padding-right: 10px;
`;
const LastCardNumber = styled.div`
  padding-right: 30px;
`;
const StyledDeliveryLogo = styled.div`
  padding-right: 10px;
`;

const DeliveryStatus = styled.div`
  display: flex;
  flex-direction: row;
  width: 94px;
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #f3752b;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 0px;
`;

export const OrderConfirmationPage = () => {
  const payment = useSelector(getOrderPayment);
  const pizza = useSelector(getOrderPizza);
  const data = useSelector(getIngredients);

  if (!payment) {
    return <Redirect to="/" />;
  }
  const { cardNumber } = payment;

  if (!pizza) {
    return <Redirect to="/" />;
  }
  const { size, dough, sauce, ingredients } = pizza;
  // console.log(size);
  const sum = calculateSum(pizza, data);
  let sumPlusDelivery = sum + 180;

  return (
    <>
      <AppTopField />
      <TopBarWithCross />
      <ConfirmationSummaryContainer>
        <ConfirmationStatus>
          <ConfirmedOrderIcon>
            <IconContainer>
              <img src={checkIcon} alt="check icon" />
            </IconContainer>
          </ConfirmedOrderIcon>

          <TextFrame>
            <ThanksText>Thank you for your order!</ThanksText>
            <TextAboutDelivery>
              Payment is successful. Delivery time is about hour
            </TextAboutDelivery>
          </TextFrame>

          <OrderSummaryContainer>
            <Title>Lazy Margoritta</Title>
            <Description>
              {[
                getSizeName(size),
                getDoughName(dough),
                getSauceName(sauce),
                ...ingredients,
              ].join(" • ")}
            </Description>
            <SeparatorLine />
            <Bottom>
              <Summa>{sumPlusDelivery}</Summa>
              <CardTypeLogo>{getCardType(cardNumber[0])}</CardTypeLogo>
              <LastCardNumber>
                {"*" +
                  cardNumber[15] +
                  cardNumber[16] +
                  cardNumber[17] +
                  cardNumber[18]}
              </LastCardNumber>
              <StyledDeliveryLogo>
                <img src={DeliveryLogo} alt="delivery logo" />
              </StyledDeliveryLogo>
              <DeliveryStatus>Delivering...</DeliveryStatus>
              {/* {sumPlusDelivery +
                " •  card " +
                getCardType(cardNumber[0]) +
                " " +
                "*" +
                cardNumber[15] +
                cardNumber[16] +
                cardNumber[17] +
                cardNumber[18]} */}
            </Bottom>
            {/* <DeliveryStatus>Delivering...</DeliveryStatus> */}
          </OrderSummaryContainer>
        </ConfirmationStatus>
      </ConfirmationSummaryContainer>
    </>
  );
  // <p>Order sent to: {address}</p>;
};
