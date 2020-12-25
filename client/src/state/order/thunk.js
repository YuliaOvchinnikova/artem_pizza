import { createNewOrder } from "../../api";
import { requestOrder, orderSuccess, orderError } from "./actions";

export const createOrder = (pizza, paymentData) => async (dispatch) => {
  dispatch(requestOrder());
  try {
    const order = {
      ingredients: [pizza.size, pizza.dough, pizza.sauce, ...pizza.ingredients],
      address: paymentData.address,
      name: paymentData.name,
      card_number: paymentData.cardNumber,
    };
    await createNewOrder(order);
    dispatch(orderSuccess());
  } catch (error) {
    console.log(error);
    dispatch(orderError());
  }
};
