import React, { Component } from 'react';
// import { browserHistory, BrowserRouter as Router, Route, IndexRoute } from 'react-router';
import Layout from './layouts/index';
import Demo from './routes/demo/index';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Demo />
      </Layout>
      // <Router history={browserHistory}>
      //   <Route path='/' component={Layout}>
      //     <IndexRoute component={Demo} />
      //   </Route>
      // </Router>
    );
  }
}
