import * as DATA from "./pizzaData";

export const calculateSum = ({ size, dough, sauce, ingredients }, data) => {
  let totalSum = DATA.BASE_PRICE;
  totalSum += DATA.SIZE.find((s) => s.slug === size)?.price;
  totalSum += DATA.DOUGH.find((d) => d.slug === dough)?.price;
  totalSum += DATA.SAUCES.find((s) => s.slug === sauce)?.price;

  ingredients.forEach((i) => {
    totalSum += data.find((data_i) => data_i.slug === i).price;
  });

  return totalSum;
};
