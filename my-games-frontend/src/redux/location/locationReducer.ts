import { CHANGE_BREACRUMB, CHANGE_LOCATION } from './actionTypes';
import i18n from '../../config/i18n';

export interface State {
  data: String;
  breadcrumbs: Map<String, String>;
}

const generateBreadcrumb = (): Map<String, String> => {
  const routesBreadCrumb = new Map<String, String>();
  routesBreadCrumb.set('/catalog', i18n.t('catalog.breadcrumb'));
  routesBreadCrumb.set('/form', i18n.t('form.breadcrumb'));
  routesBreadCrumb.set('/', i18n.t('catalog.breadcrumb'));
  return routesBreadCrumb;
};

const initialState: State = {
  data: 'fr-CA',
  breadcrumbs: generateBreadcrumb(),
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_LOCATION:
      return {
        ...state,
        data: action.payload,
      };
    case CHANGE_BREACRUMB:
      return {
        ...state,
        breadcrumbs: generateBreadcrumb(),
      };
    default:
      return state;
  }
};

export default reducer;
