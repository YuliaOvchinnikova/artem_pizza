import { useState } from "react";
import { Configurator } from "./Configurator";
import { Order } from "./Order";

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
            <Configurator onPizzaSubmit={setPizza} />
        </>
    );
}

export default App;