import React from "react";
import { Route, Switch } from "react-router";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Components
import Header from "./components/Header";
import Login from "./components/Login";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </Provider>
  );
};

export default App;
