import React from "react";
import Order from './Order';

const reducer = (state, action) => {
    switch (action.type) {
        case 'SIZE_CHANGED':
            state.size.size = action.size;
            return Object.create(state);
        case 'DOUGH_SELECTED':
            state.dough = action.dough;
            return Object.create(state);
        case 'SAUCE_SELECTED':
            state.sauce = action.sauce;
            return Object.create(state);

        case 'ING_SELECTED':
            state.ingredients[action.name].checked = action.checked;
            return Object.create(state);

        case 'SHOW_ORDER':
            state.showOrder = true;
            return Object.create(state);
        default:
            return state
    }
}

function Сonfigurator() {
    const [state, dispatch] = React.useReducer(reducer, {
        ingredients: {
            "mozzarella": { checked: false, price: 29 },
            "cheddar": { checked: false, price: 29 },
            "dorblu": { checked: false, price: 29 },
            "tomato": { checked: false, price: 29 },
            "mushrooms": { checked: false, price: 29 },
            "paprika": { checked: false, price: 29 },
            "bacon": { checked: false, price: 29 },
            "pepperoni": { checked: false, price: 29 },
            "ham": { checked: false, price: 29 }
        },
        size: { size: "30 sm", price: 50 },
        dough: "thin",
        sauce: "tomato sauce",
        showOrder: false
    });

    //function for changing the "pizza size" state
    const changingSize = (event) => {
        dispatch({ type: 'SIZE_CHANGED', size: event.target.value });
    }

    //function for changing the dough states     
    const changingDough = (event) => {
        dispatch({ type: 'DOUGH_SELECTED', dough: event.target.value });
    }

    //function for changing the Sauce states  
    const changingSauce = (event) => {
        console.log(event.target.value);
        dispatch({ type: 'SAUCE_SELECTED', sauce: event.target.value });
    }

    //function for changing states of checkboxs
    const changingCheckbox = (name) => {
        return (event) => {
            dispatch({ type: 'ING_SELECTED', name: name, checked: event.target.checked });
        };
    };

    const showOrder = () => {
        dispatch({ type: 'SHOW_ORDER' })
    };

    const calculateSum = () => {
        let totalSum = 200;
        if (state.size.size === "35 sm") {
            totalSum += state.size.price;
        }
        Object.values(state.ingredients).forEach(e => {
            if (e.checked) {
                totalSum += e.price;
            }
        })
        return totalSum;
    };

    return (
        <>
            {
                state.showOrder ? <Order data={state} /> : < div >
                    <h1>Artem pizza</h1>
                    <h2>Choose your pizza:</h2>

                    <form >
                        <div onChange={changingSize} >
                            <p>Choose pizza size:</p>
                            <input type="radio" id="baseSize" defaultChecked name="size" value="30 sm" />
                            <label htmlFor="baseSize">30 sm</label><br />
                            <input type="radio" id="largeSize" name="size" value="35 sm" />
                            <label htmlFor="largeSize">35 sm</label><br />
                        </div>

                        <br />

                        <div onChange={changingDough} >
                            <p>Choose pizza dough:</p>
                            <input type="radio" id="thin" defaultChecked name="dough" value="thin" />
                            <label htmlFor="thin">thin</label><br />
                            <input type="radio" id="thick " name="dough" value="thick " />
                            <label htmlFor="thick ">thick </label><br />
                        </div>

                        <br />

                        <div onChange={changingSauce} >
                            <p>Choose pizza sauce:</p>
                            <input type="radio" id="tomatoSauce" defaultChecked name="sauce" value="tomato sauce" />
                            <label htmlFor="tomatoSauce">tomato sauce</label><br />
                            <input type="radio" id="whiteSauce" name="sauce" value="white sauce" />
                            <label htmlFor="whiteSauce">white sauce</label><br />
                            <input type="radio" id="hotSauce" name="sauce" value="hot sauce" />
                            <label htmlFor="hotSauce">hot sauce</label><br />
                        </div>

                        <br />

                        <div>
                            <p>Choose cheese:</p>
                            <input type="checkbox" id="mozzarella" onChange={changingCheckbox("mozzarella")} name="mozzarellaCheese" />
                            <label htmlFor="mozzarella"> mozzarella cheese</label><br />
                            <input type="checkbox" id="cheddar" onChange={changingCheckbox("cheddar")} name="cheddarCheese" />
                            <label htmlFor="cheddar"> cheddar cheese</label><br />
                            <input type="checkbox" id="dorblu" onChange={changingCheckbox("dorblu")} name="dorbluCheese" />
                            <label htmlFor="dorblu"> dorblu cheese</label><br />
                        </div>

                        <br />

                        <div>
                            <p>Choose vegetables:</p>
                            <input type="checkbox" id="tomato" onChange={changingCheckbox("tomato")} name="tomato" />
                            <label htmlFor="tomato"> tomato</label><br />
                            <input type="checkbox" id="mushrooms" onChange={changingCheckbox("mushrooms")} name="mushrooms" />
                            <label htmlFor="mushrooms"> mushrooms</label><br />
                            <input type="checkbox" id="paprika" onChange={changingCheckbox("paprika")} name="paprika" />
                            <label htmlFor="paprika"> paprika</label><br />
                        </div>

                        <br />

                        <div>
                            <p>Choose meat:</p>
                            <input type="checkbox" id="bacon" onChange={changingCheckbox("bacon")} name="bacon" />
                            <label htmlFor="bacon"> bacon</label><br />
                            <input type="checkbox" id="pepperoni" onChange={changingCheckbox("pepperoni")} name="pepperoni" />
                            <label htmlFor="pepperoni"> pepperoni</label><br />
                            <input type="checkbox" id="ham" onChange={changingCheckbox("ham")} name="ham" />
                            <label htmlFor="ham"> ham</label><br />
                        </div>

                        <br />

                        <button type="button" onClick={showOrder}>Your order: {calculateSum()} RUB</button>
                    </form>

                </div >
            }
        </>

    );
}

export default Сonfigurator;
