import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Layout from './layouts/index';
import Demo from './routes/demo/index';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Layout>
          <Switch>
              <Route exact path="/demo" component={Demo}/>
          </Switch>
        </Layout>
      </HashRouter>
    );
  }
}
