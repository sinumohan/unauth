import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../assets/css/App.css';
import { ExportPage, HomePage, ImportPage } from './containers';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/export'} component={ExportPage} />
          <Route path={'/import'} component={ImportPage} />
          <Route path={'/'} component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
