import React from "react";
import { Route, Switch } from "react-router";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Components
import Header from "./components/Header";
import Login from "./components/Login";
import Detail from './components/Detail';
import Home from './components/Home';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Switch>
        <Route path="/detail/:id" component={Detail} />
        <Route path="/home" component={Home} />
        <Route path="/" component={Login} exact />
      </Switch>
    </Provider>
  );
};

export default App;
