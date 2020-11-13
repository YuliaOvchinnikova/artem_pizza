import React from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'ING_SELECTED':
            state.ingredients[action.name].checked = action.checked;
            return Object.create(state);
        case 'SIZE_CHANGED':
            state.size.isLarge = action.isLarge;
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
        size: { isLarge: false, price: 50 }
    });

    //function for changing the "pizza size" state
    const changing = (event) => {
        dispatch({ type: 'SIZE_CHANGED', isLarge: event.target.value === "largeSize" });
    }

    //function for changing states of checkboxs
    const changingCheckbox = (name) => {
        return (event) => {
            dispatch({ type: 'ING_SELECTED', name: name, checked: event.target.checked });
        };
    };

    const calculateSum = () => {
        console.log(state);
        let totalSum = 200;
        if (state.size.isLarge) {
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
        <div>
            <h1>Artem pizza</h1>
            <h2>Choose your pizza:</h2>

            <form >
                <div onChange={changing} >
                    <p>Choose pizza size:</p>
                    <input type="radio" id="baseSize" defaultChecked name="size" />
                    <label htmlFor="baseSize">30 sm</label><br />
                    <input type="radio" id="largeSize" name="size" value="largeSize" />
                    <label htmlFor="largeSize">35 sm</label><br />
                </div>

                <br />

                <div>
                    <p>Choose pizza dough:</p>
                    <input type="radio" id="thin" defaultChecked name="dough" value="thin" />
                    <label htmlFor="thin">thin</label><br />
                    <input type="radio" id="thick " name="dough" value="thick " />
                    <label htmlFor="thick ">thick </label><br />
                </div>

                <br />

                <div>
                    <p>Choose pizza sauce:</p>
                    <input type="radio" id="tomatoSauce" defaultChecked name="sauce" value="tomatoSauce" />
                    <label htmlFor="tomatoSauce">tomato sauce</label><br />
                    <input type="radio" id="whiteSauce" name="sauce" value="whiteSauce" />
                    <label htmlFor="whiteSauce">white sauce</label><br />
                    <input type="radio" id="hotSauce" name="sauce" value="hotSauce" />
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

                <button type="button">Your order: {calculateSum()} RUB</button>
            </form>

        </div>
    );
}

export default Сonfigurator;
