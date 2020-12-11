import { useState, useEffect } from "react";
import { getOrders } from "./../api";

export const OrderHistoryPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const loadData = async () => {
      const orders = await getOrders();
      setData(orders);
      setIsLoading(false);
    };
    loadData();
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
