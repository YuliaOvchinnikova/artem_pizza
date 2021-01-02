import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrderHistoryStatus,
  getOrders,
} from "../state/orderHistory/selectors";
import { fetchOrderHistory } from "../state/orderHistory/thunk";

export const OrderHistoryPage = () => {
  const dispatch = useDispatch();
  const status = useSelector(getOrderHistoryStatus);
  const data = useSelector(getOrders);

  useEffect(() => {
    dispatch(fetchOrderHistory());
  }, []);

  if (status === "loading") {
    return <>Loading...</>;
  } else if (status === "error") {
    return <>Error.</>;
  }

  return (
    <>
      <h1>Order List page</h1>
      <ul>
        {data
          .filter((order) => order.name !== undefined)
          .map((order) => (
            <li key={order.name}>
              <ul>
                <li>Name: {order.name} </li>
                <li>
                  Ingredients:
                  {order.ingredients === undefined
                    ? ""
                    : order.ingredients.join()}
                </li>
                <li>Address: {order.address}</li>
                <li>Card number: {order.card_number}</li>
              </ul>
            </li>
          ))}
      </ul>
    </>
  );
};
