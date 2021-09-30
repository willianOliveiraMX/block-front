import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Domains from "./pages/Domains";
import Resources from "./pages/Resources";
import PrivateRoute from "./PrivateRoute";
import Header from "./components/Header";

const Routes = (): JSX.Element => {
  return (
    <Router>
      <Header isLoginPage={false} />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute component={() => <Domains />} path="/domains" />
        <PrivateRoute component={() => <Resources />} path="/resources" />
        <PrivateRoute component={() => <Domains />} path="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
