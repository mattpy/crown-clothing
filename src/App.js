import React, { Component } from "react";
import "./App.css";
import "./pages/homepage/Homepage.scss";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/header/Header";
import HomePage from "./pages/homepage/Homepage";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import ShopPage from "./pages/shop/Shop";
import CheckoutPage from './pages/checkout/checkout';

import { auth, createUserProfileDocument } from "./firebase/firebase";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";
import { selectCurrentUser } from './redux/user/user-selectors';
import { createStructuredSelector } from "reselect";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />{" "}
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
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
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
