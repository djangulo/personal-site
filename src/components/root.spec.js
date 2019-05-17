import React from "react";
import { withRouter } from "react-router";
import { cleanup, waitForElement } from "react-testing-library";

import jest from "jest";

import Root from "./root";
import { renderWithReduxRouter } from "../testUtils";

const Portfolio = () => <div>Portfolio now!</div>;
const Home = () => <div>Home</div>;
const Lab = () => <div>Lab</div>;
const Blog = () => <div>Blog</div>;

const LocationDisplay = withRouter(({ location }) => (
  <div data-testid='location-display'>{location.pathname}</div>
));

afterEach(cleanup);

test("can render with defaults", async () => {
  const { getByText } = renderWithReduxRouter(<Root />);
  await waitForElement(() => getByText("Home"));
});

// test("full app rendering/navigating", async () => {
//   const { container, getByText } = await waitForElement(() =>
//     renderWithReduxRouter(<Root />)
//   );
//   // normally I'd use a data-testid, but just wanted to show this is also possible
//   expect(container.innerHTML).toMatch("personal website");
//   const leftClick = { button: 0 };
//   fireEvent.click(getByText(/about/i), leftClick);
//   // normally I'd use a data-testid, but just wanted to show this is also possible
//   expect(container.innerHTML).toMatch("You are on the about page");
// });
