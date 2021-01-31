import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderHistoryStatus, getOrders, fetchOrderHistory } from "../state";
import { TopBarWithBackArrow } from "./../shared/TopBarWithBackArrow";
import { AppTopField } from "./../shared/AppTopField";

const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  overflow-y: scroll;
  background: #f9f9fb;
  flex: none;
  order: 1;
  flex-grow: 1;
  margin: 0px 0px;
`;

const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;

  position: static;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 16px;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
  margin: 5px 0px;
`;

const SeparatorLine = styled.div`
  width: 296px;
  border: 1px dashed #e1e1ed;
  margin: 8px 0px 13px 0px;
`;

const Title = styled.h2`
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1f1f33;
`;

const Description = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: #4b4b7c;
`;

const Price = styled.div`
  font-family: Rounded Mplus 1c;
  font-size: 12px;
  line-height: 18px;
  font-weight: normal;
  color: #4b4b7c;
`;

export const OrderHistoryPage = () => {
  const dispatch = useDispatch();
  const status = useSelector(getOrderHistoryStatus);
  const data = useSelector(getOrders);
  console.log("DATA: ", data);

  useEffect(() => {
    dispatch(fetchOrderHistory());
  }, [dispatch]);

  if (status === "loading") {
    return <>Loading...</>;
  } else if (status === "error") {
    return <>Error.</>;
  }

  return (
    <>
      <AppTopField />
      <TopBarWithBackArrow title="Your order history" />

      <OrdersContainer>
        {data
          .filter((order) => order.name !== undefined)
          .map((order) => (
            <OrderSummaryContainer key={order.id}>
              <Title>{order.name}</Title>
              <Description>
                {[
                  order.size,
                  order.dough,
                  order.sauce,
                  ...order.ingredients,
                ].join(" • ")}
              </Description>
              <SeparatorLine />
              <Price>{order.price}</Price>
            </OrderSummaryContainer>
          ))}
      </OrdersContainer>
    </>
  );
};
