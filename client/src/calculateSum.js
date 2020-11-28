import * as DATA from './pizzaData';


export const calculateSum = ({ size, dough, sauce, ingredients }) => {
    let totalSum = DATA.BASE_PRICE;
    totalSum += DATA.SIZE[size].price;
    totalSum += DATA.DOUGH[dough].price;
    totalSum += DATA.SAUCE[sauce].price;

    ingredients.forEach(i => {
        totalSum += DATA.INGREDIENTS[i].price;
    })

    return totalSum;
};