import React, { useState } from "react";
import { useArray } from "./useArray";
import { calculateSum } from "./calculateSum";
import * as DATA from "./pizzaData";

export const Configurator = ({ onPizzaSubmit }) => {
    const [size, setSize] = useState("small");
    const [dough, setDough] = useState("thin");
    const [sauce, setSauce] = useState("tomato");
    const [ingredients, addIngredient, removeIngredient] = useArray([]);


    const changeSize = (event) => {
        setSize(event.target.value);
    }

    const changeDough = (event) => {
        setDough(event.target.value);
    }

    const changeSauce = (event) => {
        setSauce(event.target.value);
    }

    const changeIngredients = (event) => {
        if (event.target.checked) {
            addIngredient(event.target.value);
        } else {
            removeIngredient(event.target.value);
        }
    }

    const sum = calculateSum({ size, dough, sauce, ingredients });

    const onSubmit = (event) => {
        event.preventDefault();
        onPizzaSubmit({ size, dough, sauce, ingredients })
    }

    return (
        <>
            <h1>Artem pizza</h1>
            <h2>Choose your pizza:</h2>

            <form onSubmit={onSubmit}>
                <fieldset>
                    <legend>Choose pizza size:</legend>
                    <input type="radio" id="baseSize" checked={size === "small"} onChange={changeSize} value="small" />
                    <label htmlFor="baseSize">{DATA.SIZE.small.name}</label><br />
                    <input type="radio" id="largeSize" checked={size === "large"} onChange={changeSize} value="large" />
                    <label htmlFor="largeSize">{DATA.SIZE.large.name}</label><br />
                </fieldset>

                <br />

                <fieldset>
                    <legend>Choose pizza dough:</legend>
                    <input type="radio" id="thin" onChange={changeDough} checked={dough === "thin"} value="thin" />
                    <label htmlFor="thin">{DATA.DOUGH.thin.name}</label><br />
                    <input type="radio" id="thick" onChange={changeDough} checked={dough === "thick"} value="thick" />
                    <label htmlFor="thick ">{DATA.DOUGH.thick.name}</label><br />
                </fieldset>

                <br />

                <fieldset>
                    <legend>Choose pizza sauce:</legend>
                    <input type="radio" id="tomatoSauce" onChange={changeSauce} checked={sauce === "tomato"} value="tomato" />
                    <label htmlFor="tomatoSauce">{DATA.SAUCE.tomato.name}</label><br />
                    <input type="radio" id="whiteSauce" onChange={changeSauce} checked={sauce === "white"} value="white" />
                    <label htmlFor="whiteSauce">{DATA.SAUCE.white.name}</label><br />
                    <input type="radio" id="hotSauce" onChange={changeSauce} checked={sauce === "hot"} value="hot" />
                    <label htmlFor="hotSauce">{DATA.SAUCE.hot.name}</label><br />
                </fieldset>

                <br />

                <fieldset>
                    <legend>Choose cheese:</legend>
                    <input type="checkbox" id="mozzarella" value="mozzarella" onChange={changeIngredients} checked={ingredients.includes("mozzarella")} />
                    <label htmlFor="mozzarella">{DATA.INGREDIENTS.mozzarella.name}</label><br />
                    <input type="checkbox" id="cheddar" value="cheddar" onChange={changeIngredients} checked={ingredients.includes("cheddar")} />
                    <label htmlFor="cheddar">{DATA.INGREDIENTS.cheddar.name}</label><br />
                    <input type="checkbox" id="dorblu" value="dorblu" onChange={changeIngredients} checked={ingredients.includes("dorblu")} />
                    <label htmlFor="dorblu">{DATA.INGREDIENTS.dorblu.name}</label><br />
                </fieldset>

                <br />

                <fieldset>
                    <legend>Choose vegetables:</legend>
                    <input type="checkbox" id="tomato" value="tomato" onChange={changeIngredients} checked={ingredients.includes("tomato")} />
                    <label htmlFor="tomato">{DATA.INGREDIENTS.tomato.name}</label><br />
                    <input type="checkbox" id="mushrooms" value="mushrooms" onChange={changeIngredients} checked={ingredients.includes("mushrooms")} />
                    <label htmlFor="mushrooms">{DATA.INGREDIENTS.mushrooms.name}</label><br />
                    <input type="checkbox" id="paprika" value="paprika" onChange={changeIngredients} checked={ingredients.includes("paprika")} />
                    <label htmlFor="paprika">{DATA.INGREDIENTS.paprika.name}</label><br />
                </fieldset>

                <br />

                <fieldset>
                    <legend>Choose meat:</legend>
                    <input type="checkbox" id="bacon" value="bacon" onChange={changeIngredients} checked={ingredients.includes("bacon")} />
                    <label htmlFor="bacon">{DATA.INGREDIENTS.bacon.name}</label><br />
                    <input type="checkbox" id="pepperoni" value="pepperoni" onChange={changeIngredients} checked={ingredients.includes("pepperoni")} />
                    <label htmlFor="pepperoni">{DATA.INGREDIENTS.pepperoni.name}</label><br />
                    <input type="checkbox" id="ham" value="ham" onChange={changeIngredients} checked={ingredients.includes("ham")} />
                    <label htmlFor="ham">{DATA.INGREDIENTS.ham.name}</label><br />
                </fieldset>

                <br />

                <button>Your order: {sum} RUB</button>
            </form>
        </>
    );
}