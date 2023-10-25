import { defaultTheme } from "./Styles/Themes/default";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Styles/globals";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
