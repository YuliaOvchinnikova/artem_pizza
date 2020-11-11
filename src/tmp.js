import React from "react";

function Сonfigurator() {
  const [sum, setSum] = React.useState(200);
  //stage for input "radio-button"
  const [largeSizeSelected, setLargeSizeSelected] = React.useState(false);
  //stage for inputs "checkboxs"
  //cheese
  const [mozzarellaSelected, setMozzarellaSelected] = React.useState(false);
  const [cheddarSelected, setCheddarSelected] = React.useState(false);
  const [dorbluSelected, setDorbluSelected] = React.useState(false);
  //souce
  const [tomatoSelected, setTomatoSelected] = React.useState(false);
  const [whiteSelected, setWhiteSelected] = React.useState(false);
  const [hotSelected, setHotSelected] = React.useState(false);
  //meat
  const [baconSelected, setBaconSelected] = React.useState(false);
  const [pepperoniSelected, setPepperoniSelected] = React.useState(false);
  const [hamSelected, setHamSelected] = React.useState(false);

  //function for changing of input "radio-button"
  const changing = (event) => {
    if (event.target.value === "largeSize") {
      setLargeSizeSelected(true);
    } else {
      setLargeSizeSelected(false);
    }
  }

  //function for changing of input "radio-button"
  const changingCheckboxs = (event) => {
    if (event.target.value === "1") {
      setMozzarellaSelected(event.target.checked);
    }
    if (event.target.value === "2") {
      setCheddarSelected(event.target.checked);
    }
    if (event.target.value === "3") {
      setDorbluSelected(event.target.checked);
    }
    if (event.target.value === "4") {
      setTomatoSelected(event.target.checked);
    }
    if (event.target.value === "5") {
      setWhiteSelected(event.target.checked);
    }
    if (event.target.value === "6") {
      setHotSelected(event.target.checked);
    }
    if (event.target.value === "7") {
      setBaconSelected(event.target.checked);
    }
    if (event.target.value === "8") {
      setPepperoniSelected(event.target.checked);
    }
    if (event.target.value === "9") {
      setHamSelected(event.target.checked);
    }

  };

  //function for calculating of sum
  const calculateSum = () => {
    let totalSum = sum;
    if (largeSizeSelected) {
      totalSum += 50;
    }
    if (mozzarellaSelected) {
      totalSum += 29;
    }
    if (cheddarSelected) {
      totalSum += 29;
    }
    if (dorbluSelected) {
      totalSum += 29;
    }
    if (tomatoSelected) {
      totalSum += 29;
    }
    if (whiteSelected) {
      totalSum += 29;
    }
    if (hotSelected) {
      totalSum += 29;
    }
    if (baconSelected) {
      totalSum += 29;
    }
    if (pepperoniSelected) {
      totalSum += 29;
    }
    if (hamSelected) {
      totalSum += 29;
    }
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
          <input type="checkbox" id="mozzarellaCheese" onChange={changingCheckboxs} name="mozzarellaCheese" value="1" />
          <label htmlFor="mozzarellaCheese"> mozzarella cheese</label><br />
          <input type="checkbox" id="cheddarCheese" onChange={changingCheckboxs} name="cheddarCheese" value="2" />
          <label htmlFor="cheddarCheese"> cheddar cheese</label><br />
          <input type="checkbox" id="dorbluCheese" onChange={changingCheckboxs} name="dorbluCheese" value="3" />
          <label htmlFor="dorbluCheese"> dorblu cheese</label><br />
        </div>

        <br />

        <div>
          <p>Choose vegetables:</p>
          <input type="checkbox" id="tomato" onChange={changingCheckboxs} name="tomato" value="4" />
          <label htmlFor="tomato"> tomato</label><br />
          <input type="checkbox" id="mushrooms" onChange={changingCheckboxs} name="mushrooms" value="5" />
          <label htmlFor="mushrooms"> mushrooms</label><br />
          <input type="checkbox" id="paprika" onChange={changingCheckboxs} name="paprika" value="6" />
          <label htmlFor="paprika"> paprika</label><br />
        </div>

        <br />

        <div>
          <p>Choose meat:</p>
          <input type="checkbox" id="bacon" onChange={changingCheckboxs} name="bacon" value="7" />
          <label htmlFor="bacon"> bacon</label><br />
          <input type="checkbox" id="pepperoni" onChange={changingCheckboxs} name="pepperoni" value="8" />
          <label htmlFor="pepperoni"> pepperoni</label><br />
          <input type="checkbox" id="ham" onChange={changingCheckboxs} name="ham" value="9" />
          <label htmlFor="ham"> ham</label><br />
        </div>

        <br />

        <button type="button">Your order: {calculateSum()} RUB</button>
      </form>

    </div>
  );
}

// export default Сonfigurator;
