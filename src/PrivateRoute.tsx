import React from "react";
import { Route, Redirect } from "react-router-dom";
import isLogin from "./services/isLogin";

type Props = {
  component: React.ComponentType;
  path: string;
};

const PrivateRoute = ({ component: Component, path }: Props): JSX.Element => {
  return (
    <Route path={path}>
      {isLogin() ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
