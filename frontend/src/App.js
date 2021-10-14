
import React, {Fragment} from "react";

import MyNavbar from './components/menu/myNavbar';
import {Route, Router} from "react-router-dom";
import {createBrowserHistory} from "history";
import Customers from "./components/pages/customers";

const history = createBrowserHistory();

function App() {
  return (
      <Fragment>
        <Router history={history}>
            <MyNavbar />
            <Route path="/customers">
                <Customers />
            </Route>
        </Router>
      </Fragment>
  );
}

export default App;
