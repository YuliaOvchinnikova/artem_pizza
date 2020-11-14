import { useState } from "react";
import { Сonfigurator } from "./Configurator";
import Order from "./Order";

function App() {
    const [pizza, setPizza] = useState();

    if (pizza) {
        return (
            <>
                <Order pizza={pizza} />
            </>
        );
    }

    return (
        <>
            <Сonfigurator onPizzaSubmit={setPizza} />
        </>
    );
}

export default App;