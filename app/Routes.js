import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import { App, ExportPage, HomePage, ImportPage } from './containers';

export default () => (
  <App>
    <Switch>
      <Route path={routes.EXPORT} component={ExportPage} />
      <Route path={routes.IMPORT} component={ImportPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
