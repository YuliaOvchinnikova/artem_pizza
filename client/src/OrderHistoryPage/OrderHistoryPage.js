import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading, getOrders } from "../state/orderHistory/selectors";
import { fetchOrders } from "../state/orderHistory/thunk";

export const OrderHistoryPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const data = useSelector(getOrders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  if (isLoading) {
    return <>Loading...</>;
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
