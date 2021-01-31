import { Route, Switch } from "react-router-dom";
import { ConfiguratorPage } from "./ConfiguratorPage";
import { LoginPage } from "./LoginPage";
import { OrderHistoryPage } from "./OrderHistoryPage";
import { OrderPage } from "./OrderPage";
import { OrderConfirmationPage } from "./OrderConfirmationPage";
import { PageNotFoundPage } from "./PageNotFoundPage";
import { PaymentPage } from "./PaymentPage";
import { RegistrationPage } from "./RegistrationPage";
import { Navigation } from "./Navigation";
import { useSelector } from "react-redux";
import { getIsAuthorized } from "./state";

function App() {
  const isAuthorized = useSelector(getIsAuthorized);

  return (
    <>
      {/* <Navigation /> */}
      <Switch>
        <Route exact path="/">
          <ConfiguratorPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        {/* {isAuthorized && ( */}
        <Route path="/orderHistory">
          <OrderHistoryPage />
        </Route>
        {/* )} */}
        <Route path="/order">
          <OrderPage />
        </Route>
        <Route path="/payment">
          <PaymentPage />
        </Route>
        <Route path="/orderConfirmation">
          <OrderConfirmationPage />
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
