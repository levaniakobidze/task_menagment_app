import React, { useContext, useEffect, useState } from "react";
import {
  AddTaskModalOevrlay,
  AddTaskModalInner,
  AddTaskInputs,
  Input,
  TaskInputs,
  SelectBox,
} from "../../styles/AddTaskModal/AddTaskModal";
import { TodosContext } from "../../../context/todosContext";
import Button from "../../Button/Button";
import XIcon from "../../../assets/x.svg";
import Select from "react-select";

// Function to generate random ID
function generateRandomID(length: number) {
  const charset = "0123456789";
  let randomID = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomID += charset[randomIndex];
  }

  return randomID;
}

const EditTaskModal = () => {
  const {
    setShowAddTaskModal,
    selectedBoard,
    setBoards,
    boards,
    theme,
    taskStatusIndex,
    setTaskStatusIndex,
    selectedTask,
    showEditTaskModal,
  } = useContext(TodosContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [options, setOptions] = useState<any>([]);
  const [taskToEdit, setTaskToEdit] = useState({
    cardId: generateRandomID(8),
    title: "",
    description: "",
    sub_tasks: [
      {
        sub_task_id: generateRandomID(8),
        sub_task_title: "d",
        sub_completed: false,
      },
    ],
  });
  //   const [newTask, setNewTask] = useState<any>({
  //     cardId: generateRandomID(8),
  //     title: "",
  //     description: "",
  //     sub_tasks: [
  //       {
  //         sub_task_id: generateRandomID(8),
  //         sub_task_title: "Hello",
  //         sub_completed: false,
  //       },
  //     ],
  //   });

  useEffect(() => {
    setTaskToEdit(selectedTask);
    setTaskTitle(selectedTask.title);
    setDescription(selectedTask.description);
  }, [showEditTaskModal]);

  console.log(taskToEdit.sub_tasks);

  useEffect(() => {
    setTaskToEdit({ ...taskToEdit, title: taskTitle });
  }, [taskTitle]);
  /////
  useEffect(() => {
    setTaskToEdit({ ...taskToEdit, description: description });
  }, [description]);

  //  Function to add new  sub task
  const addNewSubTask = () => {
    const newSubtask = {
      sub_task_id: generateRandomID(8),
      sub_task_title: "ok",
      sub_completed: false,
    };
    setTaskToEdit({
      ...taskToEdit,
      sub_tasks: [...taskToEdit.sub_tasks, newSubtask],
    });
  };

  // Function to delete selected sub task
  const deleteSubtask = (id: number) => {
    const updatedSubtasks = taskToEdit.sub_tasks.filter(
      (sub: any) => sub.sub_task_id !== id
    );

    setTaskToEdit({ ...taskToEdit, sub_tasks: updatedSubtasks });
  };

  // Funcrion to handle subtask change

  const handleSubtaskChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedSubtasks = taskToEdit.sub_tasks;
    updatedSubtasks[index].sub_task_title = e.target.value;
    setTaskToEdit({ ...taskToEdit, sub_tasks: updatedSubtasks });
  };

  // Function to add new task

  const handleAddNewTask = () => {
    //
    const updatedBoards = boards;
    updatedBoards[selectedBoard].columns[taskStatusIndex].tasks = [
      ...updatedBoards[selectedBoard].columns[taskStatusIndex].tasks,
      taskToEdit,
    ];
    setBoards(updatedBoards);
    setShowAddTaskModal(false);

    // console.log(updatedBoards[selectedBoard].columns[0])
  };

  useEffect(() => {
    const columns = boards[selectedBoard].columns;
    setOptions(() =>
      columns.map((column: any, index: any) => {
        return { value: index, label: column.column };
      })
    );
  }, []);

  const selectStyles = {
    control: (baseStyles: any, state: any) => ({
      ...baseStyles,
      background: theme === "dark" ? "#2B2C37" : "#fff",
      outline: "none",
      border: "1px solid rgba(130, 143, 163, 0.25)",
      borderRadius: "4px",
    }),
  };

  const handleSelectChange = (selectedOption: any) => {
    setTaskStatusIndex(selectedOption.value);
  };

  return (
    <AddTaskModalOevrlay onClick={() => setShowAddTaskModal(false)}>
      <AddTaskModalInner onClick={(e) => e.stopPropagation()}>
        <h2>Add New Task</h2>
        <AddTaskInputs>
          <Input>
            <label htmlFor="board_name">Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="e.g. Web Design"
            />
          </Input>
          <Input>
            <label htmlFor="board_name">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
            />
          </Input>
          <div>
            <h2>Subtasks</h2>
            {taskToEdit.sub_tasks.map((sub: any, index: any) => {
              return (
                <TaskInputs key={index}>
                  <div>
                    <input
                      type="text"
                      onChange={(e) => handleSubtaskChange(e, index)}
                      value={sub.sub_task_title}
                      placeholder="e.g. Web Design"
                    />
                    <img
                      onClick={() => deleteSubtask(sub.sub_task_id)}
                      src={XIcon}
                      alt="x"
                    />
                  </div>
                </TaskInputs>
              );
            })}

            <Button
              marginTop={"20px"}
              disabled={false}
              width={"100%"}
              height={"40px"}
              size={"s"}
              type={"secondary"}
              onClick={addNewSubTask}
            >
              + Add New Subtask
            </Button>
            <SelectBox>
              <p>Status</p>
              <Select
                styles={selectStyles}
                // value={selectedOption}
                onChange={handleSelectChange}
                options={options}
              />
            </SelectBox>
            <Button
              marginTop={"10px"}
              disabled={false}
              width={"100%"}
              height={"40px"}
              size={"s"}
              type={"primary"}
              onClick={handleAddNewTask}
            >
              Edit task
            </Button>
          </div>
        </AddTaskInputs>
      </AddTaskModalInner>
    </AddTaskModalOevrlay>
  );
};

export default EditTaskModal;
