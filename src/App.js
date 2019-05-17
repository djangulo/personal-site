import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";

import Root from "./components/root";

import theme from "./theme";

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Root />
        </React.Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
