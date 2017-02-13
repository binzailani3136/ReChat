import Types from './actionTypes';

export const setHomeTab = homeTab =>
  ({ type: Types.SET_HOME_TAB, homeTab });
export const setProjectTab = projectTab =>
  ({ type: Types.SET_PROJECT_TAB, projectTab });
