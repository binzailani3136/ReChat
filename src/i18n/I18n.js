// @flow
import I18n from 'react-native-i18n';

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;

// English language is the main language for fall back:
I18n.translations = {
  en: require('./english.json'),
};

const languageCode = I18n.locale.substr(0, 2);

// All other translations for the app goes to the respective language file:
switch (languageCode) {
  case 'sl':
    I18n.translations.sl = require('./sl.json');
    break;
  /* case 'zu':
    I18n.translations.zu = require('./zu.json');
    break; */
  default:
    I18n.translations.en = require('./english.json');
}
