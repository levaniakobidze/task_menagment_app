import { Fragment, useState } from "react";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./components/styles/Theme";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Columns from "./components/Columns/Columns";

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
          <Header />
          <Columns />
          <Button
            disabled={false}
            width={"200px"}
            height={"40px"}
            size={"s"}
            type={"primary"}
            onClick={themeToggler}>
            toggle
          </Button>
        </ThemeProvider>
      </Fragment>
    </>
  );
}

export default App;
