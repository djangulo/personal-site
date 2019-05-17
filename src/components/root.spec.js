import React from 'react';
import { withRouter } from 'react-router';
import { Link, Route, Router, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Root from './root';

import { renderWithReduxRouter } from './testUtils';

const Portfolio = () => <div>Portfolio now!</div>;
const Home = () => <div>Home</div>;
const Lab = () => <div>Lab</div>;
const Blog = () => <div>Blog</div>;

const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
));

afterEach(cleanup);

test('can render with redux with defaults', () => {
  const { getByTestId, getByText } = renderWithReduxRouter(<Root />);
  fireEvent.click(getByText('+'));
  expect(getByTestId('count-value').textContent).toBe('1');
});

test('full app rendering/navigating', () => {
  const { container, getByText } = renderWithReduxRouter(<Root />);
  // normally I'd use a data-testid, but just wanted to show this is also possible
  expect(container.innerHTML).toMatch('personal website');
  const leftClick = { button: 0 };
  fireEvent.click(getByText(/about/i), leftClick);
  // normally I'd use a data-testid, but just wanted to show this is also possible
  expect(container.innerHTML).toMatch('You are on the about page');
});
