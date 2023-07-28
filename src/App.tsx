import { Fragment, useContext, useState } from "react";
import { GlobalStyles, MainSection } from "./components/styles/GlobalStyles";
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
import AddTaskModal from "./components/Modals/AddTask/AddTaskModal";

function App() {
  const { selectedTask, showAddBoardModal, boards, theme, showAddTaskModal } =
    useContext(TodosContext);

  return (
    <>
      <Fragment>
        <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
          <GlobalStyles />
          <Header />
          <MainSection>
            <SideBar />
            {boards.length ? (
              <Columns />
            ) : (
              <Empty>
                <p>This board is empty. Create a new column to get started.</p>
                <Button
                  disabled={false}
                  width={"200px"}
                  height={"40px"}
                  size={"s"}
                  type={"primary"}>
                  + Add New Column
                </Button>
              </Empty>
            )}
          </MainSection>
          {selectedTask && <TaskModal />}
          {showAddBoardModal && <AddBoardModal />}
          {showAddTaskModal && <AddTaskModal />}
        </ThemeProvider>
      </Fragment>
    </>
  );
}

export default App;
