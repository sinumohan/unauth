import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../assets/css/App.css';
import { ExportPage, HomePage, ImportPage } from './containers';
import { Routes } from '../../lib';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={Routes.EXPORT} component={ExportPage} />
          <Route path={Routes.IMPORT} component={ImportPage} />
          <Route path={Routes.HOME} component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
