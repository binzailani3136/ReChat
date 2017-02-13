import { put, call, takeLatest } from 'redux-saga/effects';
import Types from '@actions/actionTypes';
import { addItem } from '@api/auth';
import { getCurrentUser } from '@api/auth';

function* runLoadTodos(action) {
  try {
    const user = yield call(getCurrentUser);
    console.log(user);
    const ret = yield call(addItem);
    yield put({
      type: Types.LOAD_TASKS_SUCCESS,
      payload: {
        todos: null, //response.todos,
      },
    });
  } catch (error) {
    yield put({
      type: Types.LOAD_TASKS_ERROR,
      payload: {
        error,
      },
    });
  }
}

export function* loadTodos() {
  yield takeLatest(Types.LOAD_TASKS_REQUEST, runLoadTodos);
}
