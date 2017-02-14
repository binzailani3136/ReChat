import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import Types from '@actions/actionTypes';

export const initialState = Immutable({
  homeTab: 'chats',
  projectTab: 'list', // list, main, chart, report
});
const homeTab = (state, action) => ({
  ...state,
  homeTab: action.homeTab,
});
const projectTab = (state, action) => ({
  ...state,
  projectTab: action.projectTab,
});
const actionHandlers = {
  [Types.SET_HOME_TAB]: homeTab,
  [Types.SET_PROJECT_TAB]: projectTab,
};
export default createReducer(initialState, actionHandlers);
