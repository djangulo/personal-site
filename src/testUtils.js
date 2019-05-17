import React from "react";
import { createStore } from "redux";
import { render } from "react-testing-library";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { rootReducer } from "./store";
import { ThemeProvider } from "emotion-theming";

import theme from "./theme";

export const renderWithRedux = (
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  // adding `store` to the returned utilities to allow us
  // to reference it in our tests (just try to avoid using
  // this to test implementation details).
  store
});

function renderWithRouter(
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history
  };
}

export const renderWithReduxRouter = (
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {},
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => ({
  ...render(
    <Provider store={store}>
      <Router history={history}>
        <React.Suspense fallback={<div>This is loading.</div>}>
          {ui}
        </React.Suspense>
      </Router>
    </Provider>
  )
});

export const renderWithThemeReduxRouter = (
  ui,
  theme = theme,
  { initialState, store = createStore(rootReducer, initialState) } = {},
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => ({
  ...render(
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>{ui}</ThemeProvider>
      </Router>
    </Provider>
  )
});
