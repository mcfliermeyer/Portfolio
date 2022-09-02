import { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryBlue: "#7FCACB",
    darkerBlue: "#28A2A4",
    primaryPinkish: "#FE7868",
    darkerPinkish: "#E2654D",
    primaryYellow: "#ffc753",
    darkerYellow: "#FAA700",
    primaryPurple: "#8E48FE",
    darkerPurple: "#6201FE",
  },
  fonts: {
    nameTitleFont: "Montserrat",
    lastNameFont: "Italianno",
    textFont: "Plus Jakarta Sans",
  },
  fontSizes: {},
};

type Props = {
  children: React.ReactNode;
};

const Theme: FunctionComponent<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
