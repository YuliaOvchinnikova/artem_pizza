import { Route, Switch } from "react-router-dom";
import { Navigation } from "./Navigation";
import { AddIngredient } from "./AddIngredient";
import { IngredientList } from "./IngredientList";
import { Ingredient } from "./Ingredient";
import { Home } from "./Home";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/addIngredient">
          <AddIngredient />
        </Route>
        <Route path="/ingredientList/:id">
          <Ingredient />
        </Route>
        <Route path="/ingredientList">
          <IngredientList />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        {/* <Route>
          <PageNotFoundPage />
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
