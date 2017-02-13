import { REHYDRATE } from 'redux-persist/constants';

import { globalNav } from '@src/AppNavigator';
import Types from '@actions/actionTypes';

export type State = {
  routes: Array<string>
}

const initialState = {
  routes: ['login']
};

export default function (state:State = initialState, action:Action): State {

  // console.log(state, "route state *()*(*&77");
  if (action.type === Types.PUSH_NEW_ROUTE) {
    // console.log(action.route, "route");
    globalNav.navigator.push({id: action.route});
    return {
      routes: [...state.routes, action.route]
    };
  }

  if (action.type === Types.REPLACE_ROUTE) {
    globalNav.navigator.replaceWithAnimation({id: action.route});
    let routes = state.routes;
    routes.pop();
    return {
      routes: [...routes, action.route]
    };
  }

  // For sidebar navigation
  if (action.type === Types.REPLACE_OR_PUSH_ROUTE) {
    let routes = state.routes;

    if(routes[routes.length - 1] == 'home') {
      // If top route is home and user navigates to a route other than home, then push
      if(action.route != 'home')
        globalNav.navigator.push({id: action.route});

      // If top route is home and user navigates to home, do nothing
      else
        routes = [];
    }

    else {
      if(action.route == 'home') {
        globalNav.navigator.resetTo({id: 'home'});
        routes = [];
      }
      else {
        globalNav.navigator.replaceWithAnimation({id: action.route});
        routes.pop();
      }

    }

    return {
      routes: [...routes, action.route]
    };
  }

  if (action.type === Types.POP_ROUTE) {
    globalNav.navigator.pop();
    let routes = state.routes;
    routes.pop();
    return {
      routes: routes
    }
  }

  if (action.type === Types.POP_TO_ROUTE) {
    globalNav.navigator.popToRoute({id: action.route});
    let routes = state.routes;
    while (routes.pop() !== action.route) {}
    return {
      routes: [...routes, action.route]
    }
  }

  if (action.type === REHYDRATE) {
    const savedData = action['payload']['route'] || state;
    return {
      ...savedData
    }
  }

  return state;
}
