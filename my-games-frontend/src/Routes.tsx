import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Catalog from './pages/Catalog';
import Form from './pages/Form';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/catalog'>
        <Catalog />
      </Route>
      <Route path='/form'>
        <Form />
      </Route>
      <Route path='/'>
        <Catalog />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
