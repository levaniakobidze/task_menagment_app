import { useEffect, useContext, useState } from "react";
import {
  TaskModalOverlay,
  TaskModalInner,
  SubTasksInner,
  SubTaskCont,
} from "../../styles/Task/Task";
import { TodosContext } from "../../../context/todosContext";
import MenuIcon from "../../../assets/mobile_menu.svg";
import { SelectBox } from "../../styles/AddTaskModal/AddTaskModal";
import Select from "react-select";

const TaskModal = () => {
  const {
    selectedTask,
    setShowTaskModal,
    setSelectedTask,
    setShowEditTaskModal,
    selectedBoard,
    boards,
    theme,
  } = useContext(TodosContext);
  const [options, setOptions] = useState<any>([]);
  const column = boards[selectedBoard].columns[selectedTask.columnIndex];

  // useEffect(() => {
  //   const body = document.body;
  //   body.style.overflow = "hidden";
  // }, []);

  useEffect(() => {
    const columns = boards[selectedBoard].columns;
    setOptions(() =>
      columns.map((column: any, index: any) => {
        return { value: index, label: column.column };
      })
    );
  }, []);

  // Custom select styles
  const selectStyles = {
    control: (baseStyles: any, state: any) => ({
      ...baseStyles,

      "& input::placeholder": {
        color: "red",
      },
      background: theme === "dark" ? "#2B2C37" : "#fff",
      outline: "none",
      border: "1px solid rgba(130, 143, 163, 0.25)",
      borderRadius: "4px",
    }),
  };

  const handleSelectChange = (selectedOption: any) => {
    const colIndex = selectedOption.value;
    const columns = boards[selectedBoard].columns;
    columns[colIndex].tasks.push(selectedTask.task);
    //////////////////////////
    boards[selectedBoard].columns[selectedTask.columnIndex].tasks = columns[
      selectedTask.columnIndex
    ].tasks.filter((task: any) => task.cardId !== selectedTask.task.cardId);
    /////////////////////////
  };

  return (
    <TaskModalOverlay
      onClick={() => {
        setShowTaskModal(false);
        setSelectedTask(false);
      }}
    >
      <TaskModalInner onClick={(e) => e.stopPropagation()}>
        <h3>
          {selectedTask.task.title}
          <img
            src={MenuIcon}
            alt="dots"
            onClick={() => {
              setShowTaskModal(false);
              setShowEditTaskModal(true);
            }}
          />
        </h3>
        <p>{selectedTask.task.description}</p>
        <SubTasksInner>
          <p>Subtasks (0 of {selectedTask.task.sub_tasks.length})</p>
          {selectedTask.task.sub_tasks.map((subtask: any, index: number) => {
            return (
              <SubTaskCont key={index}>
                <input type="checkbox" />
                <h5>asd</h5>
              </SubTaskCont>
            );
          })}
        </SubTasksInner>
        <SelectBox>
          <p>Status</p>
          <Select
            styles={selectStyles}
            defaultValue={{
              value: selectedTask.columnIndex,
              label: column.column,
            }}
            onChange={handleSelectChange}
            options={options}
          />
        </SelectBox>
      </TaskModalInner>
    </TaskModalOverlay>
  );
};

export default TaskModal;
