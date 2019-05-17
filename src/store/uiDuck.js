// QUACK! This is a duck. https://github.com/erikras/ducks-modular-redux
import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";

import i18n from "../i18n";

// Actions
export const TOGGLE_EDIT_MODE = "TOGGLE_EDIT_MODE";
export const SET_GLOBAL_FONT_SIZE = "SET_GLOBAL_FONT_SIZE";
export const SET_VIEW_MODE = "SET_VIEW_MODE";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const TOGGLE_SETTINGS = "TOGGLE_SETTINGS";

export const ViewModes = {
  COLORBLIND: "COLORBLIND",
  MONOCHROMATIC: "MONOCHROMATIC",
  HIGH_CONTRAST: "HIGH_CONTRAST",
  DEFAULT: "DEFAULT"
};

export const Languages = [
  // code: language code
  // unchanged: name of language in original language
  // trans: string to pass to i18next.t()
  {
    code: "en",
    unchanged: "English",
    trans: "translation:languages.en"
  },
  {
    code: "es",
    unchanged: "Español",
    trans: "translation:languages.es"
  }
];

const initialState = {
  editMode: false,
  languageCode: i18n.language || Languages[0].code,
  viewMode: ViewModes.DEFAULT,
  globalFontSize: 16,
  settingsOpen: false
};

// Action creators
export const toggleEditMode = () => ({
  type: TOGGLE_EDIT_MODE
});

export const setFontSize = size => ({
  type: SET_GLOBAL_FONT_SIZE,
  payload: size
});

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS
});

export const setViewMode = mode => ({ type: SET_VIEW_MODE, payload: mode });

export const setLanguage = (languageCode, i18nInstance) => ({
  type: SET_LANGUAGE,
  payload: languageCode,
  i18nInstance
});

// Epics. https://redux-observable.js.org/docs/basics/Epics.html
export const setLanguageEpic = action$ =>
  action$.pipe(
    ofType(SET_LANGUAGE),
    mergeMap(({ payload, i18nInstance }) =>
      i18nInstance.changeLanguage(payload)
    )
  );

// Selectors
export const getViewMode = state => state.ui.viewMode;
export const getFontSize = state => state.ui.globalFontSize;

// Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_EDIT_MODE:
      return {
        ...state,
        editMode: !state.editMode
      };
    case SET_VIEW_MODE:
      return {
        ...state,
        viewMode: action.payload
      };
    case SET_LANGUAGE:
      return {
        ...state,
        languageCode: action.payload
      };
    case SET_GLOBAL_FONT_SIZE:
      return {
        ...state,
        globalFontSize: action.payload
      };
    case TOGGLE_SETTINGS:
      return {
        ...state,
        settingsOpen: !state.settingsOpen
      };
    default:
      return state;
  }
};

export default reducer;
