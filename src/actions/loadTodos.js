import Types from './actionTypes';

export const loadTodos = text =>
  ({ type: Types.LOAD_TASKS_REQUEST, text });

