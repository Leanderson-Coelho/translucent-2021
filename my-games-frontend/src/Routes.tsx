import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Form from './pages/Form';
import i18n from './config/i18n';

export const PATHS = {
  CATALOG: '/catalog',
  FORM: '/form',
};

const routesBreadCrumb = new Map<String, String>();
routesBreadCrumb.set('/catalog', i18n.t('catalog.breadcrumb'));
routesBreadCrumb.set('/form', i18n.t('form.breadcrumb'));
routesBreadCrumb.set('/', i18n.t('catalog.breadcrumb'));

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

export { routesBreadCrumb };
export default Routes;
