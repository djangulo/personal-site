import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import ui, { setLanguageEpic } from './uiDuck';

export * from './uiDuck';

export const rootEpic = combineEpics(setLanguageEpic);

export const rootReducer = combineReducers({
  ui
});
