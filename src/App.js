import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import { createBrowserHistory } from "history";
import aws_exports from './aws-exports';
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HashRouter, Router, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "./layouts/Admin/Admin.js";
import RTLLayout from "./layouts/RTL/RTL.js";

import "./assets/scss/black-dashboard-react.scss";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";

Amplify.configure(aws_exports);
const hist = createBrowserHistory();

const cache = new InMemoryCache({
  dataIdFromObject: object => object.id || null
});

const client = new ApolloClient({
  link: createHttpLink({ uri: "localhost:3000" }),
  cache
});

class App extends Component {

  render () {
    return (
    <Router history={hist}>
      <ApolloProvider client={client}>
        <Switch>
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Route path="/rtl" render={props => <RTLLayout {...props} />} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </ApolloProvider>
    </Router>
    )
  }

}


export default withAuthenticator(App, true);
