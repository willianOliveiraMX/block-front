import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Domains from "./pages/Domains";
import Resources from "./pages/Resources";
import PrivateRoute from "./PrivateRoute";
import Header from "./components/Header";
import Platform from "./pages/Platform";

const Routes = (): JSX.Element => {
  const [toggleHeaderState, setToggleHeaderState] = useState(false);
  const handleHeaderSwich = (state: boolean) => {
    setToggleHeaderState(state);
  };

  return (
    <Router>
      <Header isLoginPage={false} toggleHeader={toggleHeaderState} />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute component={() => <Domains />} path="/domains" />
        <PrivateRoute component={() => <Resources />} path="/resources" />
        <PrivateRoute
          component={() => <Platform handleHeaderSwich={handleHeaderSwich} />}
          path="/platform/:domainId"
        />
        <PrivateRoute component={() => <Domains />} path="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
