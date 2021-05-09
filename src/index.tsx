import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Display, Home} from './pages';
import {store} from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <img src="../giphy-logo.gif" width="200" alt="Powered by GIPHY" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gif/:id"  component={Display} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
