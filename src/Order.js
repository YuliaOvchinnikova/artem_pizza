import * as DATA from './pizzaData';
import { calculateSum } from './calculateSum';

function Order({ pizza }) {
    const { size, dough, sauce, ingredients } = pizza;
    const sum = calculateSum(pizza);
    return (
        <div>
            <h2>Your order </h2> <br />
            <p>Pizza with: </p> <br />
            <ul>
                <li>{DATA.SIZE[size].name}</li>
                <li>{DATA.DOUGH[dough].name}</li>
                <li>{DATA.SAUCE[sauce].name}</li>
                {ingredients.map(i => <li key={i}>{DATA.INGREDIENTS[i].name}</li>)}
            </ul>
            <h3>Order sum: {sum}</h3>
        </div>
    );
};

export default Order;