import React from "react";
import { Route, Switch } from "react-router";

// Components
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
};

export default App;
