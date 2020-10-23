import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/signIn-and-signUp/signIn-and-signUp.component"
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/Shop.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
