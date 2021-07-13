import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Provider } from "react-redux";
import { store, history } from "./helpers";

import "./assets/css/black-dashboard-react.css";
import './assets/css/core/main.css';
import './assets/css/daygrid/main.css';
import './assets/css/timegrid/main.css'

import AdminLayout from "./layouts/Admin/Admin.jsx";
import PostLayout from "./layouts/Post/Post.jsx";
import Error from "./layouts/Error.jsx";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

import ReduxToastr from 'react-redux-toastr'

ReactDOM.render(
  <Provider store={store}>
     <ReduxToastr
      timeOut={1000}
      newestOnTop={false}
      preventDuplicates
      position="top-right"
      getState={(state) => state.toastr} 
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick/>
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/login"
          render={(props) => <PostLayout {...props} />}
        />
        <Route
          exact
          path="/registro"
          render={(props) => <PostLayout {...props} />}
        />                        
        <Route
          exact
          path="/"
          render={() => <Redirect to="/admin/dashboard" />}
        />
        <Route
          exact
          path="/admin"
          render={() => <Redirect to="/admin/dashboard" />}
        />          
        <PrivateRoute path="/admin" component={AdminLayout} />
        <Route component={Error} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
