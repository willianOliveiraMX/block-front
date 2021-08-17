import React from "react";
import { Route, Redirect } from "react-router-dom";
import isLogin from "./services/isLogin";

type Props = {
  component: React.ReactNode;
  path: string;
};

const PrivateRoute = ({ component, path }: Props): JSX.Element => {
  return (
    <Route
      render={() => (isLogin() ? { component } : <Redirect to="/login" />)}
      path={path}
    />
  );
};

export default PrivateRoute;
