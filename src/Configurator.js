import React from "react";


function createState() {
    let state = [];
    state["mozzarella"] = { checked: false, price: 29 };
    state["cheddar"] = { checked: false, price: 29 };
    state["dorblu"] = { checked: false, price: 29 };
    state["tomato"] = { checked: false, price: 29 };
    state["mushrooms"] = { checked: false, price: 29 };
    state["paprika"] = { checked: false, price: 29 };
    state["bacon"] = { checked: false, price: 29 };
    state["pepperoni"] = { checked: false, price: 29 };
    state["ham"] = { checked: false, price: 29 };
    return state;
}

function Сonfigurator() {
    const [checkboxs, setCheckboxs] = React.useState(createState());
    //state for input "pizza size"
    const [largeSizeSelected, setLargeSizeSelected] = React.useState(false);

    //function for changing the "pizza size" state
    const changing = (event) => {
        setLargeSizeSelected(event.target.value === "largeSize");
    }

    //function for changing states of checkboxs
    const changingCheckbox = (name) => {
        return (event) => {
            let current = checkboxs;
            current[name].checked = event.target.checked;
            console.log("Change state");
            //Doesn't call render after state update
            setCheckboxs(current);
        };
    };

    const calculateSum = () => {
        console.log("Called");
        let totalSum = 200;
        if (largeSizeSelected) {
            totalSum += 50;
        }
        checkboxs.forEach(element => {
            if (element.checked) {
                totalSum += element.price;
            }
        });
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
