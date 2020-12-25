import { getPaymentData } from "../state/order/selectors";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export const OrderConfirmationPage = () => {
  const { address } = useSelector(getPaymentData);
  if (!address) {
    return <Redirect to="/" />;
  }
  return <p>Order sent to: {address}</p>;
};