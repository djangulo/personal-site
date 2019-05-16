import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import Root from './components/root';
import { ViewModes } from './store';

function App() {
  const appTheme = {
    [ViewModes.DEFAULT]: {
      colors: {
        primary: '#c2185b',
        primaryDark: '#8c0032',
        secondary: '#ce93d8',
        primaryText: '#ffffff',
        secondaryText: '#0c0c0c',
        highlight: '#d500f9'
      }
    },
    [ViewModes.MONOCHROMATIC]: {
      colors: {
        primary: '#a1acb3',
        secondary: '#ce93d8',
        primaryText: '#ffffff',
        secondaryText: '#0c0c0c',
        highlight: '#d500f9'
      }
    }
  };
  return (
    <div className="App">
      <ThemeProvider theme={appTheme}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Root />
        </React.Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
