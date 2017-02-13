import Types from './actionTypes';

export const replaceRoute = route =>
  ({ type: Types.REPLACE_ROUTE, route });

export const pushNewRoute = route =>
  ({ type: Types.PUSH_NEW_ROUTE, route });

export const replaceOrPushRoute = route =>
  ({ type: Types.REPLACE_OR_PUSH_ROUTE, route });

export const popRoute = () =>
  ({ type: Types.POP_ROUTE });

export const popToRoute = route =>
  ({ type: Types.POP_TO_ROUTE, route });
