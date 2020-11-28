import { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { BillPage } from "./BillPage";
import { ConfiguratorPage } from "./ConfiguratorPage";
import { LoginPage } from "./LoginPage";
import { OrderHistoryPage } from "./OrderHistoryPage";
import { OrderPage } from "./OrderPage";
import { PageNotFoundPage } from "./PageNotFoundPage";
import { PaymentPage } from "./PaymentPage";
import { RegistrationPage } from "./RegistrationPage";
import { Navigation } from "./Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/bill">
          <BillPage />
        </Route>
        <Route exact path="/">
          <ConfiguratorPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/orderHistory">
          <OrderHistoryPage />
        </Route>
        <Route path="/order">
          <OrderPage />
        </Route>
        <Route path="/payment">
          <PaymentPage />
        </Route>
        <Route path="/registration">
          <RegistrationPage />
        </Route>
        <Route>
          <PageNotFoundPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
