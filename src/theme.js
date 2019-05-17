import { ViewModes } from "./store";

const theme = {
  [ViewModes.DEFAULT]: {
    colors: {
      primary: "#c2185b",
      primaryDark: "#8c0032",
      secondary: "#ce93d8",
      primaryText: "#ffffff",
      secondaryText: "#0c0c0c",
      highlight: "#d500f9"
    }
  },
  [ViewModes.MONOCHROMATIC]: {
    colors: {
      primary: "#a1acb3",
      secondary: "#ce93d8",
      primaryText: "#ffffff",
      secondaryText: "#0c0c0c",
      highlight: "#d500f9"
    }
  }
};

export const getColorPalette = viewMode => theme[viewMode].colors;

export default theme;
