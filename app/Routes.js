import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import ExportPage from './containers/ExportPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.EXPORT} component={ExportPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
