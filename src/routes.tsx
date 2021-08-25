import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Domains from "./pages/Domains";
import PrivateRoute from "./PrivateRoute";

const Routes = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute component={() => <Domains />} path="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
