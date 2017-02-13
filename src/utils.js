import I18n from 'react-native-i18n';

const Utils = {
  clone(obj) {
    if (obj == null || typeof obj !== 'object') return obj;
    let copy = obj.constructor();
    for (let attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
  },
  getStringFromDate(date) {
    const month = (date.getMonth() + 1);
    const day = date.getDate();
    const year = date.getFullYear();
    // if (month.length < 2) month = '0' + month;
    // if (day.length < 2) day = '0' + day;
    return day + '/' + month + '/' + year;
  },
};

export default Utils;
