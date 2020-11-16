import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { GlobalStyle } from "./global.styles";

import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/signIn-and-signUp/signIn-and-signUp.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/Shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";

// REDUX
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
