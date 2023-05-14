import { Fragment, useState } from "react";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./components/styles/Theme";
import Button from "./components/Button/Button";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Fragment>
        <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
          <GlobalStyles />
          <Button
            type={"destructive"}
            size={"l"}
            width={"255px"}
            height={"48px"}
            onClick={themeToggler}></Button>
        </ThemeProvider>
      </Fragment>
    </>
  );
}

export default App;
