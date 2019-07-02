import React from "react"; //here React is a default export in the module react.
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom'; // here we are grabbing named exports
import { createBrowserHistory } from 'history';
import NotFoundPage from '../components/NotFoundPage.js';
import DashboardPage from '../components/DashboardPage.js';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
  <div>
  
    <Switch>
    <PublicRoute path="/" component={LoginPage} exact = {true}/>
    <PrivateRoute path="/dashboard" component={DashboardPage}/>
    <Route component={NotFoundPage}/>
    </Switch>
  </div>
</Router>
);

export default AppRouter;