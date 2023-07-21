import { Fragment, useContext, useState } from "react";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./components/styles/Theme";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Columns from "./components/Columns/Columns";
import { TodosContext } from "./context/todosContext";
import TaskModal from "./components/Modals/TaskModal/TaskModal";
import { Empty } from "../src/components/styles/Columns/Columns";
import SideBar from "./components/SideBar/SideBar";
import AddBoardModal from "./components/Modals/AddBoardModal/AddBoardModal";

function App() {
  const { selectedTask, showAddBoardModal, columns } = useContext(TodosContext);
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
          <SideBar></SideBar>
          {columns.length ? (
            <Columns />
          ) : (
            <Empty>
              <p>This board is empty. Create a new column to get started.</p>
              <Button
                disabled={false}
                width={"200px"}
                height={"40px"}
                size={"s"}
                type={"primary"}
                onClick={themeToggler}>
                + Add New Column
              </Button>
            </Empty>
          )}
          {selectedTask && <TaskModal />}
          {showAddBoardModal && <AddBoardModal />}
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
