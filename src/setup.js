import React, { Component } from 'react';
import { Provider } from 'react-redux';

import sagas from './sagas';
import '@i18n/I18n';
import AppNavigator from './AppNavigator';
import configureStore from './configureStore';

const store = configureStore();
sagas.forEach(saga => store.runSaga(saga));

function setup() {
  class Root extends Component {

    render() {
      return (
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      );
    }
  }

  return Root;
}

export default setup;
