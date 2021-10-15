import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import Customers from "./components/pages/customers";
import Goods from "./components/pages/goods";

const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <App>
                <Switch>
                    <Route exact path="/customers" component={Customers}/>
                    <Route exact path="/goods" component={Goods}/>
                </Switch>
            </App>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);