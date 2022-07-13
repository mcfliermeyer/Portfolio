import { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryBlue: "#7FCACB",
    primaryPinkish: "#FE7868",
    primaryYellow: "#ffc753",
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
