import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { cleanup } from "react-testing-library";
import { renderWithReduxRouter } from "./testUtils";

afterEach(cleanup);

test("renders without crashing", () => {
  const { getByText } = renderWithReduxRouter(<App />);
});
