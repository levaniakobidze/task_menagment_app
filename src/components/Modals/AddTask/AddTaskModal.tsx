import React, { useContext, useEffect, useState } from "react";
import {
  AddTaskModalOevrlay,
  AddTaskModalInner,
  AddTaskInputs,
  Input,
  TaskInputs
} from "../../styles/AddTaskModal/AddTaskModal";
import { TodosContext } from "../../../context/todosContext";
import Button from "../../Button/Button";
import XIcon from '../../../assets/x.svg'



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



const AddTaskModal = () => {
  const { setShowAddTaskModal,selectedBoard,setBoards,boards } = useContext(TodosContext);
  const [subtaskTitle,setSubtaskTitle] = useState('')
  const [subtaskDescription,setSubtaskDescription] = useState('')
  const [newTask,setNewTask] = useState<any>({
    cardId: generateRandomID(8),
    title: "",
    description:
      "",
    sub_tasks: [
      {
        sub_task_id: generateRandomID(8),
        sub_task_title: "Hello",
        sub_completed: false,
      },
    ],
  },)

  useEffect(() => {
    setNewTask({...newTask,title:subtaskTitle})
  },[subtaskTitle])
  /////
  useEffect(() => {
    setNewTask({...newTask,description:subtaskDescription})
  },[subtaskDescription])

  //  Function to add new  sub task
  const addNewSubTask = () => {
    const newSubtask = {
      sub_task_id: generateRandomID(8),
      sub_task_title: "ok ",
      sub_completed: false,
    }
    setNewTask({...newTask, sub_tasks:[...newTask.sub_tasks,newSubtask]})
  }

  // Function to delete selected sub task
  const deleteSubtask = (id:number) => {
    const updatedSubtasks = newTask.sub_tasks.filter(
      (sub: any) => sub.sub_task_id !== id
    );
    
    setNewTask({...newTask,sub_tasks:updatedSubtasks})

  } 

  // Funcrion to handle subtask change

  const handleSubtaskChange = (e: React.ChangeEvent<HTMLInputElement>,index:number) => {
    const updatedSubtasks = newTask.sub_tasks;
    updatedSubtasks[index].sub_task_title = e.target.value;
    setNewTask({ ...newTask, sub_tasks: updatedSubtasks });
  }

  // Function to add new task
  
  const handleAddNewTask = () => {
    // 
    const updatedBoards = boards
    updatedBoards[selectedBoard].columns[0].tasks = [...updatedBoards[selectedBoard].columns[0].tasks,newTask]
    setBoards(updatedBoards)
    setShowAddTaskModal(false)

    // console.log(updatedBoards[selectedBoard].columns[0])
  }

  return (
    <AddTaskModalOevrlay onClick={() => setShowAddTaskModal(false)}>
      <AddTaskModalInner onClick={(e) => e.stopPropagation()}>
        <h2>Add New Task</h2>
        <AddTaskInputs>
          <Input>
            <label htmlFor="board_name">Title</label>
            <input value={subtaskTitle} onChange={(e) => setSubtaskTitle(e.target.value)} type="text" placeholder="e.g. Web Design" />
          </Input>
          <Input>
            <label htmlFor="board_name">Description</label>
            <textarea value={subtaskDescription} onChange={(e) => setSubtaskDescription(e.target.value)} placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little." />
          </Input>
          <div>
            <h2>Subtasks</h2>
            {newTask.sub_tasks.map((sub:any, index:any) => {
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
            <Button
              marginTop={"20px"}
              disabled={false}
              width={"100%"}
              height={"40px"}
              size={"s"}
              type={"primary"}
              onClick={handleAddNewTask}
              >
              Create New task
            </Button>
          </div>
        </AddTaskInputs>
      </AddTaskModalInner>
    </AddTaskModalOevrlay>
  );
};

export default AddTaskModal;
