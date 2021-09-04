import I18n from 'i18n-js';
import en from './translations/en-CA.json';
import fr from './translations/fr-CA.json';
import pt from './translations/pt-BR.json';
import { DateTime } from 'luxon';
import LocalStorageService from '../../services/localStorage';
import { USER_LOCALE_KEY } from '../localStorageKeys';

I18n.translations = {
  'en-CA': en,
  'fr-CA': fr,
  'pt-BR': pt,
};

// I18n.locale = 'pt-BR';
// I18n.locale = 'en-CA';
// I18n.locale = 'fr-CA';
const userLocale = LocalStorageService.getItem(USER_LOCALE_KEY);
I18n.locale = userLocale || 'fr-CA';

console.log('current locale', I18n.currentLocale());
console.log('locales', I18n.locales.get('en-CA'));

console.log(DateTime.now().setLocale('fr').toLocaleString());
console.log('I18n.currentLocale', I18n.currentLocale());

const toLocaleString = (date: DateTime): String =>
  date.setLocale(I18n.currentLocale()).toLocaleString();

export { toLocaleString };
export default I18n;
