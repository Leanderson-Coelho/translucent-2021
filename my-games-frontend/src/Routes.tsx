import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Form from './pages/Form';

export const PATHS = {
  CATALOG: '/catalog',
  FORM: '/form',
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path={PATHS.CATALOG}>
        <Catalog />
      </Route>
      <Route path={PATHS.FORM}>
        <Form />
      </Route>
      <Route path='/'>
        <Catalog />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
